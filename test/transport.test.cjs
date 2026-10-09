const test = require('node:test');
const assert = require('node:assert/strict');
const { harness, providers } = require('./helpers/plugin.cjs');

test('TV initialization preserves explicit proxy choices and uses the HDRezka mirror by default', () => {
  const h = harness({ initialized: true, platform: 'tizen', msx: true, storage: { online_mod_proxy_filmix: false, online_mod_proxy_rezka2: true, online_mod_proxy_cdnvideohub: true } });
  assert.equal(h.context.Lampa.Storage.field('online_mod_proxy_filmix'), false);
  assert.equal(h.context.Lampa.Storage.field('online_mod_proxy_rezka2'), true);
  assert.equal(h.context.Lampa.Storage.field('online_mod_proxy_cdnvideohub'), true);
  const fresh = harness({ initialized: true, platform: 'tizen', msx: true });
  assert.equal(fresh.context.Lampa.Storage.field('online_mod_proxy_rezka2'), true);
  assert.equal(fresh.context.Lampa.Storage.field('online_mod_proxy_rezka2_mirror'), true);
});

test('Custom proxy URL is normalized and applies to every configurable provider', () => {
  const h = harness({ storage: { online_mod_proxy_other: true, online_mod_proxy_other_url: ' proxy.example/path ' } });
  for (const name of providers) {
    if (['zetflix', 'alloha', 'lumex2'].includes(name)) continue;
    h.storage['online_mod_proxy_' + name] = true;
    assert.equal(h.plugin.Utils.proxy(name), 'https://proxy.example/path/', name);
  }
  h.storage.online_mod_proxy_other_url = undefined;
  assert.ok(!h.plugin.Utils.proxy('cookie').includes('undefined'));
});

for (const name of providers) {
  test(`${name}: an HTTP 200 challenge terminates search with a useful message`, () => {
    const h = harness();
    const provider = new h.plugin[name](h.component, h.object);
    provider.search(h.object, 1, []);
    let processed = 0;
    while (h.requests.length) {
      assert.ok(++processed <= 12, 'Challenges must not trigger endless retries');
      h.requests.shift().success('<html><title>Just a moment...</title><div id="cf-challenge-running"></div></html>');
    }
    if (name !== 'lumex2') assert.ok(h.events.some(([event, message]) => event === 'empty' && /online_mod_source_challenge/.test(message)), JSON.stringify(h.events));
    provider.destroy();
  });
}

test('Challenge detection does not reject normal pages with Cloudflare analytics or login reCAPTCHA', () => {
  const h = harness();
  assert.equal(h.plugin.Utils.isChallenge('<script src="/cdn-cgi/challenge-platform/scripts/jsd/main.js"></script><h1>Movie</h1>'), false);
  assert.equal(h.plugin.Utils.isChallenge('<form id="login"><script src="https://www.google.com/recaptcha/api.js"></script></form>'), false);
});

test('Provider cancellation ignores late network callbacks', () => {
  const h = harness();
  const provider = new h.plugin.rezka2(h.component, h.object);
  provider.search(h.object, 1, []);
  const request = h.requests.shift();
  provider.cancel();
  const count = h.events.length;
  request.success('');
  request.error({ status: 403, responseText: '<title>Just a moment...</title>' }, 'error');
  assert.equal(h.events.length, count);
});
