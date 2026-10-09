const test = require('node:test');
const assert = require('node:assert/strict');
const { harness } = require('./helpers/plugin.cjs');

const searchHtml = '<li><a href="/films/1-fixture-2020.html"><span class="enty">Fixture</span> (2020)</a></li>';
const movieHtml = 'player.initCDNMoviesEvents(1, 1, 0, 0, 0, {});';
const stream = { success: true, url: '[720p]https://cdn.example/720.mp4?token=test,[1080p]https://cdn.example/1080.mp4?token=test', subtitle: '[English]https://cdn.example/subs.vtt?token=test' };

for (const platform of ['tizen', 'webos', 'android', 'browser']) {
  test(`HDRezka movie: search, select, quality and subtitles on ${platform}`, () => {
    const h = harness({ dom: true, initialized: true, platform, msx: platform === 'tizen' || platform === 'webos' });
    try {
      const provider = new h.plugin.rezka2(h.component, h.object);
      provider.search(h.object, 1, []);
      h.requests.shift().success(searchHtml);
      assert.equal(h.requests.length, 1, 'An exact title and year must select the page');
      h.requests.shift().success(movieHtml);
      const item = h.events.find(([event]) => event === 'append')?.[1];
      assert.ok(item, JSON.stringify(h.events));
      item.trigger('hover:enter');
      const request = h.requests.shift();
      assert.match(request.data, /action=get_movie/);
      request.success(stream);
      const played = h.events.find(([event]) => event === 'play')?.[1];
      assert.equal(played.url, 'https://cdn.example/1080.mp4?token=test');
      assert.equal(played.subtitles[0].url, 'https://cdn.example/subs.vtt?token=test');
      provider.destroy();
    } finally { h.close(); }
  });
}

test('HDRezka series: translation and season changes refresh episodes and stream parameters', () => {
  const h = harness({ dom: true });
  try {
    const provider = new h.plugin.rezka2(h.component, h.object);
    provider.__test.extractData('player.initCDNSeriesEvents(7, 1, 1, 1, {});<ul id="translators-list"><li class="b-translator__item" data-translator_id="1">Voice A</li><li class="b-translator__item" data-translator_id="2">Voice B</li></ul>');
    provider.reset();
    let request = h.requests.shift();
    assert.match(request.data, /translator_id=1/);
    const episodes = {
      seasons: '<li class="b-simple_season__item" data-tab_id="1">Season 1</li><li class="b-simple_season__item" data-tab_id="2">Season 2</li>',
      episodes: '<li class="b-simple_episode__item" data-season_id="1" data-episode_id="1">Episode 1</li><li class="b-simple_episode__item" data-season_id="2" data-episode_id="3">Episode 3</li>'
    };
    request.success(episodes);
    provider.filter('filter', { stype: 'voice' }, { index: 1 });
    request = h.requests.shift();
    assert.match(request.data, /translator_id=2/);
    request.success(episodes);
    provider.filter('filter', { stype: 'season' }, { index: 1 });
    const item = h.events.filter(([event]) => event === 'append').at(-1)[1];
    const element = item.data('fixture-element');
    provider.__test.getStream(element, () => {}, assert.fail);
    request = h.requests.shift();
    assert.match(request.data, /translator_id=2/);
    assert.match(request.data, /season=2/);
    assert.match(request.data, /episode=3/);
    request.success(stream);
    assert.ok(element.stream);
    provider.destroy();
  } finally { h.close(); }
});

test('JSON5 player parser reads data and ignores P2P functions without executing them', () => {
  const h = harness();
  const data = h.plugin.Utils.parsePlayerConfig("{title:'Fixture', source:{hls:'https://cdn.example/master.m3u8', audio:{names:[]}}, p2p:{ callback:function(){ globalThis.executed=true; } }, qualityByWidth:{'1920':1080},}");
  assert.equal(data.source.hls, 'https://cdn.example/master.m3u8');
  assert.equal(data.qualityByWidth['1920'], 1080);
  assert.equal(h.context.executed, undefined);
  assert.equal('p2p' in data, false);
  assert.equal(h.plugin.Utils.parsePlayerConfig('{source:(function(){globalThis.executed=true;return {};})()}'), null);
  assert.equal(h.context.executed, undefined);
});

test('Kinogo selects a movie, parses a NextEmbed player and supplies HLS to Lampa', () => {
  const h = harness({ dom: true });
  try {
    const provider = new h.plugin.kinogo(h.component, h.object);
    provider.search(h.object, 1, []);
    h.requests.shift().success('<div class="card__title"><a href="/1-fixture.html">Fixture (2020)</a></div>');
    h.requests.shift().success('<iframe src="//api.nextembed.ws/embed/movie/1"></iframe>');
    h.requests.shift().success("makePlayer({title:'Fixture',source:{hls:'https://cdn.example/master.m3u8?token=test',audio:{names:['English']},cc:[{name:'English',url:'https://cdn.example/subs.vtt'}]},p2p:{ callback:function(){throw Error('must not execute');} }});");
    const item = h.events.find(([event]) => event === 'append')?.[1];
    assert.ok(item, JSON.stringify(h.events));
    item.trigger('hover:enter');
    const played = h.events.find(([event]) => event === 'play')[1];
    assert.equal(played.url, 'https://cdn.example/master.m3u8?token=test&vp');
    assert.equal(played.subtitles[0].url, 'https://cdn.example/subs.vtt');
    assert.equal(played.translate.tracks[0].language, 'English');
    provider.destroy();
  } finally { h.close(); }
});

test('Kinogo skips a challenged configured mirror and falls back to kinogo.is', () => {
  const h = harness({ storage: { online_mod_kinogo_mirror: 'https://kinogo.online' } });
  const provider = new h.plugin.kinogo(h.component, h.object);
  provider.search(h.object, 1, []);
  h.requests.shift().error({ status: 403, responseText: '<title>Just a moment...</title>' }, 'error');
  assert.equal(new URL(h.requests.shift().url).hostname, 'kinogo.is');
  provider.destroy();
});

test('Kinogo applies the configured stream relay to media and subtitles', () => {
  const h = harness({ dom: true });
  try {
    h.component.proxyStream = (url, source) => {
      assert.equal(source, 'collaps');
      return 'https://relay.example/' + url;
    };
    const provider = new h.plugin.kinogo(h.component, h.object);
    provider.search(h.object, 1, []);
    h.requests.shift().success('<div class="card__title"><a href="/1-fixture.html">Fixture (2020)</a></div>');
    h.requests.shift().success('<iframe src="https://api.nextembed.ws/embed/movie/1"></iframe>');
    h.requests.shift().success("makePlayer({source:{hls:'https://cdn.example/master.m3u8',audio:{names:[]},cc:[{name:'English',url:'https://cdn.example/subs.vtt'}]}});");
    h.events.find(([event]) => event === 'append')[1].trigger('hover:enter');
    const played = h.events.find(([event]) => event === 'play')[1];
    assert.equal(played.url, 'https://relay.example/https://cdn.example/master.m3u8?vp');
    assert.equal(played.subtitles[0].url, 'https://relay.example/https://cdn.example/subs.vtt');
    provider.destroy();
  } finally { h.close(); }
});

test('Signed HLS URLs are recognized without treating query values as extensions', () => {
  const h = harness();
  assert.equal(h.plugin.Utils.isMediaUrl('https://cdn.example/master.M3U8?token=test#part', 'm3u8'), true);
  assert.equal(h.plugin.Utils.isMediaUrl('https://cdn.example/page?file=master.m3u8', 'm3u8'), false);
  assert.equal(h.plugin.Utils.isMediaUrl('https://cdn.example/file.mp4?format=m3u8', 'm3u8'), false);
});
