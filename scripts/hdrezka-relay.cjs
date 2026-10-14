// Private metadata relay using the same URL and cookie contract as Online Mod.
// Bind to loopback; expose it through HTTPS or a tunnel. Never log request URLs.
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const { randomInt, timingSafeEqual } = require('node:crypto');
const { isIP } = require('node:net');
const { Readable } = require('node:stream');
const { pipeline } = require('node:stream/promises');

function parseCookies(value) {
  const cookies = new Map();
  for (const part of value.split(';')) {
    const separator = part.indexOf('=');
    if (separator > 0) cookies.set(part.slice(0, separator).trim(), part.slice(separator + 1).trim());
  }
  return cookies;
}

function loadClearance(file) {
  if (!file) return null;
  try {
    if (fs.statSync(file).size > 16384) throw new Error();
    return JSON.parse(fs.readFileSync(file, 'utf8').replace(/^\uFEFF/, ''));
  } catch {
    // JSON diagnostics can contain the offending token. Never log them.
    throw new Error('Invalid browser clearance file.');
  }
}

function createRelay({ token, origin = 'https://kvk.zone', clearance = null, fetchImpl = fetch } = {}) {
  if (!/^(?:\d{8}|[a-zA-Z0-9_-]{24,128})$/.test(token || '')) throw new Error('An eight-digit code or a private token of at least 24 characters is required.');
  const allowed = new URL(origin);
  if (allowed.protocol !== 'https:' || allowed.username || allowed.password || allowed.port) throw new Error('The mirror must use HTTPS without a custom port.');
  let browserCookies = null;
  let browserUserAgent = '';
  if (clearance !== null && (!clearance || typeof clearance !== 'object' || Array.isArray(clearance))) throw new Error('Invalid browser clearance configuration.');
  if (clearance && Object.keys(clearance).length) {
    let browserOrigin;
    try { browserOrigin = new URL(clearance.origin); } catch { throw new Error('Invalid browser clearance origin.'); }
    if (browserOrigin.origin !== allowed.origin || browserOrigin.username || browserOrigin.password || browserOrigin.pathname !== '/' || browserOrigin.search || browserOrigin.hash) throw new Error('Browser clearance must belong to the configured mirror.');
    if (typeof clearance.cookie !== 'string' || !clearance.cookie || clearance.cookie.length > 16384 || /[\x00-\x1f\x7f]/.test(clearance.cookie)) throw new Error('Invalid browser clearance cookie.');
    if (typeof clearance.userAgent !== 'string' || !clearance.userAgent.trim() || clearance.userAgent.length > 512 || /[\x00-\x1f\x7f]/.test(clearance.userAgent)) throw new Error('A valid browser User-Agent is required for clearance.');
    browserCookies = parseCookies(clearance.cookie);
    const permitted = /^(?:techaro\.lol-anubis-(?:auth|cookie-verification)(?:-[a-f0-9]{8})?|_vc_id|_vc_day)$/;
    if (!browserCookies.size || [...browserCookies.keys()].some((name) => !permitted.test(name)) || ![...browserCookies.keys()].some((name) => /^techaro\.lol-anubis-auth(?:-|$)/.test(name))) throw new Error('Only browser verification cookies are accepted; exclude account cookies.');
    browserUserAgent = clearance.userAgent;
  }
  const expected = Buffer.from(token);
  const failures = new Map();
  const attemptWindow = 60000;
  const workerSource = fs.readFileSync(path.join(__dirname, '../cloudflare_worker.js'), 'utf8');

  async function restrictedFetch(input, options = {}) {
    let request = new Request(input);
    let body = request.method !== 'GET' && request.method !== 'HEAD' ? await request.arrayBuffer() : undefined;
    const signal = AbortSignal.any([request.signal, AbortSignal.timeout(15000)]);
    for (let redirects = 0; redirects <= 5; redirects++) {
      const url = new URL(request.url);
      if (url.origin !== allowed.origin || url.username || url.password) throw new Error('Only the configured HDRezka mirror is allowed.');
      const upstreamHeaders = new Headers(request.headers);
      if (browserCookies) {
        const cookies = parseCookies(upstreamHeaders.get('cookie') || '');
        for (const [name, value] of browserCookies) cookies.set(name, value);
        upstreamHeaders.set('cookie', [...cookies].map(([name, value]) => name + '=' + value).join('; '));
        upstreamHeaders.set('user-agent', browserUserAgent);
      }
      const response = await fetchImpl(new Request(request.url, { method: request.method, headers: upstreamHeaders, body, signal }), { ...options, redirect: 'manual', signal });
      const location = response.headers.get('location');
      if (options.redirect === 'manual' || ![301, 302, 303, 307, 308].includes(response.status) || !location) return response;
      const next = new URL(location, url);
      if (next.origin !== allowed.origin || next.username || next.password) {
        await response.body?.cancel();
        throw new Error('Cross-origin redirects are refused.');
      }
      await response.body?.cancel();
      if (redirects === 5) throw new Error('Too many redirects.');
      const method = response.status === 303 && request.method !== 'HEAD' || [301, 302].includes(response.status) && request.method === 'POST' ? 'GET' : request.method;
      const headers = new Headers(request.headers);
      if (method === 'GET' || method === 'HEAD') {
        body = undefined;
        headers.delete('content-type');
        headers.delete('content-length');
      }
      request = new Request(next, { method, headers, body, signal });
    }
  }

  // Bind fetch for the repository's trusted, server-side worker to the mirror restriction.
  const worker = new Function('fetch', workerSource.replace(/^export default /, 'return '))(restrictedFetch);
  return http.createServer({ maxHeaderSize: 32768 }, async (incoming, outgoing) => {
    const cors = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, HEAD, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Cache-Control': 'no-store',
      'Referrer-Policy': 'no-referrer'
    };
    function fail(status, message) {
      if (!outgoing.headersSent) outgoing.writeHead(status, { ...cors, 'Content-Type': 'text/plain; charset=utf-8' });
      outgoing.end(message);
    }
    try {
      const forwardedIp = incoming.headers['cf-connecting-ip'];
      const clientIp = typeof forwardedIp === 'string' && isIP(forwardedIp) ? forwardedIp : incoming.socket.remoteAddress;
      const now = Date.now();
      const previous = failures.get(clientIp);
      if (previous && previous.until <= now) failures.delete(clientIp);
      if (previous && previous.until > now && previous.count >= 8) {
        outgoing.setHeader('Retry-After', Math.ceil((previous.until - now) / 1000));
        return fail(429, 'Too many incorrect codes. Try again shortly.');
      }
      const prefix = incoming.url.split('/')[1] || '';
      const actual = Buffer.from(prefix);
      if (actual.length !== expected.length || !timingSafeEqual(actual, expected)) {
        if (failures.size >= 1024) {
          for (const [address, record] of failures) if (record.until <= now) failures.delete(address);
          if (failures.size >= 1024 && !failures.has(clientIp)) {
            outgoing.setHeader('Retry-After', 60);
            return fail(429, 'Too many incorrect codes. Try again shortly.');
          }
        }
        const record = failures.get(clientIp) || { count: 0, until: now + attemptWindow };
        record.count++;
        failures.set(clientIp, record);
        return fail(404, 'Not found');
      }
      failures.delete(clientIp);
      if (incoming.method === 'OPTIONS') { outgoing.writeHead(204, cors); outgoing.end(); return; }
      if (!['GET', 'HEAD', 'POST'].includes(incoming.method)) return fail(405, 'Method not allowed');
      const suffix = incoming.url.slice(prefix.length + 2);
      if (suffix === 'health') {
        outgoing.writeHead(200, { ...cors, 'Content-Type': 'application/json' });
        outgoing.end(JSON.stringify({ status: 'ready', mirror: allowed.origin, browserClearance: !!browserCookies }));
        return;
      }
      // Do not expose the worker's diagnostic endpoint, which echoes encoded cookies.
      if (suffix === 'headers') return fail(404, 'Not found');
      const chunks = [];
      let size = 0;
      for await (const chunk of incoming) {
        size += chunk.length;
        if (size > 65536) return fail(413, 'Request too large');
        chunks.push(chunk);
      }
      const headers = new Headers();
      // Encoded worker parameters carry account headers. Tunnel headers stay local.
      for (const name of ['origin', 'user-agent', 'content-type']) {
        if (incoming.headers[name]) headers.set(name, incoming.headers[name]);
      }
      const request = new Request('http://relay.local/' + suffix, {
        method: incoming.method, headers,
        ...(incoming.method === 'POST' ? { body: Buffer.concat(chunks) } : {})
      });
      const response = await worker.fetch(request);
      // Do not expose worker error stacks or reflected request URLs.
      if (response.status >= 500) { await response.body?.cancel(); return fail(502, 'HDRezka upstream request failed'); }
      if (response.status === 404 && response.statusText === 'Malformed URL') { await response.body?.cancel(); return fail(404, 'HDRezka page unavailable'); }
      const outputHeaders = { ...cors };
      for (const name of ['content-type', 'location']) {
        if (response.headers.has(name)) outputHeaders[name] = response.headers.get(name);
      }
      // fetch has already decompressed the body; omit upstream encoding and length.
      if (outputHeaders.location?.startsWith('http://relay.local/')) {
        outputHeaders.location = '/' + token + '/' + outputHeaders.location.slice('http://relay.local/'.length);
      }
      outgoing.writeHead(response.status, outputHeaders);
      if (response.body && incoming.method !== 'HEAD') await pipeline(Readable.fromWeb(response.body), outgoing);
      else { await response.body?.cancel(); outgoing.end(); }
    } catch {
      fail(502, 'HDRezka relay request failed');
    }
  });
}

if (require.main === module) {
  const stateDirectory = path.join(__dirname, '../.hdrezka-relay');
  if (!process.env.HDREZKA_RELAY_TOKEN_FILE) fs.mkdirSync(stateDirectory, { recursive: true });
  const tokenFile = process.env.HDREZKA_RELAY_TOKEN_FILE || path.join(stateDirectory, 'token');
  const token = process.env.HDREZKA_RELAY_TOKEN || (fs.existsSync(tokenFile) ? fs.readFileSync(tokenFile, 'utf8').trim() : String(randomInt(10000000, 100000000)));
  if (!fs.existsSync(tokenFile)) fs.writeFileSync(tokenFile, token + '\n', { mode: 0o600 });
  const port = Number(process.env.HDREZKA_RELAY_PORT || 8787);
  const server = createRelay({ token, origin: process.env.HDREZKA_RELAY_MIRROR || 'https://kvk.zone', clearance: loadClearance(process.env.HDREZKA_RELAY_CLEARANCE_FILE) });
  const bind = process.env.HDREZKA_RELAY_BIND || '127.0.0.1';
  server.listen(port, bind, () => console.log(`HDRezka relay ready on ${bind}:${port}.`));
  server.on('error', (error) => { console.error('Relay start failed: ' + error.code); process.exitCode = 1; });
}

module.exports = { createRelay, loadClearance };
