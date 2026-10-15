function kinogo(component, _object) {
  var network = Utils.createRequest(component);
  var video = new collaps(component, _object, false);
  var object = _object;
  var extract = {};
  var select_title = '';
  var mirror = Utils.kinogoMirror();
  var prox = component.proxy('kinogo');
  var mirrors = [mirror, 'https://kinogo.is', 'https://kinogo.online', 'https://kinogo.ec', 'https://kinogo.no'].filter(function (value, index, values) { return values.indexOf(value) === index; });

  this.cancel = function () { network.clear(); video.cancel(); };
  this.destroy = function () { network.clear(); video.destroy(); extract = null; };
  this.extendChoice = function (saved) { video.extendChoice(saved); };
  this.reset = function () { video.reset(); };
  this.filter = function (type, a, b) { video.filter(type, a, b); };

  function readPage(url, data, success, error) {
    var origin = Utils.parseURL(url).origin;
    var headers = Lampa.Platform.is('android') ? { 'User-Agent': Utils.baseUserAgent(), 'Origin': origin, 'Referer': origin + '/' } : {};
    var encoded = prox ? 'param/Origin=' + encodeURIComponent(origin) + '/param/Referer=' + encodeURIComponent(origin + '/') + '/param/User-Agent=' + encodeURIComponent(Utils.baseUserAgent()) + '/' : '';
    network.clear();
    network.timeout(10000);
    network['native'](component.proxyLink(url, prox, encoded, 'enc2t'), success, error, data || false, { dataType: 'text', headers: headers });
  }

  function html(str) {
    // Parse detached markup without running remote page scripts.
    return $('<div></div>').append($.parseHTML(str || '', null, false));
  }

  function searchResults(str, host) {
    var page = html(str);
    var items = [];
    page.find('.card__title a, .shortstory__title a, .shortstory h2 a, .shortstory .title a').each(function () {
      var a = $(this);
      var link = component.fixLink(a.attr('href') || '', host + '/');
      if (!/^https?:\/\//i.test(link) || items.some(function (item) { return item.link === link; })) return;
      var title = a.text().trim();
      var year = title.match(/\((\d{4})\)\s*$/);
      items.push({ title: title.replace(/\s*\(\d{4}\)\s*$/, ''), year: year ? parseInt(year[1], 10) : 0, link: link, is_similars: true });
    });
    return items;
  }

  function moviePage(item) {
    readPage(item.link, false, function (str) {
      if (Utils.findPlayerConfig(str)) return video.loadMarkup(str, object, item.title);
      var page = html(str);
      var player = '';
      page.find('iframe').each(function () {
        var src = $(this).attr('src') || $(this).attr('data-src') || '';
        src = component.fixLink(src, item.link);
        if (!player && /^https?:\/\/api\.(?:nextembed\.ws|ortified\.ws|kinogram\.best)\/embed\//i.test(src)) player = src;
      });
      if (player) video.loadEmbed(player, object, item.title, prox);
      else component.empty(Lampa.Lang.translate('online_mod_kinogo_unsupported'));
    }, function (a, c) { component.empty(network.errorDecode(a, c)); });
  }

  this.search = function (nextObject, kinopoisk_id, data) {
    object = nextObject;
    select_title = object.search || object.movie.title;
    video.cancel();
    if (this.wait_similars && data && data[0] && data[0].is_similars) return moviePage(data[0]);
    var self = this;
    var year = parseInt((object.search_date || object.movie.release_date || object.movie.first_air_date || '').slice(0, 4), 10);
    function attempt(index) {
      mirror = mirrors[index];
      var body = 'do=search&subaction=search&search_start=0&full_search=0&result_from=1&story=' + encodeURIComponent(select_title);
      readPage(mirror + '/index.php?do=search', body, function (str) {
        var items = searchResults(str, mirror);
        var matches = items.filter(function (item) { return component.equalAnyTitle([item.title], [select_title, object.movie.original_title, object.movie.original_name]) && (!year || !item.year || item.year === year); });
        if (matches.length === 1) return moviePage(matches[0]);
        if (!items.length) return component.emptyForQuery(select_title);
        self.wait_similars = true;
        component.similars(matches.length ? matches : items);
        component.loading(false);
      }, function (a, c) {
        if (index + 1 < mirrors.length && (a.onlineChallenge || a.status === 0 || a.status >= 500)) attempt(index + 1);
        else component.empty(network.errorDecode(a, c));
      });
    }
    attempt(0);
  };
}
