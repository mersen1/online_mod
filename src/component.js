var proxyInitialized = {};
var proxyWindow = {};
var proxyCalls = {};
var default_balanser = 'rezka2';

function component(object) {
  var network = new Lampa.Reguest();
  var scroll = new Lampa.Scroll({
    mask: true,
    over: true
  });
  var files = new Lampa.Explorer(object);
  var filter = new Lampa.Filter(object);
  var balanser = Lampa.Storage.get('online_mod_balanser', default_balanser) + '';
  var last_bls = Lampa.Storage.field('online_mod_save_last_balanser') === true ? Lampa.Storage.cache('online_mod_last_balanser', 200, {}) : {};
  var use_stream_proxy = Lampa.Storage.field('online_mod_use_stream_proxy') === true;
  var rezka2_prx_ukr = '//' + (Lampa.Storage.field('online_mod_rezka2_prx_ukr') || 'prx.ukrtelcdn.net') + '/';
  var rezka2_fix_stream = Lampa.Storage.field('online_mod_rezka2_fix_stream') === true;
  var prefer_http = Lampa.Storage.field('online_mod_prefer_http') === true;
  var forcedQuality = '';
  var qualityFilter = {
    title: Lampa.Lang.translate('settings_player_quality'),
    subtitle: '',
    items: [],
    stype: 'quality'
  };
  var contextmenu_all = [];

  if (last_bls[object.movie.id]) {
    balanser = last_bls[object.movie.id];
  }

  this.proxy = function (name) {
    return Utils.proxy(name);
  };

  this.fixLink = function (link, referrer) {
    return Utils.fixLink(link, referrer);
  };

  this.fixLinkProtocol = function (link, prefer_http, replace_protocol) {
    return Utils.fixLinkProtocol(link, prefer_http, replace_protocol);
  };

  this.proxyLink = function (link, proxy, proxy_enc, enc) {
    return Utils.proxyLink(link, proxy, proxy_enc, enc);
  };

  this.proxyStream = function (url, name) {
    if (url && use_stream_proxy) {
      if (name === 'lumex') return url;

      if (name === 'rezka2') {
        return url.replace(/\/\/(stream\.voidboost\.(cc|top|link|club)|[^\/]*.ukrtelcdn.net|vdbmate.org|sambray.org|rumbegg.org|laptostack.org|frntroy.org|femeretes.org)\//, rezka2_prx_ukr);
      }

      return (prefer_http ? 'http://apn.cfhttp.top/' : 'https://apn.watch/') + url;
    }

    if (url && rezka2_fix_stream && name === 'rezka2') {
      return url.replace(/\/\/(stream\.voidboost\.(cc|top|link|club)|[^\/]*.ukrtelcdn.net)\//, '//femeretes.org/');
    }

    return url;
  };

  this.processSubs = function (url) {
    return url;
  };

  this.proxyStreamSubs = function (url, name) {
    if (name === 'lumex') return url;
    var srtUrl = this.processSubs(url);
    if (srtUrl !== url) return srtUrl;
    return this.proxyStream(url, name);
  };

  this.checkMyIp = function (onComplite) {
    Utils.checkMyIp(network, onComplite);
  };

  var last;
  var extended;
  var selected_id;
  var filter_translate = {
    season: Lampa.Lang.translate('torrent_serial_season'),
    voice: Lampa.Lang.translate('torrent_parser_voice'),
    source: Lampa.Lang.translate('settings_rest_source')
  };
  var disable_dbg = !Utils.isDebug();
  var isAndroid = Lampa.Platform.is('android');
  isAndroid && Utils.checkAndroidVersion(339);
  var collapsBlocked = (!startsWith(window.location.protocol, 'http') || window.location.hostname.indexOf('lampa') !== -1) && disable_dbg;
  var all_sources = [{
    name: 'lumex',
    title: 'Lumex',
    source: new lumex(this, object),
    search: false,
    kp: false,
    imdb: true,
    disabled: true
  }, {
    name: 'lumex2',
    title: 'Lumex (Ads)',
    source: new lumex2(this, object),
    search: false,
    kp: false,
    imdb: true,
    disabled: true
  }, {
    name: 'rezka2',
    title: 'HDrezka',
    source: new rezka2(this, object),
    search: true,
    kp: false,
    imdb: false
  }, {
    name: 'kinogo',
    title: 'Kinogo',
    source: new kinogo(this, object),
    search: true,
    kp: false,
    imdb: false
  }, {
    name: 'kinobase',
    title: 'Kinobase',
    source: new kinobase(this, object),
    search: true,
    kp: false,
    imdb: false,
    disabled: true
  }, {
    name: 'collaps',
    title: 'Collaps',
    source: new collaps(this, object, false),
    search: false,
    kp: true,
    imdb: true,
    disabled: collapsBlocked
  }, {
    name: 'collaps-dash',
    title: 'Collaps (DASH)',
    source: new collaps(this, object, true),
    search: false,
    kp: true,
    imdb: true,
    disabled: collapsBlocked
  }, {
    name: 'cdnmovies',
    title: 'CDNMovies',
    source: new cdnmovies(this, object),
    search: false,
    kp: true,
    imdb: true,
    disabled: true
  }, {
    name: 'filmix',
    title: 'Filmix',
    source: new filmix(this, object),
    search: true,
    kp: false,
    imdb: false
  }, {
    name: 'zetflix',
    title: 'Zetflix',
    source: new zetflix(this, object),
    search: false,
    kp: true,
    imdb: false,
    disabled: true
  }, {
    name: 'fancdn',
    title: 'FanCDN',
    source: new fancdn(this, object),
    search: true,
    kp: false,
    imdb: false,
    disabled: disable_dbg
  }, {
    name: 'fancdn2',
    title: 'FanCDN (ID)',
    source: new fancdn2(this, object),
    search: false,
    kp: true,
    imdb: true,
    disabled: true
  }, {
    name: 'fanserials',
    title: 'FanSerials',
    source: new fanserials(this, object),
    search: false,
    kp: true,
    imdb: false,
    disabled: disable_dbg && !isAndroid
  }, {
    name: 'videoseed',
    title: 'VideoSeed',
    source: new videoseed(this, object),
    search: false,
    kp: true,
    imdb: true,
    disabled: true
  }, {
    name: 'vibix',
    title: 'Vibix',
    source: new vibix(this, object),
    search: false,
    kp: true,
    imdb: true,
    disabled: true
  }, {
    name: 'redheadsound',
    title: 'RedHeadSound',
    source: new redheadsound(this, object, false),
    search: true,
    kp: false,
    imdb: true,
    disabled: true
  }, {
    name: 'redheadsound-dash',
    title: 'RedHeadSound (DASH)',
    source: new redheadsound(this, object, true),
    search: true,
    kp: false,
    imdb: true,
    disabled: true
  }, {
    name: 'cdnvideohub',
    title: 'CDNVideoHub',
    source: new cdnvideohub(this, object),
    search: false,
    kp: true,
    imdb: false
  }, {
    name: 'anilibria',
    title: 'AniLibria',
    source: new anilibria(this, object),
    search: true,
    kp: false,
    imdb: false,
    disabled: true
  }, {
    name: 'anilibria2',
    title: 'AniLibria.top',
    source: new anilibria2(this, object),
    search: true,
    kp: false,
    imdb: false
  }, {
    name: 'animelib',
    title: 'AnimeLib',
    source: new animelib(this, object),
    search: true,
    kp: false,
    imdb: false,
    disabled: true
  }, {
    name: 'kodik',
    title: 'Kodik',
    source: new kodik(this, object),
    search: true,
    kp: true,
    imdb: true
  }, {
    name: 'alloha',
    title: 'Alloha',
    source: new alloha(this, object),
    search: false,
    kp: true,
    imdb: true,
    disabled: true
  }, {
    name: 'kinopub',
    title: 'KinoPub',
    source: new kinopub(this, object),
    search: true,
    kp: false,
    imdb: true,
    disabled: true
  }];
  var obj_filter_sources = all_sources.filter(function (s) {
    return !s.disabled;
  });
  var filter_sources = obj_filter_sources.map(function (s) {
    return s.name;
  });
  var sources = {};
  obj_filter_sources.forEach(function (s) {
    sources[s.name] = s.source;
  });
  var search_sources = all_sources.filter(function (s) {
    return s.search;
  }).map(function (s) {
    return s.name;
  });
  var kp_sources = all_sources.filter(function (s) {
    return s.kp;
  }).map(function (s) {
    return s.name;
  });
  var imdb_sources = all_sources.filter(function (s) {
    return s.imdb;
  }).map(function (s) {
    return s.name;
  }); // шаловливые ручки

  if (filter_sources.indexOf(balanser) == -1) {
    balanser = default_balanser;

    if (filter_sources.indexOf(balanser) == -1) {
      balanser = filter_sources[0];
    }

    Lampa.Storage.set('online_mod_balanser', balanser);
  }

  scroll.body().addClass('torrent-list');
  scroll.minus(files.render().find('.explorer__files-head'));
  /**
   * Подготовка
   */

  this.create = function () {
    var _this = this;

    this.activity.loader(true);

    filter.onSearch = function (value) {
      Lampa.Activity.replace({
        search: value,
        search_date: '',
        clarification: true
      });
    };

    filter.onBack = function () {
      _this.start();
    };

    filter.onSelect = function (type, a, b) {
      if (type == 'filter') {
        if (a.reset) {
          if (extended) sources[balanser].reset();else _this.start();
        } else if (a.stype == 'source') {
          _this.changeBalanser(filter_sources[b.index]);
        } else if (a.stype == 'quality') {
          forcedQuality = b.title;

          _this.updateQualityFilter();
        } else {
          sources[balanser].filter(type, a, b);
        }
      } else if (type == 'sort') {
        _this.changeBalanser(a.source);
      }
    };

    filter.render().find('.filter--sort span').text(Lampa.Lang.translate('online_mod_balanser'));
    files.appendHead(filter.render());
    files.appendFiles(scroll.render());
    this.search();
    return this.render();
  };

  this.changeBalanser = function (balanser_name) {
    balanser = balanser_name;
    Lampa.Storage.set('online_mod_balanser', balanser);
    last_bls[object.movie.id] = balanser;

    if (Lampa.Storage.field('online_mod_save_last_balanser') === true) {
      Lampa.Storage.set('online_mod_last_balanser', last_bls);
    }

    this.search();
    setTimeout(this.closeFilter, 10);
  };

  this.updateQualityFilter = function () {
    var preferably = forcedQuality;

    if (!preferably) {
      preferably = Lampa.Storage.get('video_quality_default', '1080') + 'p';
      if (preferably === '1080p') preferably = '1080p Ultra';
    }

    var items = ['2160p', '1440p', '1080p Ultra', '1080p', '720p', '480p'].map(function (quality, i) {
      return {
        title: quality,
        selected: quality === preferably,
        index: i
      };
    });
    qualityFilter.subtitle = preferably;
    qualityFilter.items = items;
    setTimeout(this.closeFilter, 10);
  };
  /**
   * Начать поиск
   */


  this.search = function () {
    network.clear();
    all_sources.forEach(function (s) { if (s.source.cancel) s.source.cancel(); });
    this.activity.loader(true);
    this.filter({
      source: filter_sources
    }, {
      source: 0
    });
    this.reset();
    this.find();
  };

  this.cleanTitle = function (str) {
    return str.replace(/[\s.,:;’'`!?]+/g, ' ').trim();
  };

  this.kpCleanTitle = function (str) {
    return this.cleanTitle(str).replace(/^[ \/\\]+/, '').replace(/[ \/\\]+$/, '').replace(/\+( *[+\/\\])+/g, '+').replace(/([+\/\\] *)+\+/g, '+').replace(/( *[\/\\]+ *)+/g, '+');
  };

  this.normalizeTitle = function (str) {
    return this.cleanTitle(str.toLowerCase().replace(/[\-\u2010-\u2015\u2E3A\u2E3B\uFE58\uFE63\uFF0D]+/g, '-').replace(/ё/g, 'е'));
  };

  this.equalTitle = function (t1, t2) {
    return typeof t1 === 'string' && typeof t2 === 'string' && this.normalizeTitle(t1) === this.normalizeTitle(t2);
  };

  this.containsTitle = function (str, title) {
    return typeof str === 'string' && typeof title === 'string' && this.normalizeTitle(str).indexOf(this.normalizeTitle(title)) !== -1;
  };

  this.equalAnyTitle = function (strings, titles) {
    var _this2 = this;

    return titles.some(function (title) {
      return title && strings.some(function (str) {
        return str && _this2.equalTitle(str, title);
      });
    });
  };

  this.containsAnyTitle = function (strings, titles) {
    var _this3 = this;

    return titles.some(function (title) {
      return title && strings.some(function (str) {
        return str && _this3.containsTitle(str, title);
      });
    });
  };

  this.uniqueNamesShortText = function (names, limit) {
    var unique = [];
    names.forEach(function (name) {
      if (name && unique.indexOf(name) == -1) unique.push(name);
    });

    if (limit && unique.length > 1) {
      var length = 0;
      var limit_index = -1;
      var last_index = unique.length - 1;
      unique.forEach(function (name, index) {
        length += name.length;
        if (limit_index == -1 && length > limit - (index == last_index ? 0 : 5)) limit_index = index;
        length += 2;
      });

      if (limit_index != -1) {
        unique = unique.splice(0, Math.max(limit_index, 1));
        unique.push('...');
      }
    }

    return unique.join(', ');
  };

  this.decodeHtml = function (html) {
    var text = document.createElement("textarea");
    text.innerHTML = html;
    return text.value;
  };

  this.vcdn_api_search = function (api, data, callback, error) {
    if (callback) callback(data);
    return;
  };

  this.kp_api_search = function (api, callback, error) {
    KP.clear();
    KP.getFromCache(api, function (json, cached) {
      var items = [];
      if (json.items && json.items.length) items = json.items;else if (json.films && json.films.length) items = json.films;
      if (!cached && items.length) KP.setCache(api, json);
      if (callback) callback(items);
    }, function (a, c) {
      if (error) error(network.errorDecode(a, c));
    });
  };

  this.find = function () {
    var _this4 = this;

    var query = object.search || object.movie.title;
    var search_date = object.search_date || !object.clarification && (object.movie.release_date || object.movie.first_air_date || object.movie.last_air_date) || '0000';
    var search_year = parseInt((search_date + '').slice(0, 4));
    var orig_titles = [];

    if (object.movie.alternative_titles && object.movie.alternative_titles.results) {
      orig_titles = object.movie.alternative_titles.results.map(function (t) {
        return t.title;
      });
    }

    if (object.movie.original_title) orig_titles.push(object.movie.original_title);
    if (object.movie.original_name) orig_titles.push(object.movie.original_name);

    var postprocess = function postprocess(items, success, error) {
      if (items && items.length && items.forEach) {
        var is_sure = false;
        var is_imdb = false;
        items.forEach(function (c) {
          if (c.start_date === '1969-12-31') c.start_date = '';
          if (c.year === '1969-12-31') c.year = '';
          var year = c.start_date || c.year || '0000';
          c.tmp_year = parseInt((year + '').slice(0, 4));
        });

        if (!object.clarification && (object.movie.imdb_id || +object.movie.kinopoisk_id)) {
          var imdb_id = object.movie.imdb_id;
          var kp_id = +object.movie.kinopoisk_id;
          var tmp = items.filter(function (c) {
            return imdb_id && (c.imdb_id || c.imdbId) == imdb_id || kp_id && (c.kp_id || c.kinopoisk_id || c.kinopoiskId || c.filmId) == kp_id;
          });

          if (tmp.length) {
            items = tmp;
            is_sure = true;
            is_imdb = true;
          }
        }

        var cards = items;

        if (cards.length) {
          if (orig_titles.length) {
            var _tmp = cards.filter(function (c) {
              return _this4.containsAnyTitle([c.orig_title || c.nameOriginal, c.en_title || c.nameEn, c.title || c.ru_title || c.nameRu], orig_titles);
            });

            if (_tmp.length) {
              cards = _tmp;
              is_sure = true;
            }
          }

          if (query) {
            var _tmp2 = cards.filter(function (c) {
              return _this4.containsAnyTitle([c.title || c.ru_title || c.nameRu, c.en_title || c.nameEn, c.orig_title || c.nameOriginal], [query]);
            });

            if (_tmp2.length) {
              cards = _tmp2;
              is_sure = true;
            }
          }

          if (cards.length > 1 && search_year) {
            var _tmp3 = cards.filter(function (c) {
              return c.tmp_year == search_year;
            });

            if (!_tmp3.length) _tmp3 = cards.filter(function (c) {
              return c.tmp_year && c.tmp_year > search_year - 2 && c.tmp_year < search_year + 2;
            });
            if (_tmp3.length) cards = _tmp3;
          }
        }

        if (cards.length == 1 && is_sure && !is_imdb) {
          if (search_year && cards[0].tmp_year) {
            is_sure = cards[0].tmp_year > search_year - 2 && cards[0].tmp_year < search_year + 2;
          }

          if (is_sure) {
            is_sure = false;

            if (orig_titles.length) {
              is_sure |= _this4.equalAnyTitle([cards[0].orig_title || cards[0].nameOriginal, cards[0].en_title || cards[0].nameEn, cards[0].title || cards[0].ru_title || cards[0].nameRu], orig_titles);
            }

            if (query) {
              is_sure |= _this4.equalAnyTitle([cards[0].title || cards[0].ru_title || cards[0].nameRu, cards[0].en_title || cards[0].nameEn, cards[0].orig_title || cards[0].nameOriginal], [query]);
            }
          }
        }

        if (cards.length == 1 && is_sure) success(cards);else error(items);
      } else error([]);
    };

    var display = function display(items) {
      postprocess(items, function (cards) {
        _this4.extendChoice();

        sources[balanser].search(object, cards[0].kp_id || cards[0].kinopoisk_id || cards[0].kinopoiskId || cards[0].filmId || cards[0].imdb_id, cards);
      }, function (items) {
        if (items.length) {
          items.forEach(function (c) {
            if (c.episodes) {
              var season_count = 1;
              c.episodes.forEach(function (episode) {
                if (episode.season_num > season_count) {
                  season_count = episode.season_num;
                }
              });
              c.seasons_count = season_count;
              c.episodes_count = c.episodes.length;
            }
          });

          _this4.similars(items);

          _this4.loading(false);
        } else _this4.emptyForQuery(query);
      });
    };

    var vcdn_search_by_title = function vcdn_search_by_title(callback, error) {
      var params = Lampa.Utils.addUrlComponent('', Utils.vcdnToken());
      params = Lampa.Utils.addUrlComponent(params, 'query=' + encodeURIComponent(query));
      params = Lampa.Utils.addUrlComponent(params, 'field=title');

      _this4.vcdn_api_search('movies' + params, [], function (data) {
        _this4.vcdn_api_search('animes' + params, data, function (data) {
          _this4.vcdn_api_search('tv-series' + params, data, function (data) {
            _this4.vcdn_api_search('anime-tv-series' + params, data, function (data) {
              _this4.vcdn_api_search('show-tv-series' + params, data, callback, error);
            }, error);
          }, error);
        }, error);
      }, error);
    };

    var vcdn_search_by_id = function vcdn_search_by_id(callback, error) {
      if (!object.clarification && (object.movie.imdb_id || +object.movie.kinopoisk_id)) {
        var params = Lampa.Utils.addUrlComponent('', Utils.vcdnToken());
        var imdb_params = object.movie.imdb_id ? Lampa.Utils.addUrlComponent(params, 'imdb_id=' + encodeURIComponent(object.movie.imdb_id)) : '';
        var kp_params = +object.movie.kinopoisk_id ? Lampa.Utils.addUrlComponent(params, 'kinopoisk_id=' + encodeURIComponent(+object.movie.kinopoisk_id)) : '';

        _this4.vcdn_api_search('short' + (imdb_params || kp_params), [], function (data) {
          if (data && data.length) callback(data);else if (imdb_params && kp_params) {
            _this4.vcdn_api_search('short' + kp_params, [], callback, error);
          } else callback([]);
        }, error);
      } else callback([]);
    };

    var vcdn_search = function vcdn_search(fallback) {
      var error = function error() {
        if (fallback) fallback();else display([]);
      };

      vcdn_search_by_id(function (data) {
        if (data && data.length && data.forEach) display(data);else vcdn_search_by_title(function (data) {
          if (data && data.length && data.forEach) display(data);else error();
        }, error);
      }, error);
    };

    var kp_search_by_title = function kp_search_by_title(callback, error) {
      var url = 'api/v2.1/films/search-by-keyword?keyword=' + encodeURIComponent(_this4.kpCleanTitle(query));

      _this4.kp_api_search(url, callback, error);
    };

    var kp_search_by_id = function kp_search_by_id(callback, error) {
      if (!object.clarification && object.movie.imdb_id) {
        var url = 'api/v2.2/films?imdbId=' + encodeURIComponent(object.movie.imdb_id);

        _this4.kp_api_search(url, callback, error);
      } else callback([]);
    };

    var kp_search = function kp_search(fallback) {
      var error = function error() {
        if (fallback) fallback();else display([]);
      };

      kp_search_by_id(function (data) {
        if (data && data.length && data.forEach) display(data);else kp_search_by_title(function (data) {
          if (data && data.length && data.forEach) display(data);else error();
        }, error);
      }, error);
    };

    var vcdn_search_imdb = function vcdn_search_imdb() {
      var error = function error() {
        if (imdb_sources.indexOf(balanser) >= 0) {
          var error1 = function error1() {
            _this4.extendChoice();

            sources[balanser].search(object, object.movie.imdb_id);
          };

          if (search_sources.indexOf(balanser) >= 0) error1();else {
            kp_search_by_title(function (data) {
              postprocess(data, function (cards) {
                _this4.extendChoice();

                sources[balanser].search(object, cards[0].kp_id || cards[0].kinopoisk_id || cards[0].kinopoiskId || cards[0].filmId || cards[0].imdb_id, cards);
              }, function (items) {
                error1();
              });
            }, error1);
          }
        } else if (search_sources.indexOf(balanser) >= 0) {
          _this4.extendChoice();

          sources[balanser].search(object);
        } else {
          var error2 = function error2() {
            display([]);
          };

          kp_search_by_title(function (data) {
            if (data && data.length && data.forEach) display(data);else error2();
          }, error2);
        }
      };

      vcdn_search_by_id(function (data) {
        if (data && data.length && data.forEach) display(data);else error();
      }, error);
    };

    var kp_search_imdb = function kp_search_imdb() {
      kp_search_by_id(function (data) {
        if (data && data.length && data.forEach) display(data);else vcdn_search_imdb();
      }, vcdn_search_imdb);
    };

    var letgo = function letgo() {
      if (!object.clarification && +object.movie.kinopoisk_id && kp_sources.indexOf(balanser) >= 0) {
        _this4.extendChoice();

        sources[balanser].search(object, +object.movie.kinopoisk_id);
      } else if (!object.clarification && object.movie.imdb_id && kp_sources.indexOf(balanser) >= 0) {
        kp_search_imdb();
      } else if (search_sources.indexOf(balanser) >= 0) {
        _this4.extendChoice();

        sources[balanser].search(object);
      } else {
        if (balanser == 'lumex' || balanser == 'lumex2') {
          var fallback = function fallback() {
            if (!object.clarification && (+object.movie.kinopoisk_id || object.movie.imdb_id)) {
              _this4.extendChoice();

              sources[balanser].search(object, +object.movie.kinopoisk_id || object.movie.imdb_id);
            } else if (Lampa.Storage.field('online_mod_skip_kp_search') !== true) kp_search();else display([]);
          };

          vcdn_search(fallback);
        } else kp_search(vcdn_search);
      }
    };

    if (!object.movie.imdb_id && (object.movie.source == 'tmdb' || object.movie.source == 'cub') && (imdb_sources.indexOf(balanser) >= 0 || kp_sources.indexOf(balanser) >= 0)) {
      var tmdburl = (object.movie.name ? 'tv' : 'movie') + '/' + object.movie.id + '/external_ids?api_key=4ef0d7355d9ffb5151e987764708ce96&language=ru';
      var baseurl = typeof Lampa.TMDB !== 'undefined' ? Lampa.TMDB.api(tmdburl) : 'http://api.themoviedb.org/3/' + tmdburl;
      network.clear();
      network.timeout(1000 * 15);
      network.silent(baseurl, function (ttid) {
        object.movie.imdb_id = ttid.imdb_id;
        letgo();
      }, function (a, c) {
        letgo();
      });
    } else {
      letgo();
    }
  };

  this.parsePlaylist = function (str) {
    var pl = [];

    try {
      if (startsWith(str, '[')) {
        str.substring(1).split(/, *\[/).forEach(function (item) {
          item = item.trim();
          if (endsWith(item, ',')) item = item.substring(0, item.length - 1).trim();
          var label_end = item.indexOf(']');

          if (label_end >= 0) {
            var label = item.substring(0, label_end).trim();

            if (item.charAt(label_end + 1) === '{') {
              item.substring(label_end + 2).split(/; *\{/).forEach(function (voice_item) {
                voice_item = voice_item.trim();
                if (endsWith(voice_item, ';')) voice_item = voice_item.substring(0, voice_item.length - 1).trim();
                var voice_end = voice_item.indexOf('}');

                if (voice_end >= 0) {
                  var voice = voice_item.substring(0, voice_end).trim();
                  pl.push({
                    label: label,
                    voice: voice,
                    links: voice_item.substring(voice_end + 1).split(' or ').map(function (link) {
                      return link.trim();
                    }).filter(function (link) {
                      return link;
                    })
                  });
                }
              });
            } else {
              pl.push({
                label: label,
                links: item.substring(label_end + 1).split(' or ').map(function (link) {
                  return link.trim();
                }).filter(function (link) {
                  return link;
                })
              });
            }
          }
        });
        pl = pl.filter(function (item) {
          return item.links.length;
        });
      }
    } catch (e) {}

    return pl;
  };

  this.parseM3U = function (str) {
    var pl = [];

    try {
      var xstream = false;
      var bandwidth = 0;
      var width = 0;
      var height = 0;
      var codecs = '';
      str.split('\n').forEach(function (line) {
        line = line.trim();

        if (startsWith(line, '#')) {
          if (startsWith(line, '#EXT-X-STREAM-INF')) {
            xstream = true;
            var BANDWIDTH = line.match(/\bBANDWIDTH=(\d+)\b/);

            if (BANDWIDTH) {
              bandwidth = BANDWIDTH[1];
            }

            var RESOLUTION = line.match(/\bRESOLUTION=(\d+)x(\d+)\b/);

            if (RESOLUTION) {
              width = parseInt(RESOLUTION[1]);
              height = parseInt(RESOLUTION[2]);
            }

            var CODECS = line.match(/\bCODECS="([^"]+)"/);

            if (CODECS) {
              codecs = CODECS[1];
            }
          }
        } else if (line.length) {
          pl.push({
            xstream: xstream,
            bandwidth: bandwidth,
            width: width,
            height: height,
            codecs: codecs,
            link: line
          });
          xstream = false;
          bandwidth = 0;
          width = 0;
          height = 0;
          codecs = '';
        }
      });
    } catch (e) {}

    return pl;
  };

  this.formatEpisodeTitle = function (s_num, e_num, name) {
    var title = '';
    var full = Lampa.Storage.field('online_mod_full_episode_title') === true;

    if (s_num != null && s_num !== '') {
      title = (full ? Lampa.Lang.translate('torrent_serial_season') + ' ' : 'S') + s_num + ' / ';
    }

    if (name == null || name === '') name = Lampa.Lang.translate('torrent_serial_episode') + ' ' + e_num;else if (e_num != null && e_num !== '') name = Lampa.Lang.translate('torrent_serial_episode') + ' ' + e_num + ' - ' + name;
    title += name;
    return title;
  };

  this.proxyUrlCall = function (proxy_url, method, url, timeout, post_data, call_success, call_fail, withCredentials) {
    proxy_url = this.proxy('iframe') + proxy_url;

    var process = function process() {
      if (proxyWindow[proxy_url]) {
        timeout = timeout || 60 * 1000;
        var message_id;

        try {
          message_id = crypto.getRandomValues(new Uint8Array(16)).toString();
        } catch (e) {}

        if (!message_id) message_id = Math.random().toString();
        proxyCalls[message_id] = {
          success: call_success,
          fail: call_fail
        };
        proxyWindow[proxy_url].postMessage({
          message: 'proxyMessage',
          message_id: message_id,
          method: method,
          url: url,
          timeout: timeout,
          post_data: post_data,
          withCredentials: withCredentials
        }, '*');
        setTimeout(function () {
          var call = proxyCalls[message_id];

          if (call) {
            delete proxyCalls[message_id];
            if (call.fail) call.fail({
              status: 0,
              statusText: 'timeout',
              responseText: ''
            }, 'timeout');
          }
        }, timeout + 1000);
      } else {
        if (call_fail) call_fail({
          status: 0,
          statusText: 'abort',
          responseText: ''
        }, 'abort');
      }
    };

    if (!proxyInitialized[proxy_url]) {
      proxyInitialized[proxy_url] = true;
      var proxyOrigin = proxy_url.replace(/(https?:\/\/[^\/]+)\/.*/, '$1');
      var proxyIframe = document.createElement('iframe');
      proxyIframe.setAttribute('src', proxy_url);
      proxyIframe.setAttribute('width', '0');
      proxyIframe.setAttribute('height', '0');
      proxyIframe.setAttribute('tabindex', '-1');
      proxyIframe.setAttribute('title', 'empty');
      proxyIframe.setAttribute('style', 'display:none');
      proxyIframe.addEventListener('load', function () {
        proxyWindow[proxy_url] = proxyIframe.contentWindow;
        window.addEventListener('message', function (event) {
          var data = event.data;

          if (event.origin === proxyOrigin && data && data.message === 'proxyResponse' && data.message_id) {
            var call = proxyCalls[data.message_id];

            if (call) {
              delete proxyCalls[data.message_id];

              if (data.status === 200) {
                if (call.success) call.success(data.responseText);
              } else {
                if (call.fail) call.fail({
                  status: data.status,
                  statusText: data.statusText,
                  responseText: data.responseText
                });
              }
            }
          }
        });
        if (process) process();
        process = null;
      });
      document.body.appendChild(proxyIframe);
      setTimeout(function () {
        if (process) process();
        process = null;
      }, 10000);
    } else {
      process();
    }
  };

  this.proxyCall = function (method, url, timeout, post_data, call_success, call_fail, withCredentials) {
    var proxy_url = (window.location.protocol === 'https:' ? 'https://' : 'http://') + 'nb557.surge.sh/proxy.html';
    this.proxyUrlCall(proxy_url, method, url, timeout, post_data, call_success, call_fail, withCredentials);
  };

  this.proxyCall2 = function (method, url, timeout, post_data, call_success, call_fail, withCredentials) {
    var proxy_url = (window.location.protocol === 'https:' ? 'https://' : 'http://') + 'lampa.stream/proxy.html';
    this.proxyUrlCall(proxy_url, method, url, timeout, post_data, call_success, call_fail, withCredentials);
  };

  this.proxyCall3 = function (method, url, timeout, post_data, call_success, call_fail, withCredentials) {
    var proxy_url = 'https://nb557.github.io/plugins/proxy.html';
    this.proxyUrlCall(proxy_url, method, url, timeout, post_data, call_success, call_fail, withCredentials);
  };

  this.extendChoice = function () {
    var data = Lampa.Storage.cache('online_mod_choice_' + balanser, 500, {});
    var save = data[selected_id || object.movie.id] || {};
    extended = true;
    sources[balanser].extendChoice(save);
  };

  this.saveChoice = function (choice) {
    var data = Lampa.Storage.cache('online_mod_choice_' + balanser, 500, {});
    data[selected_id || object.movie.id] = choice;
    Lampa.Storage.set('online_mod_choice_' + balanser, data);
  };
  /**
   * Есть похожие карточки
   * @param {Object} json
   */


  this.similars = function (json, search_more, more_params) {
    var _this5 = this;

    json.forEach(function (elem) {
      var title = elem.title || elem.ru_title || elem.nameRu || elem.en_title || elem.nameEn || elem.orig_title || elem.nameOriginal;
      var orig_title = elem.orig_title || elem.nameOriginal || elem.en_title || elem.nameEn;
      var year = elem.start_date || elem.year || '';
      var info = [];
      if (orig_title && orig_title != elem.title) info.push(orig_title);
      if (elem.seasons_count) info.push(Lampa.Lang.translate('online_mod_seasons_count') + ': ' + elem.seasons_count);
      if (elem.episodes_count) info.push(Lampa.Lang.translate('online_mod_episodes_count') + ': ' + elem.episodes_count);
      elem.title = title;
      elem.quality = year ? (year + '').slice(0, 4) : '----';
      elem.info = info.length ? ' / ' + info.join(' / ') : '';
      var item = Lampa.Template.get('online_mod_folder', elem);
      item.on('hover:enter', function () {
        _this5.activity.loader(true);

        _this5.reset();

        object.search = elem.title;
        object.search_date = year;
        selected_id = elem.id;

        _this5.extendChoice();

        sources[balanser].search(object, elem.kp_id || elem.kinopoisk_id || elem.kinopoiskId || elem.filmId || elem.imdb_id, [elem]);
      });

      _this5.append(item);
    });

    if (search_more) {
      var elem = {
        title: Lampa.Lang.translate('online_mod_show_more'),
        quality: '...',
        info: ''
      };
      var item = Lampa.Template.get('online_mod_folder', elem);
      item.on('hover:enter', function () {
        _this5.activity.loader(true);

        _this5.reset();

        search_more(more_params);
      });
      this.append(item);
    }
  };
  /**
   * Очистить список файлов
   */


  this.reset = function () {
    contextmenu_all = [];
    last = filter.render().find('.selector').eq(0)[0];
    scroll.render().find('.empty').remove();
    scroll.clear();
    scroll.reset();
  };

  this.inActivity = function () {
    var body = $('body');
    return !(body.hasClass('settings--open') || body.hasClass('menu--open') || body.hasClass('keyboard-input--visible') || body.hasClass('selectbox--open') || body.hasClass('search--open') || body.hasClass('ambience--enable') || $('div.modal').length);
  };
  /**
   * Загрузка
   */


  this.loading = function (status) {
    if (status) this.activity.loader(true);else {
      this.activity.loader(false);
      if (Lampa.Activity.active().activity === this.activity && this.inActivity()) this.activity.toggle();
    }
  };

  this.getDefaultQuality = function (qualityMap, defValue) {
    {
      var needHackHlsLink = function needHackHlsLink(link) {
        return link && endsWith(link, '.m3u8') && link.lastIndexOf('?') <= link.lastIndexOf('/');
      };

      if (qualityMap) {
        for (var ID in qualityMap) {
          if (needHackHlsLink(qualityMap[ID])) {
            qualityMap[ID] += '?';
          }
        }
      }

      if (needHackHlsLink(defValue)) {
        defValue += '?';
      }
    }

    if (qualityMap) {
      var preferably = forcedQuality;

      if (!preferably) {
        preferably = Lampa.Storage.get('video_quality_default', '1080') + 'p';
        if (preferably === '1080p') preferably = '1080p Ultra';
      }

      var items = ['2160p', '2160', '4K', '1440p', '1440', '2K', '1080p Ultra', '1080p', '1080', '720p', '720', '480p', '480', '360p', '360', '240p', '240'];
      var idx = items.indexOf(preferably);

      if (idx !== -1) {
        for (var i = idx; i < items.length; i++) {
          var item = items[i];
          if (qualityMap[item]) return qualityMap[item];
        }

        for (var _i = idx - 1; _i >= 0; _i--) {
          var _item = items[_i];
          if (qualityMap[_item]) return qualityMap[_item];
        }
      }
    }

    return defValue;
  };

  this.renameQualityMap = function (qualityMap) {
    if (!qualityMap) return qualityMap;
    var renamed = {};

    for (var label in qualityMap) {
      renamed["\u200B" + label] = qualityMap[label];
    }

    return renamed;
  };
  /**
   * Построить фильтр
   */


  this.filter = function (filter_items, choice) {
    var select = [];

    var add = function add(type, title) {
      var need = Lampa.Storage.get('online_mod_filter', '{}');
      var items = filter_items[type];
      var subitems = [];
      var value = need[type];
      items.forEach(function (name, i) {
        subitems.push({
          title: name,
          selected: value == i,
          index: i
        });
      });
      select.push({
        title: title,
        subtitle: items[value],
        items: subitems,
        stype: type
      });
    };

    choice.source = filter_sources.indexOf(balanser);
    Lampa.Storage.set('online_mod_filter', choice);
    select.push({
      title: Lampa.Lang.translate('torrent_parser_reset'),
      reset: true
    });
    filter_items.source = obj_filter_sources.map(function (s) {
      return s.title;
    });
    add('source', Lampa.Lang.translate('online_mod_balanser'));
    if (filter_items.voice && filter_items.voice.length) add('voice', Lampa.Lang.translate('torrent_parser_voice'));
    if (filter_items.season && filter_items.season.length) add('season', Lampa.Lang.translate('torrent_serial_season'));
    if (filter_items.server && filter_items.server.length) add('server', Lampa.Lang.translate('online_mod_server'));
    this.updateQualityFilter();
    select.push(qualityFilter);
    filter.set('filter', select);
    filter.set('sort', obj_filter_sources.map(function (e) {
      return {
        source: e.name,
        title: e.title,
        selected: e.name === balanser
      };
    }));
    this.selected(filter_items);
  };
  /**
   * Закрыть фильтр
   */


  this.closeFilter = function () {
    if ($('body').hasClass('selectbox--open')) Lampa.Select.close();
  };
  /**
   * Показать что выбрано в фильтре
   */


  this.selected = function (filter_items) {
    var need = Lampa.Storage.get('online_mod_filter', '{}'),
        select = [];

    for (var i in need) {
      if (i !== 'source' && filter_translate[i] && filter_items[i] && filter_items[i].length > 1) {
        select.push(filter_translate[i] + ': ' + filter_items[i][need[i]]);
      }
    }

    var source_obj = obj_filter_sources.filter(function (e) {
      return e.name === balanser;
    })[0];
    filter.chosen('filter', select);
    filter.chosen('sort', [source_obj ? source_obj.title : balanser]);
  };
  /**
   * Добавить файл
   */


  this.append = function (item) {
    item.on('hover:focus', function (e) {
      last = e.target;
      scroll.update($(e.target), true);
    });
    scroll.append(item);
  };
  /**
   * Меню
   */


  this.contextmenu = function (params) {
    contextmenu_all.push(params);
    params.item.on('hover:long', function () {
      function selectQuality(title, callback) {
        return function (extra) {
          if (extra.quality) {
            var qual = [];

            for (var i in extra.quality) {
              qual.push({
                title: i,
                file: extra.quality[i]
              });
            }

            Lampa.Select.show({
              title: title,
              items: qual,
              onBack: function onBack() {
                Lampa.Controller.toggle(enabled);
              },
              onSelect: callback
            });
          } else callback(null, extra);
        };
      }

      var enabled = Lampa.Controller.enabled().name;
      var menu = [{
        title: Lampa.Lang.translate('torrent_parser_label_title'),
        mark: true
      }, {
        title: Lampa.Lang.translate('torrent_parser_label_cancel_title'),
        clearmark: true
      }, {
        title: Lampa.Lang.translate('online_mod_clearmark_all'),
        clearmark_all: true
      }, {
        title: Lampa.Lang.translate('time_reset'),
        timeclear: true
      }, {
        title: Lampa.Lang.translate('online_mod_timeclear_all'),
        timeclear_all: true
      }];

      if (Lampa.Platform.is('webos')) {
        menu.push({
          title: Lampa.Lang.translate('player_lauch') + ' - Webos',
          player: 'webos'
        });
      }

      if (Lampa.Platform.is('android')) {
        menu.push({
          title: Lampa.Lang.translate('player_lauch') + ' - Android',
          player: 'android'
        });
      }

      menu.push({
        title: Lampa.Lang.translate('player_lauch') + ' - Lampa',
        player: 'lampa'
      });

      if (params.file) {
        menu.push({
          title: Lampa.Lang.translate('copy_link'),
          copylink: true
        });
      }

      if (Lampa.Account.working() && params.element && typeof params.element.season !== 'undefined' && Lampa.Account.subscribeToTranslation) {
        menu.push({
          title: Lampa.Lang.translate('online_mod_voice_subscribe'),
          subscribe: true
        });
      }

      Lampa.Select.show({
        title: Lampa.Lang.translate('title_action'),
        items: menu,
        onBack: function onBack() {
          Lampa.Controller.toggle(enabled);
        },
        onSelect: function onSelect(a) {
          if (a.clearmark) {
            Lampa.Arrays.remove(params.viewed, params.hash_file);
            Lampa.Storage.set('online_view', params.viewed);
            params.item.find('.torrent-item__viewed').remove();
          }

          if (a.clearmark_all) {
            contextmenu_all.forEach(function (params) {
              Lampa.Arrays.remove(params.viewed, params.hash_file);
              Lampa.Storage.set('online_view', params.viewed);
              params.item.find('.torrent-item__viewed').remove();
            });
          }

          if (a.mark) {
            if (params.viewed.indexOf(params.hash_file) == -1) {
              params.viewed.push(params.hash_file);
              params.item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_star', {}, true) + '</div>');
              Lampa.Storage.set('online_view', params.viewed);
            }
          }

          if (a.timeclear) {
            params.view.percent = 0;
            params.view.time = 0;
            params.view.duration = 0;
            Lampa.Timeline.update(params.view);
          }

          if (a.timeclear_all) {
            contextmenu_all.forEach(function (params) {
              params.view.percent = 0;
              params.view.time = 0;
              params.view.duration = 0;
              Lampa.Timeline.update(params.view);
            });
          }

          Lampa.Controller.toggle(enabled);

          if (a.player) {
            Lampa.Player.runas(a.player);
            params.item.trigger('hover:enter', {
              runas: a.player
            });
          }

          if (a.copylink) {
            params.file(selectQuality('Ссылки', function (b, extra) {
              Lampa.Utils.copyTextToClipboard(b && b.file || extra && extra.file, function () {
                Lampa.Noty.show(Lampa.Lang.translate('copy_secuses'));
              }, function () {
                Lampa.Noty.show(Lampa.Lang.translate('copy_error'));
              });
            }));
          }

          if (a.subscribe) {
            Lampa.Account.subscribeToTranslation({
              card: object.movie,
              season: params.element.season,
              episode: params.element.translate_episode_end,
              voice: params.element.translate_voice
            }, function () {
              Lampa.Noty.show(Lampa.Lang.translate('online_mod_voice_success'));
            }, function () {
              Lampa.Noty.show(Lampa.Lang.translate('online_mod_voice_error'));
            });
          }
        }
      });
    }).on('hover:focus', function () {
      if (Lampa.Helper) Lampa.Helper.show('online_file', Lampa.Lang.translate('online_mod_file_helper'), params.item);
    });
  };
  /**
   * Показать пустой результат
   */


  this.empty = function (msg) {
    var empty = Lampa.Template.get('list_empty');
    if (msg) empty.find('.empty__descr').text(msg);
    var change = $('<div class="selector online-mod-change-source"></div>').text(Lampa.Lang.translate('online_mod_change_source'));
    change.on('hover:enter', function () { filter.show(Lampa.Lang.translate('online_mod_balanser'), 'sort'); });
    empty.append(change);
    scroll.render().find('.empty').remove();
    scroll.append(empty);
    this.loading(false);
  };
  /**
   * Показать пустой результат по ключевому слову
   */


  this.emptyForQuery = function (query) {
    this.empty(Lampa.Lang.translate('online_mod_query_start') + ' (' + query + ') ' + Lampa.Lang.translate('online_mod_query_end'));
  };

  this.getLastEpisode = function (items) {
    var last_episode = 0;
    items.forEach(function (e) {
      if (typeof e.episode !== 'undefined') last_episode = Math.max(last_episode, parseInt(e.episode));
    });
    return last_episode;
  };
  /**
   * Начать навигацию по файлам
   */


  this.start = function (first_select) {
    if (Lampa.Activity.active().activity !== this.activity) return; //обязательно, иначе наблюдается баг, активность создается но не стартует, в то время как компонент загружается и стартует самого себя.

    if (first_select) {
      var last_views = scroll.render().find('.selector.online').find('.torrent-item__viewed').parent().last();
      if (object.movie.number_of_seasons && last_views.length) last = last_views.eq(0)[0];else last = scroll.render().find('.selector').eq(0)[0];
    }

    Lampa.Background.immediately(Lampa.Utils.cardImgBackground(object.movie));
    Lampa.Controller.add('content', {
      toggle: function toggle() {
        Lampa.Controller.collectionSet(scroll.render(), files.render());
        Lampa.Controller.collectionFocus(last || false, scroll.render());
      },
      up: function up() {
        if (Navigator.canmove('up')) {
          Navigator.move('up');
        } else Lampa.Controller.toggle('head');
      },
      down: function down() {
        Navigator.move('down');
      },
      right: function right() {
        if (Navigator.canmove('right')) Navigator.move('right');else filter.show(Lampa.Lang.translate('title_filter'), 'filter');
      },
      left: function left() {
        if (Navigator.canmove('left')) Navigator.move('left');else Lampa.Controller.toggle('menu');
      },
      back: this.back
    });
    if (this.inActivity()) Lampa.Controller.toggle('content');
  };

  this.render = function () {
    return files.render();
  };

  this.back = function () {
    Lampa.Activity.backward();
  };

  this.pause = function () {};

  this.stop = function () {};

  this.destroy = function () {
    network.clear();
    files.destroy();
    scroll.destroy();
    network = null;
    all_sources.forEach(function (s) {
      s.source.destroy();
    });
  };
}
