const test = require('node:test');
const assert = require('node:assert/strict');
const { once } = require('node:events');
const { createRelay } = require('../scripts/hdrezka-relay.cjs');
const { harness } = require('./helpers/plugin.cjs');
const token = 'private-test-token-0123456789';

async function relay(t, fetchImpl) {
  const server = createRelay({ token, fetchImpl });
  server.listen(0, '127.0.0.1');
  await once(server, 'listening');
  t.after(() => new Promise((resolve) => { server.close(resolve); server.closeAllConnections(); }));
  return 'http://127.0.0.1:' + server.address().port + '/' + token + '/';
}
function link(base, target, extra = '') {
  return base + 'enc2/' + encodeURIComponent(btoa(extra + target)) + '/page.txt?jacred.test';
}

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
