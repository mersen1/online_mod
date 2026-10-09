function rezka2(component, _object) {
  var network = Utils.createRequest(component);
  this.cancel = function () { network.clear(); };
  var extract = {};
  var object = _object;
  var select_title = '';
  var prefer_http = Lampa.Storage.field('online_mod_prefer_http') === true;
  var prefer_mp4 = Lampa.Storage.field('online_mod_prefer_mp4') === true;
  var proxy_mirror = Lampa.Storage.field('online_mod_proxy_rezka2_mirror') === true;
  var prox = Utils.rezka2Proxy(component.proxy('rezka2'));
  var proxies = [prox];
  // Retry only the built-in proxies; keep a custom proxy and its cookies scoped.
  if (!(Lampa.Storage.field('online_mod_proxy_other') === true && Utils.normalizeHost(Lampa.Storage.get('online_mod_proxy_other_url', ''))) && /^https:\/\/cors\.(nb557|fx666)\.workers\.dev\/(?:ip[^/]*\/)?$/.test(prox)) {
    proxies.push(prox.replace(/cors\.(nb557|fx666)\./, function (match, name) { return 'cors.' + (name === 'nb557' ? 'fx666' : 'nb557') + '.'; }));
  }
  var host = prox && !proxy_mirror ? Utils.rezka2Host() : Utils.rezka2Mirror();
  var ref = host + '/';
  var logged_in = !(prox || Lampa.Platform.is('android'));
  var user_agent = Utils.baseUserAgent();
  var headers = Lampa.Platform.is('android') ? {
    'Origin': host,
    'Referer': ref,
    'User-Agent': user_agent
  } : {};
  var prox_enc = '';

  if (prox) {
    prox_enc += 'param/Origin=' + encodeURIComponent(host) + '/';
    prox_enc += 'param/Referer=' + encodeURIComponent(ref) + '/';
    prox_enc += 'param/User-Agent=' + encodeURIComponent(user_agent) + '/';
  }

  var anonymous_session = 'PHPSESSID=' + Utils.randomId(26);

  var embed = ref;
  var filter_items = {};
  var choice = {
    season: 0,
    voice: 0,
    voice_name: '',
    season_id: ''
  };
  var error_message = '';

  function checkErrorForm(str) {
    error_message = '';
    var login_form = str.match(/<form\b[^>]*\bid\s*=\s*["']check-form["']/i);

    if (login_form) {
      Lampa.Storage.set('online_mod_rezka2_status', 'false');
      error_message = Lampa.Lang.translate('online_mod_authorization_required') + ' HDrezka';
      return;
    }

    var error_form = str.match(/(<div class="error-code">[^<]*<div>[^<]*<\/div>[^<]*<\/div>)\s*(<div class="error-title">[^<]*<\/div>)/);

    if (error_form) {
      error_message = ($(error_form[1]).text().trim() || '') + ':\n' + ($(error_form[2]).text().trim() || '');
      return;
    }

    var verify_form = str.match(/<span>MIRROR<\/span>.*<button type="submit" onclick="\$\.cookie(\([^)]*\))/);

    if (verify_form) {
      error_message = Lampa.Lang.translate('online_mod_unsupported_mirror') + ' HDrezka';
      return;
    }

    var anubis_form = str.match(/<script id="anubis_challenge"/);

    if (anubis_form) {
      error_message = Lampa.Lang.translate('online_mod_unsupported_mirror') + ' HDrezka';
      return;
    }

    if (startsWith(str, 'Fatal error:')) {
      error_message = str;
      return;
    }
  }

  function request(url, success, error, data, options) {
    // A source can already exist when the user logs in from settings.
    var saved_cookie = Utils.rezka2Cookie(host);
    var cookie = saved_cookie;
    if (cookie.indexOf('PHPSESSID=') === -1) cookie = anonymous_session + (cookie ? '; ' + cookie : '');
    var encoded = prox_enc + 'param/Cookie=' + encodeURIComponent(cookie) + '/';
    if (Lampa.Platform.is('android')) headers.Cookie = cookie;
    if (saved_cookie) prox = Utils.rezka2Proxy(prox);
    var routes = [prox];
    // Authenticated sessions may be tied to the proxy's egress IP.
    if (!saved_cookie) routes = routes.concat(proxies.filter(function (value) { return value !== prox; }));
    function attempt(index) {
      var route = routes[index];
      network.clear();
      network.timeout(10000);
      network['native'](component.proxyLink(url, route, encoded, 'enc2t'), function (value) {
        prox = route;
        success(value);
      }, function (a, c) {
        checkErrorForm(a && typeof a.responseText === 'string' ? a.responseText.replace(/\n/g, '') : '');
        if (error_message) return error(a, c);
        var retry = a && (a.onlineChallenge || a.status === 0 || a.status === 403 || a.status >= 500 || /^Malformed URL:/i.test(a.responseText || '')) || c === 'timeout';
        if (retry && index + 1 < routes.length) attempt(index + 1);
        else error(a, c);
      }, data, options);
    }
    attempt(0);
  }

  function sourceError(a, c) {
    checkErrorForm(a && typeof a.responseText === 'string' ? a.responseText.replace(/\n/g, '') : '');
    if (error_message) return error_message;
    if (a && (a.onlineChallenge || a.onlineParseError || /^Malformed URL:/i.test(a.responseText || ''))) return network.errorDecode(a, c);
    if (a && (a.status === 0 || a.status === 403 || a.status >= 500) || c === 'timeout') {
      return Lampa.Lang.translate(prox ? 'online_mod_rezka2_proxy_error' : 'online_mod_rezka2_direct_error');
    }
    return network.errorDecode(a, c);
  }
  /**
   * Поиск
   * @param {Object} _object
   */


  this.search = function (_object, kinopoisk_id, data) {
    var _this = this;

    object = _object;
    select_title = object.search || object.movie.title;
    error_message = '';
    if (this.wait_similars && data && data[0] && data[0].is_similars) return getPage(data[0].link);
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
    var url = embed + 'engine/ajax/search.php';
    var more_url = embed + 'search/?do=search&subaction=search';

    var query_more = function query_more(query, page, data, callback) {
      var url = more_url + '&q=' + encodeURIComponent(query) + '&page=' + encodeURIComponent(page);
      request(url, function (str) {
        str = (str || '').replace(/\n/g, '');
        checkErrorForm(str);
        if (error_message) return component.empty(error_message);
        var links = str.match(/<div class="b-content__inline_item-link">\s*<a [^>]*>[^<]*<\/a>\s*<div>[^<]*<\/div>\s*<\/div>/g);
        var have_more = !!str.match(/<a [^>]*>\s*<span class="b-navigation__next\b/);

        if (links && links.length) {
          var items = links.map(function (l) {
            var li = $(l);
            var link = $('a', li);
            var info_div = $('div', li);
            var titl = link.text().trim() || '';
            var info = info_div.text().trim() || '';
            var orig_title = '';
            var year;
            var found = info.match(/^(\d{4})\b/);

            if (found) {
              year = parseInt(found[1]);
            }

            return {
              year: year,
              title: titl,
              orig_title: orig_title,
              link: link.attr('href') || ''
            };
          });
          data = data.concat(items);
        }

        if (callback) callback(data, have_more);
      }, function (a, c) {
        component.empty(sourceError(a, c));
      }, false, {
        dataType: 'text',
        withCredentials: logged_in,
        headers: headers
      });
    };

    var search_more = function search_more(params) {
      var items = params.items || [];
      var query = params.query || '';
      var page = params.page || 1;
      query_more(query, page, items, function (items, have_more) {
        if (items && items.length) {
          _this.wait_similars = true;
          items.forEach(function (c) {
            c.is_similars = true;
          });

          if (have_more) {
            component.similars(items, search_more, {
              items: [],
              query: query,
              page: page + 1
            });
          } else {
            component.similars(items);
          }

          component.loading(false);
        } else if (error_message) component.empty(error_message);else component.emptyForQuery(select_title);
      });
    };

    var display = function display(links, have_more, query) {
      if (links && links.length && links.forEach) {
        var is_sure = false;
        var items = links.map(function (l) {
          var li = $(l);
          var link = $('a', li);
          var enty = $('.enty', link);
          var rating = $('.rating', link);
          var titl = enty.text().trim() || '';
          enty.remove();
          rating.remove();
          var alt_titl = link.text().trim() || '';
          var orig_title = '';
          var year;
          var found = alt_titl.match(/\((.*,\s*)?\b(\d{4})(\s*-\s*[\d.]*)?\)$/);

          if (found) {
            if (found[1]) {
              var found_alt = found[1].match(/^([^а-яА-ЯёЁ]+),/);
              if (found_alt) orig_title = found_alt[1].trim();
            }

            year = parseInt(found[2]);
          }

          return {
            year: year,
            title: titl,
            orig_title: orig_title,
            link: link.attr('href') || ''
          };
        });
        var cards = items;

        if (cards.length) {
          if (orig_titles.length) {
            var tmp = cards.filter(function (c) {
              return component.containsAnyTitle([c.orig_title, c.title], orig_titles);
            });

            if (tmp.length) {
              cards = tmp;
              is_sure = true;
            }
          }

          if (select_title) {
            var _tmp = cards.filter(function (c) {
              return component.containsAnyTitle([c.title, c.orig_title], [select_title]);
            });

            if (_tmp.length) {
              cards = _tmp;
              is_sure = true;
            }
          }

          if (cards.length > 1 && search_year) {
            var _tmp2 = cards.filter(function (c) {
              return c.year == search_year;
            });

            if (!_tmp2.length) _tmp2 = cards.filter(function (c) {
              return c.year && c.year > search_year - 2 && c.year < search_year + 2;
            });
            if (_tmp2.length) cards = _tmp2;
          }
        }

        if (cards.length == 1 && is_sure) {
          if (search_year && cards[0].year) {
            is_sure = cards[0].year > search_year - 2 && cards[0].year < search_year + 2;
          }

          if (is_sure) {
            is_sure = false;

            if (orig_titles.length) {
              is_sure |= component.equalAnyTitle([cards[0].orig_title, cards[0].title], orig_titles);
            }

            if (select_title) {
              is_sure |= component.equalAnyTitle([cards[0].title, cards[0].orig_title], [select_title]);
            }
          }
        }

        // Some public proxies return unrelated live-search results with HTTP 200.
        if (prox && !is_sure) return search_more({ query: query, page: 1 });
        if (cards.length == 1 && is_sure) getPage(cards[0].link);else if (items.length) {
          _this.wait_similars = true;
          items.forEach(function (c) {
            c.is_similars = true;
          });

          if (have_more) {
            component.similars(items, search_more, {
              items: [],
              query: query,
              page: 1
            });
          } else {
            component.similars(items);
          }

          component.loading(false);
        } else component.emptyForQuery(select_title);
      } else if (error_message) component.empty(error_message);else component.emptyForQuery(select_title);
    };

    var query_search = function query_search(query, data, callback) {
      var postdata = 'q=' + encodeURIComponent(query);
      request(url, function (str) {
        str = (str || '').replace(/\n/g, '');
        checkErrorForm(str);
        var links = str.match(/<li><a href=.*?<\/li>/g);
        var have_more = str.indexOf('<a class="b-search__live_all"') !== -1;
        if (links && links.length) data = data.concat(links);
        if (callback) callback(data, have_more, query);
      }, function (a, c) {
        component.empty(sourceError(a, c));
      }, postdata, {
        dataType: 'text',
        withCredentials: logged_in,
        headers: headers
      });
    };

    var query_title_search = function query_title_search() {
      query_search(component.cleanTitle(select_title), [], function (data, have_more, query) {
        if (data && data.length && data.forEach) display(data, have_more, query);else display([]);
      });
    };

    query_title_search();
  };

  this.extendChoice = function (saved) {
    Lampa.Arrays.extend(choice, saved, true);
  };
  /**
   * Сброс фильтра
   */


  this.reset = function () {
    component.reset();
    choice = {
      season: 0,
      voice: 0,
      voice_name: '',
      season_id: ''
    };
    component.loading(true);
    getEpisodes(success);
    component.saveChoice(choice);
  };
  /**
   * Применить фильтр
   * @param {*} type
   * @param {*} a
   * @param {*} b
   */


  this.filter = function (type, a, b) {
    choice[a.stype] = b.index;
    if (a.stype == 'voice') choice.voice_name = filter_items.voice[b.index];
    if (a.stype == 'season') choice.season_id = filter_items.season_id[b.index];
    component.reset();
    component.loading(true);
    getEpisodes(success);
    component.saveChoice(choice);
    setTimeout(component.closeFilter, 10);
  };
  /**
   * Уничтожить
   */


  this.destroy = function () {
    network.clear();
    extract = null;
  };

  function getPage(url) {
    url = component.fixLink(url, ref);
    request(url, function (str) {
      extractData(str);

      if (extract.film_id) {
        getEpisodes(success);
      } else if (error_message) component.empty(error_message);else component.emptyForQuery(select_title);
    }, function (a, c) {
      component.empty(sourceError(a, c));
    }, false, {
      dataType: 'text',
      withCredentials: logged_in,
      headers: headers
    });
  }

  function success() {
    component.loading(false);
    filter();
    append(filtred());
  }
  /**
   * Получить данные о фильме
   * @param {String} str
   */


  function extractData(str) {
    extract.voice = [];
    extract.season = [];
    extract.episode = [];
    extract.voice_data = {};
    extract.is_series = false;
    extract.film_id = '';
    extract.favs = '';
    str = (str || '').replace(/\n/g, '');
    checkErrorForm(str);
    var translation = str.match(/<h2>В переводе<\/h2>:<\/td>\s*(<td>.*?<\/td>)/);
    var cdnSeries = str.match(/\.initCDNSeriesEvents\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,/);
    var cdnMovie = str.match(/\.initCDNMoviesEvents\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,/);
    var devVoiceName;

    if (translation) {
      devVoiceName = $(translation[1]).text().trim();
    }

    if (!devVoiceName) devVoiceName = 'Оригинал';
    var defVoice, defSeason, defEpisode;

    if (cdnSeries) {
      extract.is_series = true;
      extract.film_id = cdnSeries[1];
      defVoice = {
        name: devVoiceName,
        id: cdnSeries[2]
      };
      defSeason = {
        name: 'Сезон ' + cdnSeries[3],
        id: cdnSeries[3]
      };
      defEpisode = {
        name: 'Серия ' + cdnSeries[4],
        season_id: cdnSeries[3],
        episode_id: cdnSeries[4]
      };
    } else if (cdnMovie) {
      extract.film_id = cdnMovie[1];
      defVoice = {
        name: devVoiceName,
        id: cdnMovie[2],
        is_camrip: cdnMovie[3],
        is_ads: cdnMovie[4],
        is_director: cdnMovie[5]
      };
    }

    var voices = str.match(/(<ul id="translators-list".*?<\/ul>)/);

    if (voices) {
      var select = $(voices[1]);
      $('.b-translator__item', select).each(function () {
        var title = ($(this).attr('title') || $(this).text() || '').trim();
        $('img', this).each(function () {
          var lang = ($(this).attr('title') || $(this).attr('alt') || '').trim();
          if (lang && title.indexOf(lang) == -1) title += ' (' + lang + ')';
        });
        extract.voice.push({
          name: title,
          id: $(this).attr('data-translator_id'),
          is_camrip: $(this).attr('data-camrip'),
          is_ads: $(this).attr('data-ads'),
          is_director: $(this).attr('data-director')
        });
      });
    }

    if (!extract.voice.length && defVoice) {
      extract.voice.push(defVoice);
    }

    if (extract.is_series) {
      var seasons = str.match(/(<ul id="simple-seasons-tabs".*?<\/ul>)/);

      if (seasons) {
        var _select = $(seasons[1]);

        $('.b-simple_season__item', _select).each(function () {
          extract.season.push({
            name: $(this).text(),
            id: $(this).attr('data-tab_id')
          });
        });
      }

      if (!extract.season.length && defSeason) {
        extract.season.push(defSeason);
      }

      var episodes = str.match(/(<div id="simple-episodes-tabs".*?<\/div>)/);

      if (episodes) {
        var _select2 = $(episodes[1]);

        $('.b-simple_episode__item', _select2).each(function () {
          extract.episode.push({
            name: $(this).text(),
            season_id: $(this).attr('data-season_id'),
            episode_id: $(this).attr('data-episode_id')
          });
        });
      }

      if (!extract.episode.length && defEpisode) {
        extract.episode.push(defEpisode);
      }
    }

    var favs = str.match(/<input type="hidden" id="ctrl_favs" value="([^"]*)"/);
    if (favs) extract.favs = favs[1];
    var blocked = str.match(/class="b-player__restricted__block_message"/);
    extract.blocked = !!blocked;
  }

  function getEpisodes(call) {
    if (extract.is_series) {
      filterVoice();

      if (extract.voice[choice.voice]) {
        var translator_id = extract.voice[choice.voice].id;
        var data = extract.voice_data[translator_id];

        if (data) {
          extract.season = data.season;
          extract.episode = data.episode;
        } else {
          var url = embed + 'ajax/get_cdn_series/?t=' + Date.now();
          var postdata = 'id=' + encodeURIComponent(extract.film_id);
          postdata += '&translator_id=' + encodeURIComponent(translator_id);
          postdata += '&favs=' + encodeURIComponent(extract.favs);
          postdata += '&action=get_episodes';
          request(url, function (json) {
            extractEpisodes(json, translator_id);
            call();
          }, function (a, c) {
            component.empty(sourceError(a, c));
          }, postdata, {
            withCredentials: logged_in,
            headers: headers
          });
          return;
        }
      }
    }

    call();
  }

  function extractEpisodes(json, translator_id) {
    var data = {
      season: [],
      episode: []
    };

    if (json && json.seasons) {
      var select = $('<ul>' + json.seasons + '</ul>');
      $('.b-simple_season__item', select).each(function () {
        data.season.push({
          name: $(this).text(),
          id: $(this).attr('data-tab_id')
        });
      });
    }

    if (json && json.episodes) {
      var _select3 = $('<div>' + json.episodes + '</div>');

      $('.b-simple_episode__item', _select3).each(function () {
        data.episode.push({
          name: $(this).text(),
          translator_id: translator_id,
          season_id: $(this).attr('data-season_id'),
          episode_id: $(this).attr('data-episode_id')
        });
      });
    }

    extract.voice_data[translator_id] = data;
    extract.season = data.season;
    extract.episode = data.episode;
  }

  function filterVoice() {
    var voice = extract.is_series ? extract.voice.map(function (v) {
      return v.name;
    }) : [];
    if (!voice[choice.voice]) choice.voice = 0;

    if (choice.voice_name) {
      var inx = voice.indexOf(choice.voice_name);
      if (inx == -1) choice.voice = 0;else if (inx !== choice.voice) {
        choice.voice = inx;
      }
    }
  }
  /**
   * Построить фильтр
   */


  function filter() {
    filter_items = {
      season: extract.season.map(function (s) {
        return s.name;
      }),
      season_id: extract.season.map(function (s) {
        return s.id;
      }),
      voice: extract.is_series ? extract.voice.map(function (v) {
        return v.name;
      }) : []
    };
    if (!filter_items.season[choice.season]) choice.season = 0;
    if (!filter_items.voice[choice.voice]) choice.voice = 0;

    if (choice.voice_name) {
      var inx = filter_items.voice.indexOf(choice.voice_name);
      if (inx == -1) choice.voice = 0;else if (inx !== choice.voice) {
        choice.voice = inx;
      }
    }

    if (choice.season_id) {
      var _inx = filter_items.season_id.indexOf(choice.season_id);

      if (_inx == -1) choice.season = 0;else if (_inx !== choice.season) {
        choice.season = _inx;
      }
    }

    component.filter(filter_items, choice);
  }
  /**
   * Получить поток
   * @param {*} element
   */


  function getStream(element, call, error) {
    if (element.stream) return call(element);
    var url = embed + 'ajax/get_cdn_series/?t=' + Date.now();
    var postdata = 'id=' + encodeURIComponent(extract.film_id);

    if (extract.is_series) {
      postdata += '&translator_id=' + encodeURIComponent(element.media.translator_id);
      postdata += '&season=' + encodeURIComponent(element.media.season_id);
      postdata += '&episode=' + encodeURIComponent(element.media.episode_id);
      postdata += '&favs=' + encodeURIComponent(extract.favs);
      postdata += '&action=get_stream';
    } else {
      postdata += '&translator_id=' + encodeURIComponent(element.media.id);
      postdata += '&is_camrip=' + encodeURIComponent(element.media.is_camrip);
      postdata += '&is_ads=' + encodeURIComponent(element.media.is_ads);
      postdata += '&is_director=' + encodeURIComponent(element.media.is_director);
      postdata += '&favs=' + encodeURIComponent(extract.favs);
      postdata += '&action=get_movie';
    }

    request(url, function (json) {
      if (json && json.url) {
        var video = decode(json.url),
            file = '',
            quality = false;
        var items = extractItems(video);

        if (items && items.length) {
          file = items[0].file;
          var premium_content = json.premium_content || false;
          var prev_file = '';
          quality = {};
          items.forEach(function (item) {
            if (item.label !== '1080p Ultra') {
              if (prev_file !== '' && prev_file !== item.file) premium_content = false;
              prev_file = item.file;
            }

            quality[item.label] = item.file;
          });

          if (premium_content) {
            error('Перевод доступен только с HDrezka Premium');
            return;
          }
        }

        if (file) {
          element.stream = file;
          element.qualitys = quality;
          element.subtitles = parseSubtitles(json.subtitle);
          call(element);
        } else error();
      } else error();
    }, function (a, c) {
      error(sourceError(a, c));
    }, postdata, {
      withCredentials: logged_in,
      headers: headers
    });
  }

  function decode(data) {
    if (!startsWith(data, '#')) return data;

    var enc = function enc(str) {
      return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
        return String.fromCharCode('0x' + p1);
      }));
    };

    var dec = function dec(str) {
      return decodeURIComponent(atob(str).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
    };

    var trashList = ['$$!!@$$@^!@#$$@', '@@@@@!##!^^^', '####^!!##!@@', '^^^!@##!!##', '$$#!!@#!@##'];
    var x = data.substring(2);
    trashList.forEach(function (trash) {
      x = x.replace('//_//' + enc(trash), '');
    });

    try {
      x = dec(x);
    } catch (e) {
      x = '';
    }

    return x;
  }
  /**
   * Получить потоки
   * @param {String} str
   * @returns array
   */


  function extractItems(str) {
    if (!str) return [];

    try {
      var items = component.parsePlaylist(str).map(function (item) {
        var int_quality = NaN;
        var quality = item.label.match(/(\d\d\d+)/);

        if (quality) {
          int_quality = parseInt(quality[1]);
        } else {
          quality = item.label.match(/(\d+)K/);

          if (quality) {
            int_quality = parseInt(quality[1]) * 1000;
          }
        }

        var links;

        if (prefer_mp4) {
          links = item.links.filter(function (url) {
            return Utils.isMediaUrl(url, 'mp4');
          });
        } else {
          links = item.links.filter(function (url) {
            return Utils.isMediaUrl(url, 'm3u8');
          });
        }

        if (!links.length) links = item.links;
        var link = links[0] || '';
        link = component.fixLinkProtocol(link, prefer_http, 'full');
        return {
          label: item.label,
          quality: int_quality,
          file: component.proxyStream(link, 'rezka2')
        };
      });
      items.sort(function (a, b) {
        if (b.quality > a.quality) return 1;
        if (b.quality < a.quality) return -1;
        if (b.label > a.label) return 1;
        if (b.label < a.label) return -1;
        return 0;
      });
      return items;
    } catch (e) {}

    return [];
  }

  function parseSubtitles(str) {
    var subtitles = [];

    if (str) {
      subtitles = component.parsePlaylist(str).map(function (item) {
        var link = item.links[0] || '';
        link = component.fixLinkProtocol(link, prefer_http, 'full');
        return {
          label: item.label,
          url: component.processSubs(link)
        };
      });
    }

    return subtitles.length ? subtitles : false;
  }
  /**
   * Отфильтровать файлы
   * @returns array
   */


  function filtred() {
    var filtred = [];

    if (extract.is_series) {
      var season_name = filter_items.season[choice.season];
      var season_id;
      extract.season.forEach(function (season) {
        if (season.name == season_name) season_id = season.id;
      });
      var voice = filter_items.voice[choice.voice];
      extract.episode.forEach(function (episode) {
        if (episode.season_id == season_id) {
          filtred.push({
            title: component.formatEpisodeTitle(episode.season_id, null, episode.name),
            quality: '360p ~ 1080p',
            info: ' / ' + voice,
            season: parseInt(episode.season_id),
            episode: parseInt(episode.episode_id),
            media: episode
          });
        }
      });
    } else {
      extract.voice.forEach(function (voice) {
        filtred.push({
          title: voice.name || select_title,
          quality: '360p ~ 1080p',
          info: '',
          media: voice
        });
      });
    }

    return filtred;
  }
  /**
   * Показать файлы
   */


  function append(items) {
    component.reset();
    var viewed = Lampa.Storage.cache('online_view', 5000, []);
    var last_episode = component.getLastEpisode(items);
    items.forEach(function (element) {
      if (element.season) {
        element.translate_episode_end = last_episode;
        element.translate_voice = filter_items.voice[choice.voice];
      }

      var hash = Lampa.Utils.hash(element.season ? [element.season, element.season > 10 ? ':' : '', element.episode, object.movie.original_title].join('') : object.movie.original_title);
      var view = Lampa.Timeline.view(hash);
      var item = Lampa.Template.get('online_mod', element);
      var hash_file = Lampa.Utils.hash(element.season ? [element.season, element.season > 10 ? ':' : '', element.episode, object.movie.original_title, filter_items.voice[choice.voice]].join('') : object.movie.original_title + element.title);
      element.timeline = view;
      item.append(Lampa.Timeline.render(view));

      if (Lampa.Timeline.details) {
        item.find('.online__quality').append(Lampa.Timeline.details(view, ' / '));
      }

      if (viewed.indexOf(hash_file) !== -1) item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_star', {}, true) + '</div>');
      item.on('hover:enter', function () {
        if (element.loading) return;
        if (object.movie.id) Lampa.Favorite.add('history', object.movie, 100);
        element.loading = true;
        getStream(element, function (element) {
          element.loading = false;
          var first = {
            url: component.getDefaultQuality(element.qualitys, element.stream),
            quality: component.renameQualityMap(element.qualitys),
            subtitles: element.subtitles,
            timeline: element.timeline,
            title: element.season ? element.title : select_title + (element.title == select_title ? '' : ' / ' + element.title)
          };
          Lampa.Player.play(first);

          if (element.season && Lampa.Platform.version) {
            var playlist = [];
            items.forEach(function (elem) {
              if (elem == element) {
                playlist.push(first);
              } else {
                var cell = {
                  url: function url(call) {
                    getStream(elem, function (elem) {
                      cell.url = component.getDefaultQuality(elem.qualitys, elem.stream);
                      cell.quality = component.renameQualityMap(elem.qualitys);
                      cell.subtitles = elem.subtitles;
                      call();
                    }, function () {
                      cell.url = '';
                      call();
                    });
                  },
                  timeline: elem.timeline,
                  title: elem.title
                };
                playlist.push(cell);
              }
            });
            Lampa.Player.playlist(playlist);
          } else {
            Lampa.Player.playlist([first]);
          }

          if (viewed.indexOf(hash_file) == -1) {
            viewed.push(hash_file);
            item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_star', {}, true) + '</div>');
            Lampa.Storage.set('online_view', viewed);
          }
        }, function (error) {
          element.loading = false;
          Lampa.Noty.show(error || Lampa.Lang.translate(extract.blocked ? 'online_mod_blockedlink' : 'online_mod_nolink'));
        });
      });
      component.append(item);
      component.contextmenu({
        item: item,
        view: view,
        viewed: viewed,
        hash_file: hash_file,
        element: element,
        file: function file(call) {
          getStream(element, function (element) {
            call({
              file: element.stream,
              quality: element.qualitys
            });
          }, function (error) {
            Lampa.Noty.show(error || Lampa.Lang.translate(extract.blocked ? 'online_mod_blockedlink' : 'online_mod_nolink'));
          });
        }
      });
    });
    component.start(true);
  }
}
