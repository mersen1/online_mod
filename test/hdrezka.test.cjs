const test = require('node:test');
const assert = require('node:assert/strict');
const { harness } = require('./helpers/plugin.cjs');

test('HDRezka mirror accepts whitespace, scheme-relative URLs and trailing slashes', () => {
  const h = harness();
  for (const [input, expected] of [
    ['', 'https://kvk.zone'],
    ['   ', 'https://kvk.zone'],
    [' mirror.example/// ', 'https://mirror.example'],
    ['//mirror.example/', 'https://mirror.example'],
    ['http://mirror.example/', 'http://mirror.example'],
    ['https://mirror.example/path/', 'https://mirror.example/path']
  ]) {
    h.storage.online_mod_rezka2_mirror = input;
    assert.equal(h.plugin.Utils.rezka2Mirror(), expected, input);
  }
});

for (const preferMp4 of [false, true]) {
  test(`HDRezka respects ${preferMp4 ? 'MP4' : 'HLS'} preference with query strings and fragments`, () => {
    const h = harness({ storage: { online_mod_prefer_mp4: preferMp4 } });
    const provider = new h.plugin.rezka2(h.component, h.object);
    const mp4 = 'https://cdn.example/video.MP4?token=x#part';
    const hls = 'https://cdn.example/master.M3U8?token=y#part';
    const playlist = preferMp4 ? `[1080p]${hls} or ${mp4}` : `[1080p]${mp4} or ${hls}`;
    assert.equal(provider.__test.extractItems(playlist)[0].file, preferMp4 ? mp4 : hls);
  });
}

test('HDRezka retains quality order, fallback and protocol handling', () => {
  const h = harness({ storage: { online_mod_prefer_http: true } });
  const provider = new h.plugin.rezka2(h.component, h.object);
  const items = provider.__test.extractItems('[360p]https://cdn.example/low.mp4,[1080p]https://cdn.example/high.mp4,[4K]//cdn.example/uhd.mp4');
  assert.deepEqual(Array.from(items, (item) => item.quality), [4000, 1080, 360]);
  assert.equal(items[0].file, 'http://cdn.example/uhd.mp4');
  assert.equal(provider.__test.extractItems('[720p]https://cdn.example/fallback.mp4')[0].file, 'http://cdn.example/fallback.mp4');
  assert.equal(provider.__test.extractItems('invalid playlist').length, 0);
});

test('HDRezka restriction flag belongs to the current movie page', () => {
  const h = harness();
  const provider = new h.plugin.rezka2(h.component, h.object);
  provider.__test.extractData('<div class="b-player__restricted__block_message"></div>');
  assert.equal(provider.__test.getExtract().blocked, true);
  provider.__test.extractData('player.initCDNMoviesEvents(1, 1, 0, 0, 0, {});');
  assert.equal(provider.__test.getExtract().blocked, false);
});

test('HDRezka paginated search uses the same encoded proxy protocol as initial search', () => {
  const h = harness({ dom: true, initialized: true, storage: {
    online_mod_proxy_other: true, online_mod_proxy_other_url: 'https://proxy.example/', online_mod_rezka2_mirror: 'https://mirror.example'
  } });
  const provider = new h.plugin.rezka2(h.component, h.object);
  try {
    h.object.search = 'Fixture & title';
    provider.search(h.object, 1, []);
    h.requests.shift().success('<li><a href="/other.html"><span class="enty">Other</span>Other (2020)</a></li>');
    const firstPage = h.requests.shift();
    assert.match(firstPage.url, /^https:\/\/proxy\.example\/enc2\//);
    firstPage.success('<div class="b-content__inline_item-link"><a href="/fixture.html">Fixture</a><div>2020</div></div><a href="/page2"><span class="b-navigation__next"></span></a>');
    const similar = h.events.find(([event]) => event === 'similars');
    assert.ok(similar);
    similar[2](similar[3]);
    const request = h.requests.shift();
    assert.match(request.url, /^https:\/\/proxy\.example\/enc2\//);
    assert.ok(request.url.endsWith('/?jacred.test'));
    const encoded = request.url.split('/enc2/')[1].split('/')[0];
    const target = atob(decodeURIComponent(encoded));
    assert.ok(target.endsWith('&q=Fixture%20%26%20title&page=2'));
    request.success('');
  } finally { provider.destroy(); h.close(); }
});

function proxyTarget(request) {
  return atob(decodeURIComponent(request.url.split('/enc2/')[1].split('/')[0]));
}

for (const failure of [
  { status: 0, responseText: '' },
  { status: 403, responseText: '' },
  { status: 403, responseText: '<div>105</div>' },
  { status: 502, responseText: '' },
  { status: 404, responseText: 'Malformed URL: https://kvk.zone/engine/ajax/search.php' }
]) {
  test(`HDRezka retries a failed public proxy (${failure.status}) without disabling it`, () => {
    const h = harness({ initialized: true, platform: 'tizen', msx: true });
    const provider = new h.plugin.rezka2(h.component, h.object);
    provider.search(h.object, 1, []);
    const first = h.requests.shift();
    first.error({ ...failure }, 'error');
    const second = h.requests.shift();
    assert.ok(second);
    assert.notEqual(new URL(first.url).hostname, new URL(second.url).hostname);
    assert.equal(proxyTarget(first), proxyTarget(second));
    assert.equal(first.data, second.data);
    assert.equal(h.context.Lampa.Storage.field('online_mod_proxy_rezka2'), true);
    assert.equal(h.events.some(([event]) => event === 'empty'), false);
    second.error({ ...failure }, 'error');
    assert.equal(h.requests.length, 0);
    assert.equal(h.events.filter(([event]) => event === 'empty').length, 1);
    assert.equal(h.context.Lampa.Storage.field('online_mod_proxy_rezka2'), true);
    const expected = failure.status === 404 ? 'online_mod_proxy_source_unavailable' : 'online_mod_rezka2_proxy_error';
    assert.ok(h.events.some(([event, message]) => event === 'empty' && message === expected));
    provider.destroy();
  });
}

test('HDRezka keeps a custom proxy and its cookie on that proxy after failure', () => {
  const h = harness({ initialized: true, storage: {
    online_mod_proxy_other: true, online_mod_proxy_other_url: 'https://private-proxy.example/', online_mod_rezka2_cookie: 'PHPSESSID=fixture; dle_user_id=fixture'
  } });
  const provider = new h.plugin.rezka2(h.component, h.object);
  provider.search(h.object, 1, []);
  const request = h.requests.shift();
  assert.equal(new URL(request.url).hostname, 'private-proxy.example');
  assert.ok(proxyTarget(request).includes('param/Cookie='));
  request.error({ status: 403, responseText: '' }, 'error');
  assert.equal(h.requests.length, 0);
  assert.equal(h.context.Lampa.Storage.field('online_mod_proxy_rezka2'), true);
  provider.destroy();
});

test('HDRezka retries a timeout and stops immediately on an authorization response', () => {
  const h = harness({ initialized: true });
  const provider = new h.plugin.rezka2(h.component, h.object);
  provider.search(h.object, 1, []);
  h.requests.shift().error({}, 'timeout');
  const retry = h.requests.shift();
  assert.ok(retry);
  retry.error({ status: 403, responseText: '<form id="check-form"></form>' }, 'error');
  assert.equal(h.requests.length, 0);
  assert.ok(h.events.some(([event, message]) => event === 'empty' && message === 'online_mod_authorization_required HDrezka'));
  assert.equal(h.context.Lampa.Storage.field('online_mod_proxy_rezka2'), true);
  provider.destroy();
});

test('HDRezka direct MSX failure explains which proxy switches to enable', () => {
  const h = harness({ initialized: true, msx: true, platform: 'tizen', storage: { online_mod_proxy_rezka2: false } });
  const provider = new h.plugin.rezka2(h.component, h.object);
  provider.search(h.object, 1, []);
  const request = h.requests.shift();
  assert.equal(new URL(request.url).hostname, 'kvk.zone');
  request.error({ status: 0, responseText: '' }, 'error');
  assert.equal(h.requests.length, 0);
  assert.ok(h.events.some(([event, message]) => event === 'empty' && message === 'online_mod_rezka2_direct_error'));
  assert.equal(h.context.Lampa.Storage.field('online_mod_proxy_rezka2'), false);
  provider.destroy();
});

test('HDRezka reports authorization for a failed search-page response after unrelated live results', () => {
  const h = harness({ dom: true, initialized: true });
  const provider = new h.plugin.rezka2(h.component, h.object);
  try {
    provider.search(h.object, 1, []);
    h.requests.shift().success('<li><a href="/other.html"><span class="enty">Other</span>Other (2020)</a></li>');
    const searchPage = h.requests.shift();
    assert.match(proxyTarget(searchPage), /\/search\/\?do=search&subaction=search&q=Fixture&page=1$/);
    assert.equal(h.events.some(([event]) => event === 'similars' || event === 'empty'), false);
    searchPage.error({ status: 404, responseText: "<form class='check-form' action='/ajax/login/' id='check-form'>Login</form>" }, 'error');
    assert.ok(h.events.some(([event, message]) => event === 'empty' && message === 'online_mod_authorization_required HDrezka'));
    assert.equal(h.requests.length, 0);
  } finally { provider.destroy(); h.close(); }
});

test('HDRezka keeps the successful proxy for the movie page and suppresses cancelled retries', () => {
  const h = harness({ dom: true, initialized: true });
  const provider = new h.plugin.rezka2(h.component, h.object);
  try {
    provider.search(h.object, 1, []);
    h.requests.shift().error({ status: 0 }, 'error');
    const retry = h.requests.shift();
    retry.success('<li><a href="/fixture.html"><span class="enty">Fixture</span>Fixture (2020)</a></li>');
    const page = h.requests.shift();
    assert.equal(new URL(page.url).hostname, new URL(retry.url).hostname);
    provider.cancel();
    const count = h.events.length;
    page.error({ status: 0 }, 'error');
    retry.error({ status: 0 }, 'error');
    assert.equal(h.requests.length, 0);
    assert.equal(h.events.length, count);
  } finally { provider.destroy(); h.close(); }
});

test('HDRezka clears a previous response error when a later page is available', () => {
  const h = harness({ dom: true });
  const provider = new h.plugin.rezka2(h.component, h.object);
  try {
    provider.__test.extractData('<form id="check-form"></form>');
    provider.__test.getPage('/available.html');
    h.requests.shift().success('');
    assert.ok(h.events.some(([event]) => event === 'emptyQuery'));
    assert.equal(h.events.some(([event]) => event === 'empty'), false);
  } finally { provider.destroy(); h.close(); }
});
