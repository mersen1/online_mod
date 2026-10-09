const vm = require('node:vm');
const acorn = require('acorn');
const { build } = require('../../scripts/build.cjs');
const source = build();
const ast = acorn.parse(source, { ecmaVersion: 5 });
const body = ast.body[0].expression.callee.body.body;
const providers = body.filter((node) => node.type === 'FunctionDeclaration' && node.start >= body.find((node) => node.id?.name === 'lumex').start && node.end <= body.find((node) => node.id?.name === 'kinopub').end).map((node) => node.id.name);

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

function harness({ storage = {}, android = false } = {}) {
  const requests = [];
  const events = [];
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
      field: (key) => storage[key],
      set: (key, value) => { storage[key] = value; },
      cache: (key, size, fallback) => key in storage ? storage[key] : fallback
    },
    Platform: { is: (name) => android && name === 'android' },
    Arrays: {
      extend: (target, value) => Object.assign(target, value),
      clone: (value) => JSON.parse(JSON.stringify(value)),
      decodeJson: (value, fallback) => { try { return JSON.parse(value); } catch { return fallback; } }
    },
    Utils: {
      addUrlComponent: (url, value) => url + (url.includes('?') ? '&' : '?') + value,
      hash: (value) => value
    },
    Lang: { translate: (key) => key },
    Noty: { show: (message) => events.push(['notice', message]) }
  };
  const window = { location: { protocol: 'https:', origin: 'https://example.test', hostname: 'example.test' } };
  window.parent = window;
  const meta = { attr: (name, value) => value === undefined ? 'origin' : meta };
  const $ = (selector) => {
    if (selector === 'head meta[name="referrer"]') return meta;
    throw new Error('Unexpected DOM use in empty-result fixture: ' + selector);
  };
  const context = vm.createContext({ Lampa, window, navigator: { userAgent: 'Fixture' }, $, atob, btoa, console, setTimeout: () => 0 });
  const rezka = body.find((node) => node.id?.name === 'rezka2');
  const entry = body.find((node) => node.type === 'ExpressionStatement' && node.expression.callee?.name === 'startPlugin');
  const exported = source.slice(0, entry.start) + `globalThis.plugin = { Utils, startsWith, endsWith, ${providers.join(', ')} };` + source.slice(entry.end);
  const instrumented = exported.slice(0, rezka.body.end - 1) + 'this.__test = { extractData, extractItems, getStream, decode, getExtract: function () { return extract; } };' + exported.slice(rezka.body.end - 1);
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
  const object = { movie: { id: 1, title: 'Fixture', original_title: 'Fixture', imdb_id: 'tt0000001', release_date: '2020-01-01' } };
  return { context, plugin: context.plugin, component, object, requests, events, storage, get clears() { return clears; } };
}

module.exports = { harness, providers, source, body, find };
