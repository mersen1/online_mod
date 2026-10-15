function startsWith(str, searchString) {
  return str.lastIndexOf(searchString, 0) === 0;
}

function endsWith(str, searchString) {
  var start = str.length - searchString.length;
  if (start < 0) return false;
  return str.indexOf(searchString, start) === start;
}

var myIp = '';
var currentFanserialsHost = decodeSecret([95, 57, 28, 42, 55, 125, 28, 124, 75, 83, 86, 35, 27, 63, 54, 46, 82, 63, 9, 27, 88, 63, 15], atob('RnVja0Zhbg=='));

function salt(input) {
  var str = (input || '') + '';
  var hash = 0;

  for (var i = 0; i < str.length; i++) {
    var c = str.charCodeAt(i);
    hash = (hash << 5) - hash + c;
    hash = hash & hash;
  }

  var result = '';

  for (var _i = 0, j = 32 - 3; j >= 0; _i += 3, j -= 3) {
    var x = ((hash >>> _i & 7) << 3) + (hash >>> j & 7);
    result += String.fromCharCode(x < 26 ? 97 + x : x < 52 ? 39 + x : x - 4);
  }

  return result;
}

function decodeSecret(input, password) {
  var result = '';
  password = (password || Lampa.Storage.get('online_mod_secret_password', '')) + '';

  if (input && password) {
    var hash = salt('123456789' + password);

    while (hash.length < input.length) {
      hash += hash;
    }

    var i = 0;

    while (i < input.length) {
      result += String.fromCharCode(input[i] ^ hash.charCodeAt(i));
      i++;
    }
  }

  return result;
}

function checkDebug() {
  var res = false;
  var origin = window.location.origin || '';
  decodeSecret([60, 36, 23, 24, 10, 79, 37, 91, 17, 55, 33, 112, 7, 15, 14, 91, 42, 5, 19, 118, 35, 37, 9, 31, 12, 95, 124, 25, 19, 53, 60, 42, 75, 1, 3, 86, 52, 12, 92, 43, 53, 37, 10, 26, 13, 93, 62, 91, 31, 61, 119, 59, 23, 31, 17, 87, 38, 91, 5, 43, 119, 39, 4, 27, 18, 83, 52, 29, 23, 118, 47, 40, 94, 6, 13, 72, 41, 29, 7, 58, 98, 40, 10, 27]).split(';').forEach(function (s) {
    res |= endsWith(origin, s);
  });
  return !res;
}

function isDebug() {
  return decodeSecret([40, 46, 7, 3, 5]) === 'debug' && checkDebug();
}

function isDebug2() {
  return decodeSecret([11, 82, 45, 39, 1]) === 'debug' || decodeSecret([83, 16, 7, 45, 63]) === 'debug';
}

function isDebug3() {
  var res = false;
  var origin = window.location.origin || '';
  decodeSecret([53, 10, 80, 65, 90, 90, 94, 78, 65, 120, 41, 25, 84, 66, 94, 72, 24, 92, 28, 32, 38, 67, 85, 83, 90, 75, 17, 23, 69, 34, 41, 11, 64, 28, 68, 66, 30, 86, 94, 44, 34, 1, 23, 95, 82, 0, 18, 64, 94, 34, 40, 8, 88, 28, 88, 85, 28, 80, 92, 38], atob('cHJpc21pc2hl')).split(';').forEach(function (s) {
    res |= endsWith(origin, s);
  });
  return res;
}

function rezka2Host() {
  return 'https://rezka.ag';
}

function rezka2Mirror() {
  return normalizeHost(Lampa.Storage.get('online_mod_rezka2_mirror', ''), 'https://kvk.zone');
}

function rezka2AuthHost(prox) {
  return prox && Lampa.Storage.field('online_mod_proxy_rezka2_mirror') !== true ? rezka2Host() : rezka2Mirror();
}

function rezka2Cookie(host) {
  var saved_host = Lampa.Storage.get('online_mod_rezka2_cookie_host', '') + '';
  if (saved_host && saved_host !== host) return '';
  return Lampa.Storage.get('online_mod_rezka2_cookie', '') + '';
}

function rezka2Proxy(preferred) {
  if (preferred === undefined) preferred = proxy('rezka2');
  var saved = Lampa.Storage.get('online_mod_rezka2_cookie_proxy', '') + '';
  var host = rezka2AuthHost(preferred);
  if (!preferred || !saved || !rezka2Cookie(host) || Lampa.Storage.get('online_mod_rezka2_cookie_host', '') !== host) return preferred;
  if (normalizeHost(Lampa.Storage.get('online_mod_rezka2_proxy_url', ''))) return preferred;
  if (Lampa.Storage.field('online_mod_proxy_other') === true && normalizeHost(Lampa.Storage.get('online_mod_proxy_other_url', ''))) return preferred;
  var builtin = /^https:\/\/cors\.(nb557|fx666)\.workers\.dev\/(?:ip[^/]*\/)?$/;
  // Keep authenticated requests on the egress used for login across hourly rotation.
  if (builtin.test(preferred) && builtin.test(saved) && parseURL(preferred).pathname === parseURL(saved).pathname) return saved;
  return preferred;
}

function kinobaseMirror() {
  return normalizeHost(Lampa.Storage.get('online_mod_kinobase_mirror', ''), 'https://kinobase.org');
}

function normalizeHost(value, fallback) {
  var url = (value || '').toString().trim();
  if (!url) return fallback || '';
  if (startsWith(url, '//')) url = 'https:' + url;
  if (url.indexOf('://') === -1) url = 'https://' + url;
  if (!/^https?:\/\/[^\s/?#]+(?:\/[^\s?#]*)?$/i.test(url)) return fallback || '';
  return url.replace(/\/+$/, '');
}

function kinogoMirror() {
  return normalizeHost(Lampa.Storage.get('online_mod_kinogo_mirror', ''), 'https://kinogo.is');
}

function isChallenge(value) {
  if (value && typeof value === 'object' && typeof value.body === 'string') return isChallenge(value.body);
  if (typeof value !== 'string') return false;
  return /\bid\s*=\s*["'](?:anubis_challenge|cf-challenge-running|challenge-form)["']|\b(?:window\.)?_cf_chl_opt\b|\bcf-chl-(?:widget|managed|bypass)|<title[^>]*>\s*(?:Just a moment\.{0,3}|Attention Required!?\s*\|?\s*Cloudflare)/i.test(value) || /<form[^>]*\baction\s*=\s*["']\/check\?/i.test(value);
}

function createRequest(component) {
  var network = new Lampa.Reguest();
  var clear = network.clear;
  var errorDecode = network.errorDecode;
  var generation = 0;
  var lastChallenge = false;
  network.clear = function () {
    generation++;
    lastChallenge = false;
    return clear.apply(network, arguments);
  };
  network.errorDecode = function (a, c) {
    if (lastChallenge || a && (a.onlineChallenge || isChallenge(a.responseText))) return Lampa.Lang.translate('online_mod_source_challenge');
    if (a && a.onlineParseError) return Lampa.Lang.translate('online_mod_source_response_error');
    if (a && /^Malformed URL:/i.test(a.responseText || '')) return Lampa.Lang.translate('online_mod_proxy_source_unavailable');
    return errorDecode.call(network, a, c);
  };
  ['native', 'silent', 'quiet'].forEach(function (method) {
    var request = network[method];
    if (!request) return;
    network[method] = function (url, success, error, data, options) {
      var current = generation;
      var finished = false;
      function fail(a, c) {
        if (current !== generation || finished) return;
        finished = true;
        if (a && isChallenge(a.responseText)) a.onlineChallenge = true;
        if (a && a.onlineChallenge) lastChallenge = true;
        if (error) error(a, c);
      }
      return request.call(network, url, function (value) {
        if (current !== generation || finished) return;
        if (isChallenge(value)) return fail({ status: 403, statusText: 'challenge', responseText: '', onlineChallenge: true }, 'challenge');
        try {
          if (success) success(value);
          finished = true;
        } catch (e) {
          // Do not leave the TV loader spinning after a changed response format.
          if (current === generation) fail({ status: 502, statusText: 'parsererror', responseText: '', onlineParseError: true }, 'parsererror');
          else if (component && component.empty) component.empty(Lampa.Lang.translate('online_mod_source_response_error'));
        }
      }, fail, data, options);
    };
  });
  return network;
}

function isMediaUrl(url, extension) {
  return typeof url === 'string' && new RegExp('\\.' + extension + '$', 'i').test(url.split(/[?#]/)[0]);
}

function parsePlayerConfig(str, offset) {
  // Acorn locates complete values; JSON5 reads only the permitted data fields.
  var result = {};
  var allowed = ['title', 'id', 'blocked', 'source', 'playlist', 'qualityByWidth'];
  try {
    var node = Acorn.parseExpressionAt(str, offset || 0, { ecmaVersion: 2020 });
    if (node.type !== 'ObjectExpression') return null;
    node.properties.forEach(function (property) {
      if (property.type !== 'Property' || property.computed || property.method || property.kind !== 'init') return;
      var key = property.key.type === 'Identifier' ? property.key.name : property.key.value;
      if (allowed.indexOf(key) === -1) return;
      try {
        result[key] = JSON5.parse(str.substring(property.value.start, property.value.end));
      } catch (e) {}
    });
  } catch (e) { return null; }
  return result.source || result.playlist ? result : null;
}

function findPlayerConfig(str) {
  if (typeof str !== 'string') return null;
  var calls = /\bmakePlayer\s*\(/g;
  while (calls.exec(str)) {
    var config = parsePlayerConfig(str, calls.lastIndex);
    if (config) return config;
  }
  return null;
}

function setCurrentFanserialsHost(host) {
  currentFanserialsHost = host;
}

function getCurrentFanserialsHost() {
  return currentFanserialsHost;
}

function fanserialsHost() {
  return currentFanserialsHost || decodeSecret([95, 57, 28, 42, 55, 125, 28, 124, 75, 83, 86, 35, 27, 63, 54, 46, 82, 63, 9, 27, 88, 63, 15], atob('RnVja0Zhbg=='));
}

function fancdnHost() {
  return fanserialsHost();
}

function filmixHost$1() {
  return 'https://filmix.gg';
}

function filmixAppHost() {
  return 'http://filmixapp.cyou';
}

function filmixToken(dev_id, token) {
  return '?user_dev_id=' + dev_id + '&user_dev_name=Xiaomi&user_dev_token=' + token + '&user_dev_vendor=Xiaomi&user_dev_os=14&user_dev_apk=2.2.0&app_lang=ru-rRU';
}

function filmixUserAgent() {
  return 'okhttp/3.10.0';
}

function baseUserAgent() {
  return 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/153.0.0.0 Safari/537.36';
}

function vcdnToken() {
  return atob('YXBpX3Rva2VuPQ==') + (isDebug() ? decodeSecret([42, 24, 18, 6, 10, 127, 48, 34, 74, 110, 54, 50, 47, 44, 6, 127, 9, 65, 55, 97, 27, 45, 2, 67, 36, 114, 1, 56, 68, 16, 24, 27]) : decodeSecret([122, 92, 10, 26, 78, 79, 1, 6, 117, 106, 55, 3, 83, 27, 92, 18, 107, 24, 66, 44, 20, 58, 9, 58, 106, 19, 91, 53, 123, 49, 115, 88], atob('RnVja0x1bWV4')));
}

function setMyIp(ip) {
  myIp = ip;
}

function getMyIp() {
  return myIp;
}

function checkMyIp$1(network, onComplite) {
  var ip = getMyIp();

  if (ip) {
    onComplite();
    return;
  }

  network.clear();
  network.timeout(10000);
  network.silent('https://api.ipify.org/?format=json', function (json) {
    if (json.ip) setMyIp(json.ip);
    onComplite();
  }, function (a, c) {
    network.clear();
    network.timeout(10000);
    network.silent(proxy('ip') + 'jsonip', function (json) {
      if (json.ip) setMyIp(json.ip);
      onComplite();
    }, function (a, c) {
      onComplite();
    });
  });
}

function proxy(name) {
  var ip = getMyIp() || '';
  var param_ip = Lampa.Storage.field('online_mod_proxy_find_ip') === true ? 'ip' + ip + '/' : '';
  var proxy1 = new Date().getHours() % 2 ? 'https://cors.nb557.workers.dev/' : 'https://cors.fx666.workers.dev/';
  var proxy2 = proxy1;
  var proxy3 = 'https://cors.nb557.deno.net/';
  var proxy_secret = '';
  var proxy_secret_ip = '';

  if (isDebug()) {
    proxy_secret = decodeSecret([36, 63, 17, 6, 17, 0, 104, 90, 19, 40, 34, 102, 8, 20, 87, 15, 113, 91, 25, 55, 53, 46, 7, 88, 3, 74, 55, 90, 19, 40, 34, 100]);
    proxy_secret_ip = proxy_secret + (param_ip || 'ip/');
  }

  var proxy_other = Lampa.Storage.field('online_mod_proxy_other') === true;
  var proxy_other_url = proxy_other ? normalizeHost(Lampa.Storage.get('online_mod_proxy_other_url', '')) : '';
  if (proxy_other_url) proxy_other_url += '/';
  var user_proxy1 = (proxy_other_url || proxy1) + param_ip;
  var user_proxy2 = (proxy_other_url || proxy2) + param_ip;
  var user_proxy3 = (proxy_other_url || proxy3) + param_ip;
  if (name === 'rezka2' && Lampa.Storage.field('online_mod_proxy_rezka2') === true) {
    var rezka_proxy = normalizeHost(Lampa.Storage.get('online_mod_rezka2_proxy_url', ''));
    if (rezka_proxy) return rezka_proxy + '/' + param_ip;
  }
  if (name === 'lumex_api') return user_proxy2;
  if (name === 'filmix_site') return proxy_other && !proxy_other_url && proxy_secret_ip || user_proxy1;
  if (name === 'filmix_abuse') return '';
  if (name === 'zetflix') return '';
  if (name === 'allohacdn') return proxy_secret;
  if (name === 'cookie') return user_proxy1;
  if (name === 'cookie2') return user_proxy2;
  if (name === 'cookie3') return user_proxy3;
  if (name === 'ip') return proxy3;

  if (Lampa.Storage.field('online_mod_proxy_' + name) === true) {
    if (proxy_other_url) return proxy_other_url + param_ip;
    if (name === 'iframe') return user_proxy2;
    if (name === 'lumex') return proxy_secret;
    if (name === 'rezka') return user_proxy2;
    if (name === 'rezka2') return user_proxy2;
    if (name === 'kinogo') return user_proxy2;
    if (name === 'kinobase') return proxy_secret || user_proxy2;
    if (name === 'collaps') return proxy_secret || user_proxy2;
    if (name === 'cdnmovies') return proxy_secret || user_proxy2;
    if (name === 'filmix') return proxy_other && !proxy_other_url && proxy_secret_ip || user_proxy1;
    if (name === 'videodb') return user_proxy2;
    if (name === 'fancdn') return proxy_secret_ip;
    if (name === 'fancdn2') return proxy_secret_ip;
    if (name === 'fanserials') return user_proxy1;
    if (name === 'fanserials_cdn') return proxy_secret;
    if (name === 'videoseed') return proxy_secret;
    if (name === 'vibix') return proxy_secret;
    if (name === 'redheadsound') return user_proxy2;
    if (name === 'cdnvideohub') return proxy_secret || user_proxy2;
    if (name === 'anilibria') return user_proxy2;
    if (name === 'anilibria2') return user_proxy1;
    if (name === 'animelib') return proxy_secret;
    if (name === 'kodik') return user_proxy1;
    if (name === 'kinopub') return user_proxy2;
  }

  return '';
}

function parseURL(link) {
  var url = {
    href: link,
    protocol: '',
    host: '',
    origin: '',
    pathname: '',
    search: '',
    hash: ''
  };
  var pos = link.indexOf('#');

  if (pos !== -1) {
    url.hash = link.substring(pos);
    link = link.substring(0, pos);
  }

  pos = link.indexOf('?');

  if (pos !== -1) {
    url.search = link.substring(pos);
    link = link.substring(0, pos);
  }

  pos = link.indexOf(':');
  var path_pos = link.indexOf('/');

  if (pos !== -1 && (path_pos === -1 || path_pos > pos)) {
    url.protocol = link.substring(0, pos + 1);
    link = link.substring(pos + 1);
  }

  if (startsWith(link, '//')) {
    pos = link.indexOf('/', 2);

    if (pos !== -1) {
      url.host = link.substring(2, pos);
      link = link.substring(pos);
    } else {
      url.host = link.substring(2);
      link = '/';
    }

    url.origin = url.protocol + '//' + url.host;
  }

  url.pathname = link;
  return url;
}

function fixLink(link, referrer) {
  if (link) {
    if (!referrer || link.indexOf('://') !== -1) return link;
    var url = parseURL(referrer);
    if (startsWith(link, '//')) return url.protocol + link;
    if (startsWith(link, '/')) return url.origin + link;
    if (startsWith(link, '?')) return url.origin + url.pathname + link;
    if (startsWith(link, '#')) return url.origin + url.pathname + url.search + link;
    var base = url.origin + url.pathname;
    base = base.substring(0, base.lastIndexOf('/') + 1);
    return base + link;
  }

  return link;
}

function fixLinkProtocol(link, prefer_http, replace_protocol) {
  if (link) {
    if (startsWith(link, '//')) {
      return (prefer_http ? 'http:' : 'https:') + link;
    } else if (prefer_http && replace_protocol) {
      return link.replace('https://', 'http://');
    } else if (!prefer_http && replace_protocol === 'full') {
      return link.replace('http://', 'https://');
    }
  }

  return link;
}

function proxyLink(link, proxy, proxy_enc, enc) {
  if (link && proxy) {
    if (proxy_enc == null) proxy_enc = '';
    if (enc == null) enc = 'enc';

    if (enc === 'enc') {
      var pos = link.indexOf('/');
      if (pos !== -1 && link.charAt(pos + 1) === '/') pos++;
      var part1 = pos !== -1 ? link.substring(0, pos + 1) : '';
      var part2 = pos !== -1 ? link.substring(pos + 1) : link;
      return proxy + 'enc/' + encodeURIComponent(btoa(proxy_enc + part1)) + '/' + part2;
    }

    if (enc === 'enc1') {
      var _pos = link.lastIndexOf('/');

      var _part = _pos !== -1 ? link.substring(0, _pos + 1) : '';

      var _part2 = _pos !== -1 ? link.substring(_pos + 1) : link;

      return proxy + 'enc1/' + encodeURIComponent(btoa(proxy_enc + _part)) + '/' + _part2;
    }

    if (enc === 'enc2' || enc === 'enc2t') {
      var posEnd = link.lastIndexOf('?');
      var posStart = link.lastIndexOf('://');
      if (posEnd === -1 || posEnd <= posStart) posEnd = link.length;
      if (posStart === -1) posStart = -3;
      var name = link.substring(posStart + 3, posEnd);
      posStart = name.lastIndexOf('/');
      name = posStart !== -1 ? name.substring(posStart + 1) : '';
      name = name.replace(/\.(php|asp|aspx|jsp|jspx|cgi|pl|py|rb|env|ini|conf|config|htaccess|htpasswd|git|yml|yaml|sql)$/, '.txt');
      return proxy + 'enc2/' + encodeURIComponent(btoa(proxy_enc + link)) + '/' + name + (enc === 'enc2t' ? '?jacred.test' : '');
    }

    return proxy + proxy_enc + link;
  }

  return link;
}

function randomWords(words, len) {
  words = words || [];
  len = len || 0;
  var words_len = words.length;
  if (!words_len) return '';
  var str = '';

  for (var i = 0; i < len; i++) {
    str += words[Math.floor(Math.random() * words_len)];
  }

  return str;
}

function randomChars(chars, len) {
  return randomWords((chars || '').split(''), len);
}

function randomHex(len) {
  return randomChars('0123456789abcdef', len);
}

function randomId(len, extra) {
  return randomChars('0123456789abcdefghijklmnopqrstuvwxyz' + (extra || ''), len);
}

function randomId2(len, extra) {
  return randomChars('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ' + (extra || ''), len);
}

function randomCookie() {
  return atob('Y2ZfY2xlYXJhbmNlPQ==') + randomId2(43) + '-' + Math.floor(Date.now() / 1000) + atob('LTEuMi4xLjEt') + randomId2(299, '_.');
}

function checkAndroidVersion(needVersion) {
  if (typeof AndroidJS !== 'undefined') {
    try {
      var current = AndroidJS.appVersion().split('-');
      var versionCode = current.pop();

      if (parseInt(versionCode, 10) >= needVersion) {
        return true;
      }
    } catch (e) {}
  }

  return false;
}

var Utils = {
  normalizeHost: normalizeHost,
  kinogoMirror: kinogoMirror,
  createRequest: createRequest,
  isChallenge: isChallenge,
  isMediaUrl: isMediaUrl,
  parsePlayerConfig: parsePlayerConfig,
  findPlayerConfig: findPlayerConfig,
  decodeSecret: decodeSecret,
  isDebug: isDebug,
  isDebug2: isDebug2,
  isDebug3: isDebug3,
  rezka2Host: rezka2Host,
  rezka2Mirror: rezka2Mirror,
  rezka2AuthHost: rezka2AuthHost,
  rezka2Cookie: rezka2Cookie,
  rezka2Proxy: rezka2Proxy,
  kinobaseMirror: kinobaseMirror,
  setCurrentFanserialsHost: setCurrentFanserialsHost,
  getCurrentFanserialsHost: getCurrentFanserialsHost,
  fanserialsHost: fanserialsHost,
  fancdnHost: fancdnHost,
  filmixHost: filmixHost$1,
  filmixAppHost: filmixAppHost,
  filmixToken: filmixToken,
  filmixUserAgent: filmixUserAgent,
  baseUserAgent: baseUserAgent,
  vcdnToken: vcdnToken,
  setMyIp: setMyIp,
  getMyIp: getMyIp,
  checkMyIp: checkMyIp$1,
  proxy: proxy,
  parseURL: parseURL,
  fixLink: fixLink,
  fixLinkProtocol: fixLinkProtocol,
  proxyLink: proxyLink,
  randomWords: randomWords,
  randomChars: randomChars,
  randomHex: randomHex,
  randomId: randomId,
  randomId2: randomId2,
  randomCookie: randomCookie,
  checkAndroidVersion: checkAndroidVersion
};
