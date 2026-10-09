const test = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const { harness, source, body, find } = require('./helpers/plugin.cjs');

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
  const h = harness();
  const node = find(body.find((item) => item.id?.name === 'rezka2'), (item) => item.type === 'FunctionExpression' && item.id?.name === 'query_more');
  Object.assign(h.context, {
    more_url: 'https://mirror.example/search/?do=search&subaction=search',
    prox: 'https://proxy.example/',
    prox_enc: 'param/Origin=https%3A%2F%2Fmirror.example/',
    network: new h.context.Lampa.Reguest(),
    component: h.component,
    checkErrorForm: () => {},
    logged_in: false,
    headers: {}
  });
  const queryMore = vm.runInContext('(' + source.slice(node.start, node.end) + ')', h.context);
  queryMore('Fixture & title', 2, [], () => {});
  const request = h.requests.shift();
  assert.match(request.url, /^https:\/\/proxy\.example\/enc2\//);
  assert.ok(request.url.endsWith('/?jacred.test'));
  const encoded = request.url.split('/enc2/')[1].split('/')[0];
  const target = atob(decodeURIComponent(encoded));
  assert.ok(target.endsWith('&q=Fixture%20%26%20title&page=2'));
  request.success('');
});
