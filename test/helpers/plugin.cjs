const vm = require('node:vm');
const acorn = require('acorn');
const { build } = require('../../scripts/build.cjs');
const source = build();
const ast = acorn.parse(source, { ecmaVersion: 5 });
const body = ast.body[0].expression.callee.body.body;
const providers = require('../../src/manifest.json').files.filter((file) => file.path.startsWith('providers/')).map((file) => file.path.split('/').pop().replace(/\.js$/, ''));

function find(node, predicate) {
  if (predicate(node)) return node;
  for (const value of Object.values(node)) {
    if (Array.isArray(value)) {
      for (const item of value) {
        if (item && typeof item === 'object') {
          const result = find(item, predicate);
          if (result) return result;
        }
      }
    } else if (value && typeof value === 'object') {
      const result = find(value, predicate);
      if (result) return result;
    }
  }
}

function harness({ storage = {}, android = false, dom = false, initialized = false, platform = android ? 'android' : 'browser', url = 'https://example.test', msx = false } = {}) {
  const requests = [];
  const events = [];
  const timers = new Map();
  let timerId = 0;
  let clears = 0;
  function Reguest() {}
  Reguest.prototype.clear = function () { clears++; };
  Reguest.prototype.timeout = function () {};
  Reguest.prototype.errorDecode = () => 'Network error';
  for (const method of ['native', 'silent', 'quiet']) {
    Reguest.prototype[method] = function (url, success, error, data, options = {}) {
      requests.push({ method, url, success, error, data, options });
    };
  }
  const Lampa = {
    Reguest,
    Storage: {
      get: (key, fallback) => key in storage ? storage[key] : fallback,
      field: (key) => storage[key] === 'true' ? true : storage[key] === 'false' ? false : storage[key],
      set: (key, value) => { storage[key] = value; },
      cache: (key, size, fallback) => key in storage ? storage[key] : fallback
    },
    Platform: { is: (name) => name === platform },
    Params: {
      trigger: (key, fallback) => { if (!(key in storage)) storage[key] = fallback; },
      select: (key, choices, fallback) => { if (!(key in storage)) storage[key] = fallback; }
    },
    Arrays: {
      extend: (target, value) => Object.assign(target, value),
      clone: (value) => JSON.parse(JSON.stringify(value)),
      getKeys: (value) => Object.keys(value),
      decodeJson: (value, fallback) => { try { return JSON.parse(value); } catch { return fallback; } }
    },
    Utils: {
      addUrlComponent: (url, value) => url + (url.includes('?') ? '&' : '?') + value,
      hash: (value) => value,
      shortText: (value) => value,
      stringToArray: (value) => value.split(',')
    },
    Lang: { translate: (key) => key, add: () => {} },
    Noty: { show: (message) => events.push(['notice', message]) }
  };
  const browserDom = dom ? new (require('jsdom').JSDOM)('<!doctype html><html><head><meta name="referrer" content="origin"></head><body></body></html>', { url }) : null;
  const window = browserDom ? browserDom.window : { location: new URL(url) };
  window.parent = window;
  if (msx) window.TVXHost = {};
  const meta = { attr: (name, value) => value === undefined ? 'origin' : meta };
  const $ = browserDom ? require('jquery')(window) : (selector) => {
    if (selector === 'head meta[name="referrer"]') return meta;
    throw new Error('Unexpected DOM use in empty-result fixture: ' + selector);
  };
  if (dom) {
    const scroll = $('<div></div>');
    const explorer = $('<div><div class="explorer__files-head"></div></div>');
    Lampa.Scroll = function () { return { body: () => scroll, render: () => scroll, minus: () => {}, append: (item) => scroll.append(item), clear: () => scroll.empty(), update: () => {}, reset: () => {}, destroy: () => scroll.remove() }; };
    Lampa.Explorer = function () { return { render: () => explorer, appendHead: () => {}, appendFiles: () => {}, destroy: () => explorer.remove() }; };
    Lampa.Filter = function () { return { render: () => $('<div></div>'), set: () => {}, chosen: () => {}, show: (title, type) => events.push(['show-filter', type]), destroy: () => {} }; };
    Lampa.Template = { add: (name, markup) => events.push(['template', name, markup]), get: (name, element) => {
      if (name === 'list_empty') return $('<div class="empty"><div class="empty__descr"></div></div>');
      if (name === 'icon_star') return '<span></span>';
      const item = $('<div class="online selector"><div class="online__quality"></div></div>');
      item.data('fixture-element', element);
      return item;
    } };
    Lampa.Timeline = { view: () => ({}), render: () => $('<span></span>') };
    Lampa.Activity = { active: () => ({ activity: null }) };
    Lampa.Favorite = { add: () => {} };
    Lampa.Player = { play: (item) => events.push(['play', item]), playlist: (items) => events.push(['playlist', items]) };
    Lampa.Settings = { listener: { follow: () => {} } };
    Lampa.Listener = { follow: () => {} };
  }
  const context = vm.createContext({ Lampa, window, document: window.document, navigator: { userAgent: platform === 'tizen' ? 'Tizen' : 'Fixture' }, $, atob, btoa, console,
    setTimeout: (callback, delay) => { const id = ++timerId; timers.set(id, { callback, delay }); return id; },
    clearTimeout: (id) => timers.delete(id)
  });
  const entry = body.find((node) => node.type === 'ExpressionStatement' && node.expression.callee?.name === 'startPlugin');
  let instrumented = source.slice(0, entry.start) + `globalThis.plugin = { Utils, startsWith, endsWith, component, initStorage, initSettings, initLang, rezka2Login, rezka2Logout, rezka2FillCookie, ${providers.join(', ')} };` + source.slice(entry.end);
  for (const name of [...providers].sort((a, b) => body.find((item) => item.id?.name === b).start - body.find((item) => item.id?.name === a).start)) {
    const node = body.find((item) => item.id?.name === name);
    const functions = node.body.body.filter((item) => item.type === 'FunctionDeclaration').map((item) => item.id.name);
    const injection = `this.__test = { ${functions.join(', ')}, getExtract: function () { return extract; } };`;
    instrumented = instrumented.slice(0, node.body.end - 1) + injection + instrumented.slice(node.body.end - 1);
  }
  vm.runInContext(instrumented, context, { timeout: 1000 });
  context.startsWith = context.plugin.startsWith;
  context.endsWith = context.plugin.endsWith;
  const playlist = find(body.find((node) => node.id?.name === 'component'), (node) => node.type === 'AssignmentExpression' && node.left.property?.name === 'parsePlaylist');
  const parsePlaylist = vm.runInContext('(' + source.slice(playlist.right.start, playlist.right.end) + ')', context);
  const component = {
    proxy: (name) => context.plugin.Utils.proxy(name),
    proxyLink: context.plugin.Utils.proxyLink,
    fixLink: context.plugin.Utils.fixLink,
    fixLinkProtocol: context.plugin.Utils.fixLinkProtocol,
    proxyStream: (url) => url,
    processSubs: (url) => url,
    checkMyIp: (callback) => callback(),
    parsePlaylist,
    cleanTitle: (title) => title,
    containsAnyTitle: () => false,
    equalAnyTitle: () => false,
    empty: (message) => events.push(['empty', message]),
    emptyForQuery: (query) => events.push(['emptyQuery', query]),
    loading: (value) => events.push(['loading', value]),
    reset: () => events.push(['reset']),
    saveChoice: () => {},
    closeFilter: () => {},
    searchByKp: () => {},
    kpCleanTitle: (title) => title,
    vcdn_api_search: (method, data, callback) => callback([]),
    kp_api_search: (method, callback) => callback([])
  };
  for (const name of ['parseM3U', 'getDefaultQuality', 'renameQualityMap', 'formatEpisodeTitle', 'uniqueNamesShortText', 'decodeHtml', ...(dom ? ['cleanTitle', 'normalizeTitle', 'containsTitle', 'equalTitle', 'containsAnyTitle', 'equalAnyTitle'] : [])]) {
    const node = find(body.find((node) => node.id?.name === 'component'), (node) => node.type === 'AssignmentExpression' && node.left.property?.name === name);
    component[name] = vm.runInContext('(' + source.slice(node.right.start, node.right.end) + ')', context);
  }
  Object.assign(context, { forcedQuality: '', object: { movie: {} } });
  component.filter = (items, choice) => events.push(['filter', items, choice]);
  component.similars = (items) => events.push(['similars', items]);
  component.append = (item) => events.push(['append', item]);
  component.contextmenu = () => {};
  component.start = () => events.push(['start']);
  component.getLastEpisode = () => 0;
  const object = { movie: { id: 1, title: 'Fixture', original_title: 'Fixture', imdb_id: 'tt0000001', release_date: '2020-01-01' } };
  if (initialized) context.plugin.initStorage();
  return { context, plugin: context.plugin, component, object, requests, events, storage, $, window, timers,
    runTimers: () => { const pending = [...timers.values()]; timers.clear(); pending.forEach(({ callback }) => callback()); },
    close: () => browserDom?.window.close(), get clears() { return clears; } };
}

module.exports = { harness, providers, source, body, find };
