// Read-only first-search probes. Does not retrieve or play media or log URL tokens.
const fs = require('node:fs');
const path = require('node:path');
const { harness, providers } = require('../test/helpers/plugin.cjs');

async function probe(name, profile) {
  const h = harness({ initialized: profile === 'tv', platform: 'tizen', msx: profile === 'tv' });
  Object.assign(h.object.movie, { id: 157336, title: 'Интерстеллар', original_title: 'Interstellar', imdb_id: 'tt0816692', release_date: '2014-11-05' });
  const provider = new h.plugin[name](h.component, h.object);
  provider.search(h.object, 258687, []);
  const request = h.requests[0];
  if (!request) { provider.destroy(); return { provider: name, profile, result: 'no-request', note: 'Requires configuration or source returned no request' }; }
  let url;
  try { url = new URL(request.url); } catch {
    provider.destroy();
    return { provider: name, profile, result: 'unconfigured', note: 'No absolute service URL with default settings' };
  }
  if (!['http:', 'https:'].includes(url.protocol) || /\.(?:mp4|m3u8|mpd)(?:[?#]|$)/i.test(url.href)) {
    provider.destroy();
    return { provider: name, profile, result: 'skipped', note: 'Not a metadata URL' };
  }
  const result = { provider: name, profile, host: url.hostname, method: request.data ? 'POST' : 'GET' };
  try {
    const response = await fetch(url, {
      method: result.method,
      body: request.data || undefined,
      headers: { 'User-Agent': h.plugin.Utils.baseUserAgent(), Origin: 'https://lampa.mx', ...(request.data ? { 'Content-Type': 'application/x-www-form-urlencoded' } : {}) },
      signal: AbortSignal.timeout(12000)
    });
    result.status = response.status;
    result.finalHost = new URL(response.url).hostname;
    result.contentType = response.headers.get('content-type') || '';
    result.cors = response.headers.get('access-control-allow-origin') || '';
    result.browserCorsAllowed = result.cors === '*' || result.cors === 'https://lampa.mx';
    const reader = response.body?.getReader();
    const chunks = [];
    let size = 0;
    if (reader) {
      while (size < 256 * 1024) {
        const { done, value } = await reader.read();
        if (done) break;
        chunks.push(Buffer.from(value));
        size += value.length;
      }
      await reader.cancel();
    }
    const text = Buffer.concat(chunks).toString('utf8');
    result.result = response.ok ? 'http-ok' : 'http-error';
    if (h.plugin.Utils.isChallenge(text)) result.result = 'challenge';
    if (/^Malformed URL:/i.test(text)) result.result = 'proxy-refused';
    if (/id="check-form"/i.test(text)) result.result = 'login-required';
    try {
      const json = JSON.parse(text);
      result.json = true;
      if (Array.isArray(json)) result.items = json.length;
      else if (json && typeof json === 'object') {
        for (const key of ['results', 'data', 'items', 'list']) {
          if (Array.isArray(json[key])) { result.items = json[key].length; break; }
        }
        if (json.success === false || json.error || json.status === 'error') result.result = 'api-error';
        if (h.plugin.Utils.isChallenge(json)) result.result = 'challenge';
      }
    } catch { result.json = false; }
  } catch (error) {
    result.result = 'network-error';
    result.error = error.cause?.code || error.name;
  } finally { provider.destroy(); }
  return result;
}

async function main() {
  const results = [];
  const jobs = ['direct', 'tv'].flatMap((profile) => providers.map((name) => ({ profile, name })));
  for (let index = 0; index < jobs.length; index += 4) {
    const batch = await Promise.all(jobs.slice(index, index + 4).map(({ name, profile }) => probe(name, profile)));
    results.push(...batch);
    for (const result of batch) console.log(`${result.profile}/${result.provider}: ${result.host || '-'} ${result.result} ${result.status || result.error || ''}`);
  }
  const report = {
    checkedAt: new Date().toISOString(),
    scope: 'First metadata/search request for each provider, directly and with initialized MSX/Tizen defaults, from this workstation. Origin https://lampa.mx. No accounts, DOM parsing, media retrieval or physical TV playback verification.',
    results
  };
  const target = path.resolve(__dirname, '../docs/provider-probe.json');
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, JSON.stringify(report, null, 2) + '\n');
  console.log('Saved docs/provider-probe.json');
}
main().catch((error) => { console.error(error.message); process.exitCode = 1; });
