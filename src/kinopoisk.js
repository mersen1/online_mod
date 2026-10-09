var network$1 = new Lampa.Reguest();
var cache = {};
var total_cnt = 0;
var proxy_cnt = 0;
var good_cnt = 0;
var CACHE_SIZE = 100;
var CACHE_TIME = 1000 * 60 * 60;

function get(method, oncomplite, onerror) {
  var use_proxy = total_cnt >= 10 && good_cnt > total_cnt / 2;
  if (!use_proxy) total_cnt++;
  var kp_prox = 'https://cors.kp556.workers.dev/';
  var url = 'https://kinopoiskapiunofficial.tech/';
  url += method;
  network$1.timeout(15000);
  network$1.silent((use_proxy ? kp_prox : '') + url, function (json) {
    oncomplite(json);
  }, function (a, c) {
    use_proxy = !use_proxy && (proxy_cnt < 10 || good_cnt > proxy_cnt / 2);

    if (use_proxy && (a.status == 429 || a.status == 451 || a.status == 0 && a.statusText !== 'timeout')) {
      proxy_cnt++;
      network$1.timeout(15000);
      network$1.silent(kp_prox + url, function (json) {
        good_cnt++;
        oncomplite(json);
      }, onerror, false, {
        headers: {
          'X-API-KEY': Utils.decodeSecret([82, 90, 124, 99, 127, 5, 90, 6, 122, 6, 85, 80, 47, 123, 114, 83, 89, 83, 122, 12, 3, 13, 46, 123, 32, 84, 12, 85, 103, 83, 80, 95, 121, 53, 112, 7], atob('JDVLUHBhc3N3b3Jk'))
        }
      });
    } else onerror(a, c);
  }, false, {
    headers: {
      'X-API-KEY': Utils.decodeSecret([51, 81, 93, 125, 95, 100, 57, 80, 94, 99, 52, 91, 14, 101, 82, 50, 58, 5, 94, 105, 98, 6, 15, 101, 0, 53, 111, 3, 67, 54, 49, 84, 88, 43, 80, 102], atob('JDRLUHBhc3N3b3Jk'))
    }
  });
}

function getComplite(method, oncomplite) {
  get(method, oncomplite, function () {
    oncomplite(null);
  });
}

function getCompliteIf(condition, method, oncomplite) {
  if (condition) getComplite(method, oncomplite);else {
    setTimeout(function () {
      oncomplite(null);
    }, 10);
  }
}

function getCache(key) {
  var res = cache[key];

  if (res) {
    var cache_timestamp = new Date().getTime() - CACHE_TIME;
    if (res.timestamp > cache_timestamp) return res.value;

    for (var ID in cache) {
      var node = cache[ID];
      if (!(node && node.timestamp > cache_timestamp)) delete cache[ID];
    }
  }

  return null;
}

function setCache(key, value) {
  var timestamp = new Date().getTime();
  var size = Object.keys(cache).length;

  if (size >= CACHE_SIZE) {
    var cache_timestamp = timestamp - CACHE_TIME;

    for (var ID in cache) {
      var node = cache[ID];
      if (!(node && node.timestamp > cache_timestamp)) delete cache[ID];
    }

    size = Object.keys(cache).length;

    if (size >= CACHE_SIZE) {
      var timestamps = [];

      for (var _ID in cache) {
        var _node = cache[_ID];
        timestamps.push(_node && _node.timestamp || 0);
      }

      timestamps.sort(function (a, b) {
        return a - b;
      });
      cache_timestamp = timestamps[Math.floor(timestamps.length / 2)];

      for (var _ID2 in cache) {
        var _node2 = cache[_ID2];
        if (!(_node2 && _node2.timestamp > cache_timestamp)) delete cache[_ID2];
      }
    }
  }

  cache[key] = {
    timestamp: timestamp,
    value: value
  };
}

function getFromCache(method, oncomplite, onerror) {
  var json = getCache(method);

  if (json) {
    setTimeout(function () {
      oncomplite(json, true);
    }, 10);
  } else get(method, oncomplite, onerror);
}

function clear() {
  network$1.clear();
}

var KP = {
  get: get,
  getComplite: getComplite,
  getCompliteIf: getCompliteIf,
  getCache: getCache,
  setCache: setCache,
  getFromCache: getFromCache,
  clear: clear
};
