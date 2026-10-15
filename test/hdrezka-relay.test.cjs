const test = require('node:test');
const assert = require('node:assert/strict');
const { once } = require('node:events');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { createRelay, loadClearance } = require('../scripts/hdrezka-relay.cjs');
const { harness } = require('./helpers/plugin.cjs');
const token = 'private-test-token-0123456789';

async function relay(t, fetchImpl, accessCode = token, options = {}) {
  const server = createRelay({ token: accessCode, fetchImpl, ...options });
  server.listen(0, '127.0.0.1');
  await once(server, 'listening');
  t.after(() => new Promise((resolve) => { server.close(resolve); server.closeAllConnections(); }));
  return 'http://127.0.0.1:' + server.address().port + '/' + accessCode + '/';
}
function link(base, target, extra = '') {
  return base + 'enc2/' + encodeURIComponent(btoa(extra + target)) + '/page.txt?jacred.test';
}

const browserClearance = {
  origin: 'https://rezka.ag',
  cookie: 'techaro.lol-anubis-auth-d82da6a5=browser-fixture; techaro.lol-anubis-cookie-verification-d82da6a5=verified-fixture; _vc_id=visitor-fixture',
  userAgent: 'Mozilla/5.0 BrowserFixture/1.0'
};

test('Browser verification cookies and User-Agent are applied to anonymous stream requests', async (t) => {
  let calls = 0;
  const base = await relay(t, async (request) => {
    calls++;
    assert.equal(request.url, 'https://rezka.ag/ajax/get_cdn_series/');
    assert.equal(request.headers.get('user-agent'), browserClearance.userAgent);
    assert.equal(request.method, 'POST');
    assert.equal(await request.text(), 'id=123&action=get_movie');
    assert.equal(request.headers.get('cookie'), 'PHPSESSID=anonymous; techaro.lol-anubis-auth-d82da6a5=browser-fixture; techaro.lol-anubis-cookie-verification-d82da6a5=verified-fixture; _vc_id=visitor-fixture');
    assert.doesNotMatch(request.headers.get('cookie'), /dle_user_id|dle_password/);
    return new Response('{"success":true,"url":"fixture"}', { headers: { 'Content-Type': 'application/json' } });
  }, token, { origin: browserClearance.origin, clearance: browserClearance });
  const extra = 'param/User-Agent=TVFixture/param/Cookie=' + encodeURIComponent('PHPSESSID=anonymous; techaro.lol-anubis-auth-d82da6a5=stale') + '/';
  const response = await fetch(link(base, 'https://rezka.ag/ajax/get_cdn_series/', extra), { method: 'POST', body: 'id=123&action=get_movie' });
  assert.equal(response.status, 200);
  assert.equal((await response.json()).success, true);
  assert.equal(calls, 1);
  const health = await (await fetch(base + 'health')).text();
  assert.deepEqual(JSON.parse(health), { status: 'ready', mirror: browserClearance.origin, browserClearance: true });
  assert.doesNotMatch(health, /browser-fixture|verified-fixture|visitor-fixture|BrowserFixture/);
});

test('Browser clearance is preserved across same-origin redirects and cannot leave its mirror', async (t) => {
  const paths = [];
  const base = await relay(t, async (request) => {
    paths.push(new URL(request.url).pathname);
    assert.equal(new URL(request.url).origin, browserClearance.origin);
    assert.match(request.headers.get('cookie'), /techaro\.lol-anubis-auth-d82da6a5=browser-fixture/);
    if (request.url.endsWith('/start')) return new Response(null, { status: 302, headers: { Location: '/finish' } });
    return new Response(null, { status: 302, headers: { Location: 'https://elsewhere.example/' } });
  }, token, { origin: browserClearance.origin, clearance: browserClearance });
  assert.equal((await fetch(link(base, 'https://kvk.zone/'))).status, 502);
  assert.deepEqual(paths, []);
  assert.equal((await fetch(link(base, 'https://rezka.ag/start'))).status, 502);
  assert.deepEqual(paths, ['/start', '/finish']);
});

test('Browser clearance rejects mismatched mirrors, account cookies and header injection', () => {
  const options = { token, origin: browserClearance.origin, clearance: browserClearance };
  assert.throws(() => createRelay({ ...options, origin: 'https://kvk.zone' }), /configured mirror/);
  for (const clearance of [
    { ...browserClearance, cookie: browserClearance.cookie + '; dle_user_id=private-account' },
    { ...browserClearance, cookie: browserClearance.cookie + '\r\nInjected: private-token' },
    { ...browserClearance, userAgent: '' },
    { ...browserClearance, userAgent: 'Browser\nprivate-token' },
    { ...browserClearance, origin: 'https://private-token@rezka.ag' },
    []
  ]) {
    assert.throws(() => createRelay({ ...options, clearance }), (error) => !error.message.includes('private-token') && !error.message.includes('private-account'));
  }
  const disabled = createRelay({ token, clearance: {} });
  disabled.close();
});

test('Clearance files accept a BOM and sanitize malformed secret-file diagnostics', (t) => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'hdrezka-clearance-'));
  const file = path.join(directory, 'clearance.json');
  t.after(() => { fs.unlinkSync(file); fs.rmdirSync(directory); });
  fs.writeFileSync(file, '\uFEFF' + JSON.stringify(browserClearance));
  assert.deepEqual(loadClearance(file), browserClearance);
  assert.equal(loadClearance(), null);
  for (const content of ['{"cookie":"private-invalid-token', 'x'.repeat(16385)]) {
    fs.writeFileSync(file, content);
    assert.throws(() => loadClearance(file), { message: 'Invalid browser clearance file.' });
  }
});

test('Eight-digit TV codes work and incorrect-code retries are bounded', async (t) => {
  const code = '12345678';
  const base = await relay(t, () => assert.fail('No upstream request expected'), code);
  assert.equal((await fetch(base + 'health')).status, 200);
  const wrong = base.replace(code, '87654321') + 'health';
  for (let i = 0; i < 8; i++) assert.equal((await fetch(wrong)).status, 404);
  const limited = await fetch(wrong);
  assert.equal(limited.status, 429);
  assert.ok(Number(limited.headers.get('retry-after')) > 0);
  // The limit is scoped to the client, not all TVs using this relay.
  const anotherClient = await fetch(base + 'health', { headers: { 'CF-Connecting-IP': '192.0.2.2' } });
  assert.equal(anotherClient.status, 200);
  assert.throws(() => createRelay({ token: '1234' }), /eight-digit/);
});

test('Relay requires a private token and handles browser preflight', async (t) => {
  const base = await relay(t, () => assert.fail('No upstream request expected'));
  assert.equal((await fetch(base.replace(token, 'incorrect-token') + 'health')).status, 404);
  assert.equal((await fetch(base + 'headers')).status, 404);
  const preflight = await fetch(base, { method: 'OPTIONS', headers: { Origin: 'https://lampa.mx', 'Access-Control-Request-Method': 'POST' } });
  assert.equal(preflight.status, 204);
  assert.equal(preflight.headers.get('access-control-allow-origin'), '*');
});

test('Relay preserves POST body, login cookies and the cookie_plus contract', async (t) => {
  const base = await relay(t, async (request) => {
    assert.equal(request.url, 'https://kvk.zone/ajax/login/');
    assert.equal(request.method, 'POST');
    assert.equal(await request.text(), 'login_name=fixture&login_password=fixture');
    assert.equal(request.headers.get('cookie'), 'PHPSESSID=fixture==');
    const headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Set-Cookie', 'PHPSESSID=rotated==; Path=/');
    headers.append('Set-Cookie', 'dle_user_id=fixture; Path=/');
    return new Response('{"success":true}', { headers });
  });
  const response = await fetch(link(base, 'https://kvk.zone/ajax/login/', 'cookie_plus/param/Cookie=PHPSESSID%3Dfixture%3D%3D/'), { method: 'POST', body: 'login_name=fixture&login_password=fixture' });
  const data = await response.json();
  assert.equal(response.headers.get('cache-control'), 'no-store');
  assert.deepEqual(data.headers['set-cookie'], ['PHPSESSID=rotated==; Path=/', 'dle_user_id=fixture; Path=/']);
  assert.equal(JSON.parse(data.body).success, true);
});

test('Relay applies cookie rotations on every redirect and returns the complete chain to the client', async (t) => {
  const seen = [];
  const first = 'PHPSESSID=rotated==; Path=/; Secure';
  const last = 'PHPSESSID=final==; Path=/; Secure';
  const base = await relay(t, async (request) => {
    seen.push([new URL(request.url).pathname, request.headers.get('cookie')]);
    if (request.url.endsWith('/start')) return new Response(null, { status: 302, headers: { Location: '/middle', 'Set-Cookie': first } });
    if (request.url.endsWith('/middle')) return new Response(null, { status: 307, headers: { Location: '/finish', 'Set-Cookie': last } });
    return new Response('<div>Account</div>', { headers: { 'Content-Type': 'text/html' } });
  });
  const response = await fetch(link(base, 'https://kvk.zone/start', 'cookie_plus/param/Cookie=PHPSESSID%3Dinitial/'));
  const data = await response.json();
  assert.deepEqual(seen, [['/start', 'PHPSESSID=initial'], ['/middle', 'PHPSESSID=rotated=='], ['/finish', 'PHPSESSID=final==']]);
  assert.deepEqual(data.headers['set-cookie'], [first, last]);
  assert.equal(data.currentUrl, 'https://kvk.zone/finish');
  assert.equal(data.body, '<div>Account</div>');
  // Account cookies must never survive into another client's request.
  await fetch(link(base, 'https://kvk.zone/finish'));
  assert.deepEqual(seen.at(-1), ['/finish', null]);
});

test('Relay respects cookie paths, deletion, expiry and domains within a redirect chain', async (t) => {
  const updates = [
    'PHPSESSID=deleted; Max-Age=0; Path=/',
    'expired=obsolete; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Path=/',
    'scoped=only-private; Path=/private',
    'foreign=blocked; Domain=elsewhere.example; Path=/'
  ];
  const seen = [];
  const base = await relay(t, async (request) => {
    seen.push([new URL(request.url).pathname, request.headers.get('cookie')]);
    if (request.url.endsWith('/start')) {
      const headers = new Headers({ Location: '/private/check' });
      updates.forEach((cookie) => headers.append('Set-Cookie', cookie));
      return new Response(null, { status: 302, headers });
    }
    if (request.url.endsWith('/private/check')) return new Response(null, { status: 302, headers: { Location: '/public' } });
    return new Response('Done', { headers: { 'Content-Type': 'text/plain' } });
  });
  const response = await fetch(link(base, 'https://kvk.zone/start', 'cookie_plus/param/Cookie=PHPSESSID%3Dinitial/'));
  const data = await response.json();
  assert.deepEqual(seen, [['/start', 'PHPSESSID=initial'], ['/private/check', 'scoped=only-private'], ['/public', null]]);
  assert.deepEqual(data.headers['set-cookie'], updates.slice(0, 3));
});

test('Relay refuses other origins and account-bearing cross-origin redirects', async (t) => {
  let calls = 0;
  const base = await relay(t, async (request) => {
    calls++;
    assert.equal(request.url, 'https://kvk.zone/films/fixture.html');
    return new Response(null, { status: 302, headers: { Location: 'https://elsewhere.example/' } });
  });
  for (const target of ['https://elsewhere.example/', 'http://127.0.0.1/', 'https://private@kvk.zone/']) {
    const response = await fetch(link(base, target, 'param/Cookie=private-session/'));
    assert.equal(response.status, 502);
    assert.equal(await response.text(), 'HDRezka upstream request failed');
  }
  assert.equal(calls, 0);
  assert.equal((await fetch(link(base, 'https://kvk.zone/films/fixture.html', 'param/Cookie=private-session/'))).status, 502);
  assert.equal(calls, 1);
});

test('Relay stops loops, sanitizes failures and removes stale compression headers', async (t) => {
  let calls = 0;
  const base = await relay(t, async (request) => {
    calls++;
    if (request.url.endsWith('/loop')) return new Response(null, { status: 302, headers: { Location: '/loop' } });
    return new Response('<h1>Fixture</h1>', { headers: { 'Content-Type': 'text/html', 'Content-Encoding': 'gzip' } });
  });
  const response = await fetch(link(base, 'https://kvk.zone/films/fixture.html'));
  assert.equal(response.status, 200);
  assert.equal(response.headers.get('content-encoding'), null);
  assert.equal(await response.text(), '<h1>Fixture</h1>');
  calls = 0;
  assert.equal((await fetch(link(base, 'https://kvk.zone/loop'))).status, 502);
  assert.equal(calls, 6);
  const malformed = await fetch(base + 'param/Cookie=private-session/not-a-target');
  assert.equal(malformed.status, 404);
  assert.equal((await malformed.text()).includes('private-session'), false);
});

test('Relay preserves a mirror login form returned with HTTP 404', async (t) => {
  const base = await relay(t, async () => new Response('<form id="check-form">Login</form>', { status: 404, statusText: 'Not Found', headers: { 'Content-Type': 'text/html' } }));
  const response = await fetch(link(base, 'https://kvk.zone/films/fixture.html'));
  assert.equal(response.status, 404);
  assert.match(await response.text(), /check-form/);
});

test('Dedicated HDRezka setting controls login/playback and preserves other providers', () => {
  const h = harness({ initialized: true, storage: {
    online_mod_rezka2_proxy_url: ' private.example/token/// ', online_mod_proxy_other: true,
    online_mod_proxy_other_url: 'https://global.example/', online_mod_rezka2_cookie: 'PHPSESSID=fixture',
    online_mod_rezka2_cookie_host: 'https://kvk.zone', online_mod_rezka2_cookie_proxy: 'https://cors.nb557.workers.dev/'
  } });
  assert.equal(h.plugin.Utils.rezka2Proxy(), 'https://private.example/token/');
  assert.equal(h.plugin.Utils.proxy('filmix'), 'https://global.example/');
  h.plugin.rezka2Login(() => {}, () => {});
  assert.equal(new URL(h.requests.shift().url).hostname, 'private.example');
  const provider = new h.plugin.rezka2(h.component, h.object);
  provider.search(h.object, 1, []);
  const request = h.requests.shift();
  assert.equal(new URL(request.url).hostname, 'private.example');
  request.error({ status: 502 }, 'error');
  assert.equal(h.requests.length, 0);
  h.storage.online_mod_proxy_rezka2 = false;
  assert.equal(h.plugin.Utils.rezka2Proxy(), '');
  provider.destroy();
});
