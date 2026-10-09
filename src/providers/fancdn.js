function fancdn(component, _object) {
  var network = new Lampa.Reguest();
  var extract = [];
  var object = _object;
  var select_title = '';
  var prefer_http = Lampa.Storage.field('online_mod_prefer_http') === true;
  var prox = component.proxy('fancdn');
  var host = Utils.fanserialsHost();
  var ref = host + '/';
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

  var cookie = Lampa.Storage.get('online_mod_fancdn_cookie', '') + '';
  var authorization_required = !cookie;
  if (cookie.indexOf('PHPSESSID=') == -1) cookie = 'PHPSESSID=' + Utils.randomHex(32) + (cookie ? '; ' + cookie : '');

  if (cookie) {
    if (Lampa.Platform.is('android')) {
      headers.Cookie = cookie;
    }

    if (prox) {
      prox_enc += 'param/Cookie=' + encodeURIComponent(cookie) + '/';
    }
  }

  var embed = ref;
  var filter_items = {};
  var choice = {
    season: 0,
    voice: 0,
    voice_name: ''
  };
  /**
   * Начать поиск
   * @param {Object} _object
   * @param {String} kinopoisk_id
   */

  this.search = function (_object, kinopoisk_id, data) {
    var _this = this;

    object = _object;
    select_title = object.search || object.movie.title;
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

    var display = function display(links) {
      if (links && links.length && links.forEach) {
        var is_sure = false;
        var items = links.map(function (l) {
          var li = $(l + '</div>');
          var link = $('a', li);
          var orig_div = $('div.name-origin-search', li);
          var titl = link.text().trim() || '';
          var orig_title = orig_div.text().trim() || '';
          var year;
          var found = orig_title.match(/^(.*)\((\d{4}\s*)\)$/);

          if (found) {
            year = parseInt(found[2]);
            orig_title = found[1].trim();
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

        if (cards.length == 1 && is_sure) getPage(cards[0].link);else if (items.length) {
          _this.wait_similars = true;
          items.forEach(function (c) {
            c.is_similars = true;
          });
          component.similars(items);
          component.loading(false);
        } else component.emptyForQuery(select_title);
      } else if (authorization_required) component.empty(Lampa.Lang.translate('online_mod_authorization_required') + ' FanSerials');else component.emptyForQuery(select_title);
    };

    var url = embed + 'index.php?do=search';
    var postdata = 'do=search&subaction=search&search_start=0&full_search=1&result_from=1&story=' + encodeURIComponent(select_title) + '&titleonly=3&searchuser=&replyless=0&replylimit=0&searchdate=0&beforeafter=after&sortby=title&resorder=asc&showposts=0&catlist%5B%5D=10';
    network.clear();
    network.timeout(10000);
    network["native"](component.proxyLink(url, prox, prox_enc, 'enc2t'), function (str) {
      str = (str || '').replace(/\n/g, '');
      var links = str.match(/<div class="item-search-header">\s*<h2>\s*<a [^>]*>[^<]*<\/a>\s*<\/h2>\s*<div class="name-origin-search">[^<]*<\/div>/g);
      display(links);
    }, function (a, c) {
      component.empty(network.errorDecode(a, c));
    }, postdata, {
      dataType: 'text',
      headers: headers
    });
  };

  function getPage(url) {
    url = component.fixLink(url, ref);
    network.clear();
    network.timeout(10000);
    network["native"](component.proxyLink(url, prox, prox_enc, 'enc2t'), function (str) {
      str = (str || '').replace(/\n/g, '');
      var player = str.match(/<iframe +id="iframe-player" +src=" *(\/movies\/(\d+)[^"]*)"/);

      if (player) {
        var player_url = Lampa.Utils.addUrlComponent(embed + atob('ZmlsbS5waHA='), 'kp=' + player[2]);
        var player_ref = component.fixLink(player[1], ref);
        var pos = player[1].indexOf('?');

        if (pos !== -1) {
          var token = player[1].substring(pos + 1);

          if (token) {
            Lampa.Storage.set('online_mod_fancdn_token', token);
            player_url += '&' + token;
          }
        }

        var player_headers = Lampa.Platform.is('android') ? {
          'Origin': host,
          'Referer': player_ref,
          'User-Agent': user_agent
        } : {};
        var prox_enc_player = '';

        if (prox) {
          prox_enc_player += 'param/Origin=' + encodeURIComponent(host) + '/';
          prox_enc_player += 'param/Referer=' + encodeURIComponent(player_ref) + '/';
          prox_enc_player += 'param/User-Agent=' + encodeURIComponent(user_agent) + '/';
        }

        if (cookie) {
          if (Lampa.Platform.is('android')) {
            headers.Cookie = cookie;
          }

          if (prox) {
            prox_enc_player += 'param/Cookie=' + encodeURIComponent(cookie) + '/';
          }
        }

        network.clear();
        network.timeout(10000);
        network["native"](component.proxyLink(player_url, prox, prox_enc_player, 'enc2t'), function (json) {
          parse(json, function () {
            component.emptyForQuery(select_title);
          });
        }, function (a, c) {
          component.empty(network.errorDecode(a, c));
        }, false, {
          headers: player_headers
        });
      } else if (authorization_required) component.empty(Lampa.Lang.translate('online_mod_authorization_required') + ' FanSerials');else component.emptyForQuery(select_title);
    }, function (a, c) {
      component.empty(network.errorDecode(a, c));
    }, false, {
      dataType: 'text',
      headers: headers
    });
  }

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
      voice_name: ''
    };
    filter();
    append(filtred());
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
    component.reset();
    filter();
    append(filtred());
    component.saveChoice(choice);
  };
  /**
   * Уничтожить
   */


  this.destroy = function () {
    network.clear();
    extract = null;
  };
  /**
   * Получить потоки
   * @param {String} str
   * @returns array
   */


  function extractItems(str, url) {
    if (!str) return [];

    try {
      var items = component.parseM3U(str).map(function (item) {
        var link = item.link;
        var quality = item.height;
        var alt_quality = link.match(/\b(\d\d\d+)\./);

        if (alt_quality) {
          var alt_height = parseInt(alt_quality[1]);
          if (alt_height > quality && alt_height <= 4320) quality = alt_height;
        }

        return {
          label: quality ? quality + 'p' : '360p ~ 1080p',
          quality: quality,
          file: component.proxyStream(component.fixLink(link, url), 'fancdn')
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
  /**
   * Получить потоки
   * @param {String} str
   * @returns array
   */


  function extractItemsPlaylist(str, url) {
    if (!str) return [];

    try {
      var items = component.parsePlaylist(str).map(function (item) {
        var quality = item.label.match(/(\d\d\d+)/);
        var link = item.links[0] || '';
        link = component.fixLinkProtocol(link, prefer_http, true);
        return {
          label: item.label,
          quality: quality ? parseInt(quality[1]) : NaN,
          file: component.proxyStream(link, 'fancdn')
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
  /**
   * Получить поток
   * @param {*} element
   */


  function parseStream(element, call, error, itemsExtractor, str, url) {
    var file = '';
    var quality = false;
    var items = itemsExtractor(str, url);

    if (items && items.length) {
      file = items[0].file;
      quality = {};
      items.forEach(function (item) {
        quality[item.label] = item.file;
      });
    }

    if (file) {
      element.stream = file;
      element.qualitys = quality;
      element.subtitles = parseSubs(element.media.subtitles, url);
      call(element);
    } else error();
  }
  /**
   * Получить поток
   * @param {*} element
   */


  function getStreamM3U(element, call, error, file) {
    file = file.replace(/\.mp4:hls:manifest/, '');
    var hls_file = file.replace(/\/\d\d\d+([^\/]*\.m3u8)$/, '/hls$1');
    network.clear();
    network.timeout(5000);
    network["native"](component.proxyStream(hls_file, 'fancdn'), function (str) {
      parseStream(element, call, error, extractItems, str, hls_file);
    }, function (a, c) {
      if (file != hls_file) {
        network.clear();
        network.timeout(5000);
        network["native"](component.proxyStream(file, 'fancdn'), function (str) {
          parseStream(element, call, error, extractItems, str, file);
        }, function (a, c) {
          error();
        }, false, {
          dataType: 'text'
        });
      } else error();
    }, false, {
      dataType: 'text'
    });
  }
  /**
   * Получить поток
   * @param {*} element
   */


  function getStream(element, call, error) {
    if (element.stream) return call(element);
    var url = element.media.file || '';

    if (startsWith(url, '[')) {
      parseStream(element, call, error, extractItemsPlaylist, url, '');
      return;
    }

    url = component.fixLinkProtocol(url, prefer_http, true);

    if (endsWith(url, '.m3u8')) {
      getStreamM3U(element, call, error, url);
      return;
    }

    if (url) {
      element.stream = component.proxyStream(url, 'fancdn');
      element.qualitys = false;
      element.subtitles = parseSubs(element.media.subtitles, url);
      call(element);
    } else error();
  }

  function parseSubs(str, url) {
    if (!str) return false;
    var subtitles = component.parsePlaylist(str).map(function (item) {
      var link = item.links[0] || '';
      link = component.fixLinkProtocol(link, prefer_http, true);
      return {
        label: item.label,
        url: component.proxyStreamSubs(component.fixLink(link, url), 'fancdn')
      };
    });
    return subtitles.length ? subtitles : false;
  }

  function parse(json, empty) {
    if (json && json.length && json.forEach) {
      component.loading(false);
      extract = json;
      filter();
      append(filtred());
    } else empty();
  }
  /**
   * Построить фильтр
   */


  function filter() {
    filter_items = {
      season: [],
      season_num: [],
      voice: [],
      voice_info: []
    };
    extract.forEach(function (t) {
      if (t.folder) {
        for (var s_num in t.folder) {
          if (filter_items.season_num.indexOf(s_num) == -1) filter_items.season_num.push(s_num);
        }
      }
    });
    filter_items.season_num.sort(function (a, b) {
      return a - b;
    });
    filter_items.season_num.forEach(function (s_num) {
      filter_items.season.push(Lampa.Lang.translate('torrent_serial_season') + ' ' + s_num);
    });
    if (!filter_items.season[choice.season]) choice.season = 0;

    if (filter_items.season[choice.season]) {
      var s_num = filter_items.season_num[choice.season];
      extract.forEach(function (t) {
        if (t.folder && t.folder[s_num]) {
          var v_id = t.id || '';

          if (!filter_items.voice_info.some(function (v) {
            return v.id == v_id;
          })) {
            filter_items.voice.push(t.title || t.comment || '');
            filter_items.voice_info.push({
              id: v_id
            });
          }
        }
      });
    }

    if (!filter_items.voice[choice.voice]) choice.voice = 0;

    if (choice.voice_name) {
      var inx = filter_items.voice.indexOf(choice.voice_name);
      if (inx == -1) choice.voice = 0;else if (inx !== choice.voice) {
        choice.voice = inx;
      }
    }

    component.filter(filter_items, choice);
  }
  /**
   * Отфильтровать файлы
   * @returns array
   */


  function filtred() {
    var filtred = [];
    extract.forEach(function (data) {
      if (data.folder) {
        var v_info = filter_items.voice_info[choice.voice];

        if (v_info && data.id == v_info.id) {
          var voice = filter_items.voice[choice.voice];
          var s_num = filter_items.season_num[choice.season];
          var s = data.folder[s_num] || {};

          if (s.folder) {
            for (var e_num in s.folder) {
              var e = s.folder[e_num] || {};

              if (e.file) {
                filtred.push({
                  title: component.formatEpisodeTitle(s_num, e_num),
                  quality: '360p ~ 1080p',
                  info: ' / ' + Lampa.Utils.shortText(voice, 50),
                  season: parseInt(s_num),
                  episode: parseInt(e_num),
                  media: e
                });
              }
            }
          }
        }
      } else if (data.file) {
        filtred.push({
          title: data.title || data.comment || select_title,
          quality: '360p ~ 1080p',
          info: '',
          media: data
        });
      }
    });
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
        }, function () {
          element.loading = false;
          Lampa.Noty.show(Lampa.Lang.translate('online_mod_nolink'));
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
          }, function () {
            Lampa.Noty.show(Lampa.Lang.translate('online_mod_nolink'));
          });
        }
      });
    });
    component.start(true);
  }
}
