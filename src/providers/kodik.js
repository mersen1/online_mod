function kodik(component, _object) {
  var network = new Lampa.Reguest();
  var extract = {};
  var object = _object;
  var select_title = '';
  var prefer_http = Lampa.Storage.field('online_mod_prefer_http') === true;
  var prefer_mp4 = false;
  var prox = component.proxy('kodik');
  var token = Utils.decodeSecret([124, 125, 1, 86, 90, 64, 12, 123, 108, 59, 122, 125, 82, 3, 90, 23, 90, 122, 60, 110, 43, 123, 84, 3, 91, 71, 88, 112, 111, 57, 122, 121], atob('ZmluZCB5b3VyIG93biB0b2tlbg=='));
  var embed = 'https://kodik-api.com/search';
  var last_player = '';
  var last_info = '';
  var filter_items = {};
  var choice = {
    season: 0,
    voice: 0,
    voice_name: ''
  };

  function kodik_api_search(api, callback, error) {
    network.clear();
    network.timeout(15000);
    network["native"](component.proxyLink(embed + api, prox), function (json) {
      if (callback) callback(json);
    }, function (a, c) {
      if (error) error(network.errorDecode(a, c));
    });
  }
  /**
   * Поиск
   * @param {Object} _object
   */


  this.search = function (_object, kinopoisk_id, data) {
    var _this = this;

    object = _object;
    select_title = object.search || object.movie.title;
    if (this.wait_similars && data && data[0] && data[0].is_similars) return success(data[0]);
    var search_year = object.search_date;
    var orig_titles = [];

    if (object.movie.alternative_titles && object.movie.alternative_titles.results) {
      orig_titles = object.movie.alternative_titles.results.map(function (t) {
        return t.title;
      });
    }

    if (object.movie.original_title) orig_titles.push(object.movie.original_title);
    if (object.movie.original_name) orig_titles.push(object.movie.original_name);

    var display = function display(results, empty) {
      if (results && results.length && results.forEach) {
        var is_sure = false;
        var is_imdb = false;
        var elements = {};
        results.forEach(function (c) {
          var id;
          if (c.shikimori_id) id = 'sm_' + c.shikimori_id;else if (c.worldart_link) id = 'wa_' + c.worldart_link;else if (c.kinopoisk_id) id = 'kp_' + c.kinopoisk_id;else if (c.imdb_id) id = 'im_' + c.imdb_id;else if (c.id) id = 'k_' + c.id;else id = '';
          if (!id) return;
          id += c.title;
          var list = elements[id] || [];
          list.push(c);
          elements[id] = list;
        });
        var items = [];

        for (var ID in elements) {
          var list = elements[ID];
          items.push({
            title: list[0].title,
            orig_title: list[0].title_orig,
            other_title: list[0].other_title,
            year: list[0].year,
            kinopoisk_id: list[0].kinopoisk_id,
            imdb_id: list[0].imdb_id,
            episodes_count: list[0].episodes_count,
            media: list[0]
          });
        }

        if (!object.clarification && (object.movie.imdb_id || +kinopoisk_id)) {
          var imdb_id = object.movie.imdb_id;
          var kp_id = +kinopoisk_id;
          var tmp = items.filter(function (c) {
            return imdb_id && c.imdb_id == imdb_id || kp_id && c.kinopoisk_id == kp_id;
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
              return component.containsAnyTitle([c.orig_title, c.title, c.other_title], orig_titles);
            });

            if (_tmp.length) {
              cards = _tmp;
              is_sure = true;
            }
          }

          if (select_title) {
            var _tmp2 = cards.filter(function (c) {
              return component.containsAnyTitle([c.title, c.orig_title, c.other_title], [select_title]);
            });

            if (_tmp2.length) {
              cards = _tmp2;
              is_sure = true;
            }
          }

          if (!is_sure) cards = [];
          items = cards;

          if (cards.length > 1 && search_year) {
            var _tmp3 = cards.filter(function (c) {
              return c.year == search_year;
            });

            if (!_tmp3.length) _tmp3 = cards.filter(function (c) {
              return c.year && c.year > search_year - 2 && c.year < search_year + 2;
            });
            if (_tmp3.length) cards = _tmp3;
          }
        }

        if (cards.length == 1 && is_sure && !is_imdb) {
          if (search_year && cards[0].year) {
            is_sure = cards[0].year > search_year - 2 && cards[0].year < search_year + 2;
          }

          if (is_sure) {
            is_sure = false;

            if (orig_titles.length) {
              is_sure |= component.equalAnyTitle([cards[0].orig_title, cards[0].title, cards[0].other_title], orig_titles);
            }

            if (select_title) {
              is_sure |= component.equalAnyTitle([cards[0].title, cards[0].orig_title, cards[0].other_title], [select_title]);
            }
          }
        }

        if (cards.length == 1 && is_sure) {
          success(cards[0]);
        } else if (items.length) {
          _this.wait_similars = true;
          items.forEach(function (c) {
            c.is_similars = true;
          });
          component.similars(items);
          component.loading(false);
        } else empty();
      } else empty();
    };

    var kodik_search_by_title = function kodik_search_by_title(callback, error) {
      var params = Lampa.Utils.addUrlComponent('', 'token=' + token);
      params = Lampa.Utils.addUrlComponent(params, 'limit=100');
      params = Lampa.Utils.addUrlComponent(params, 'translation_type=voice');
      params = Lampa.Utils.addUrlComponent(params, 'title=' + encodeURIComponent(select_title));
      kodik_api_search(params, callback, error);
    };

    var kodik_search_by_title_part = function kodik_search_by_title_part(callback, error) {
      var params = Lampa.Utils.addUrlComponent('', 'token=' + token);
      params = Lampa.Utils.addUrlComponent(params, 'limit=100');
      params = Lampa.Utils.addUrlComponent(params, 'translation_type=voice');
      var words = component.cleanTitle(select_title || '').replace(/[\s—\-+]+/g, ' ').trim().split(' ');
      words.sort(function (a, b) {
        return b.length - a.length;
      });
      var title = words.splice(0, 1).join(' ');

      if (title !== select_title) {
        params = Lampa.Utils.addUrlComponent(params, 'title=' + encodeURIComponent(title));
        kodik_api_search(params, callback, error);
      } else callback({});
    };

    var kodik_search_by_id = function kodik_search_by_id(callback, error) {
      if (!object.clarification && (object.movie.imdb_id || +kinopoisk_id)) {
        var params = Lampa.Utils.addUrlComponent('', 'token=' + token);
        params = Lampa.Utils.addUrlComponent(params, 'limit=100');
        var kp_params = +kinopoisk_id ? Lampa.Utils.addUrlComponent(params, 'kinopoisk_id=' + encodeURIComponent(+kinopoisk_id)) : '';
        var imdb_params = object.movie.imdb_id ? Lampa.Utils.addUrlComponent(params, 'imdb_id=' + encodeURIComponent(object.movie.imdb_id)) : '';
        kodik_api_search(kp_params || imdb_params, function (json) {
          if (json.results && json.results.length) callback(json);else if (kp_params && imdb_params) {
            kodik_api_search(imdb_params, callback, error);
          } else callback({});
        }, error);
      } else callback({});
    };

    var error = component.empty.bind(component);
    kodik_search_by_id(function (json) {
      display(json && json.results, function () {
        kodik_search_by_title_part(function (json) {
          display(json && json.results, function () {
            kodik_search_by_title(function (json) {
              display(json && json.results, function () {
                component.emptyForQuery(select_title);
              });
            }, error);
          });
        }, error);
      });
    }, error);
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

  function success(json) {
    var media = json.media || {};
    var params = Lampa.Utils.addUrlComponent('', 'token=' + token);
    params = Lampa.Utils.addUrlComponent(params, 'limit=100');
    params = Lampa.Utils.addUrlComponent(params, 'with_episodes=true');
    if (media.shikimori_id) params = Lampa.Utils.addUrlComponent(params, 'shikimori_id=' + encodeURIComponent(media.shikimori_id));else if (media.worldart_link) params = Lampa.Utils.addUrlComponent(params, 'worldart_link=' + encodeURIComponent(media.worldart_link));else if (media.kinopoisk_id) params = Lampa.Utils.addUrlComponent(params, 'kinopoisk_id=' + encodeURIComponent(media.kinopoisk_id));else if (media.imdb_id) params = Lampa.Utils.addUrlComponent(params, 'imdb_id=' + encodeURIComponent(media.imdb_id));else if (media.id) params = Lampa.Utils.addUrlComponent(params, 'id=' + encodeURIComponent(media.id));else {
      component.emptyForQuery(select_title);
      return;
    }
    var error = component.empty.bind(component);
    kodik_api_search(params, function (json) {
      component.loading(false);
      extractData(json && json.results ? json.results.filter(function (c) {
        return c.title === media.title;
      }) : []);
      filter();
      append(filtred());
    }, error);
  }
  /**
   * Получить данные о фильме
   * @param {Array} items
   */


  function extractData(items) {
    var seasons = [];
    items.forEach(function (c) {
      if (c.seasons) {
        var _loop = function _loop(season_id) {
          var season = c.seasons[season_id];

          if (season) {
            if (!seasons.some(function (s) {
              return s.id === season_id;
            })) {
              seasons.push({
                id: season_id,
                title: Lampa.Lang.translate('torrent_serial_season') + ' ' + season_id + (season.title ? ' - ' + season.title : '')
              });
            }
          }
        };

        for (var season_id in c.seasons) {
          _loop(season_id);
        }
      }
    });
    seasons.sort(function (a, b) {
      return a.id - b.id;
    });
    extract = {
      items: items,
      seasons: seasons
    };
  }
  /**
   * Построить фильтр
   */


  function filter() {
    filter_items = {
      season: extract.seasons.map(function (s) {
        return s.title;
      }),
      voice: [],
      voice_info: []
    };
    if (!filter_items.season[choice.season]) choice.season = 0;

    if (extract.seasons.length) {
      var season_id = extract.seasons[choice.season] && extract.seasons[choice.season].id;
      extract.items.forEach(function (c) {
        if (!(c.seasons && c.seasons[season_id])) return;

        if (c.translation && !filter_items.voice_info.some(function (v) {
          return v.id == c.translation.id;
        })) {
          filter_items.voice.push(c.translation.title);
          filter_items.voice_info.push(c.translation);
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

    if (extract.seasons.length) {
      var season_id = extract.seasons[choice.season] && extract.seasons[choice.season].id;
      var voice_name = filter_items.voice[choice.voice];
      var voice_id = filter_items.voice_info[choice.voice] && filter_items.voice_info[choice.voice].id;
      var translation = extract.items.filter(function (c) {
        return c.seasons && c.seasons[season_id] && c.translation && c.translation.id == voice_id;
      })[0];

      if (translation) {
        var episodes = translation.seasons[season_id] && translation.seasons[season_id].episodes || {};

        for (var episode_id in episodes) {
          var link = episodes[episode_id];
          filtred.push({
            title: component.formatEpisodeTitle(season_id, episode_id),
            orig_title: translation.title_orig || translation.title || select_title,
            quality: translation.quality || '360p ~ 1080p',
            info: ' / ' + voice_name,
            season: '' + season_id,
            episode: parseInt(episode_id),
            link: link
          });
        }
      }
    } else {
      extract.items.forEach(function (c) {
        if (c.seasons) return;
        filtred.push({
          title: c.translation && c.translation.title || select_title,
          orig_title: c.title_orig || c.title || select_title,
          quality: c.quality || '360p ~ 1080p',
          info: '',
          link: c.link
        });
      });
    }

    return filtred;
  }
  /**
   * Получить поток
   * @param {*} element
   */


  function getStream(element, call, error) {
    if (element.stream) return call(element);
    if (!element.link) return error();
    var link_match = element.link.match(/^((https?:)?\/\/[^\/]+)\/.*$/);
    var link_origin = component.fixLinkProtocol(link_match ? link_match[1] : '//kodikplayer.com', false);
    var url = component.fixLinkProtocol(element.link, false);
    network.clear();
    network.timeout(10000);
    network["native"](component.proxyLink(url, prox), function (str) {
      str = (str || '').replace(/\n/g, '');
      var urlParams = str.match(/\burlParams = '([^']+)'/);
      var type = str.match(/\b(?:videoInfo|vInfo)\.type = '([^']+)'/);
      var hash = str.match(/\b(?:videoInfo|vInfo)\.hash = '([^']+)'/);
      var id = str.match(/\b(?:videoInfo|vInfo)\.id = '([^']+)'/);
      var player = str.match(/<script [^>]*\bsrc="(\/assets\/js\/app\.player_single[^"]+)"/);
      var json;

      try {
        json = urlParams && urlParams[1] && JSON.parse(urlParams[1]);
      } catch (e) {}

      var postdata = '';

      if (json && type && hash && id) {
        postdata = 'd=' + json.d;
        postdata += '&d_sign=' + json.d_sign;
        postdata += '&pd=' + json.pd;
        postdata += '&pd_sign=' + json.pd_sign;
        postdata += '&ref=' + json.ref;
        postdata += '&ref_sign=' + json.ref_sign;
        postdata += '&bad_user=true';
        postdata += '&cdn_is_working=true';
        postdata += '&type=' + type[1];
        postdata += '&hash=' + hash[1];
        postdata += '&id=' + id[1];
        postdata += '&info=%7B%7D';
      }

      if (postdata && player) {
        var getLinks = function getLinks() {
          network.clear();
          network.timeout(10000);
          network["native"](component.proxyLink(last_info, prox), function (json) {
            if (json && json.links) {
              var items = extractItems(json.links),
                  file = '',
                  quality = false;

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
                call(element);
              } else error();
            } else error();
          }, function (a, c) {
            error();
          }, postdata);
        };

        var player_url = link_origin + player[1];

        if (player_url !== last_player) {
          network.clear();
          network.timeout(10000);
          network["native"](component.proxyLink(player_url, prox), function (str) {
            str = (str || '').replace(/\n/g, '');
            var info_match = str.match(/\$\.ajax\({type: *"POST", *url: *atob\("([^"]+)"\)/);
            var info;

            try {
              info = info_match && atob(info_match[1]);
            } catch (e) {}

            if (info && startsWith(info, '/')) {
              last_info = link_origin + info;
              last_player = player_url;
              getLinks();
            } else error();
          }, function (a, c) {
            error();
          }, false, {
            dataType: 'text'
          });
        } else getLinks();
      } else error();
    }, function (a, c) {
      error();
    }, false, {
      dataType: 'text'
    });
  }

  function extractItems(playlists) {
    try {
      var items = [];
      Object.keys(playlists).forEach(function (key) {
        var obj = playlists[key];
        var quality = parseInt(key);
        var link = decode(obj && obj[0] && obj[0].src || '');
        link = component.fixLinkProtocol(link, prefer_http, true);
        if (prefer_mp4) ;
        items.push({
          label: quality ? quality + 'p' : '360p ~ 1080p',
          quality: quality,
          file: component.proxyStream(link, 'kodik')
        });
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

  function decode(str) {
    try {
      if (startsWith(str, 'http') || startsWith(str, '//')) return str;
      return atob(str.replace(/[a-zA-Z]/g, function (x) {
        return String.fromCharCode((x <= 'Z' ? 90 : 122) >= (x = x.charCodeAt(0) + 18) ? x : x - 26);
      }));
    } catch (e) {
      return '';
    }
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

      var hash = Lampa.Utils.hash(element.season ? [element.season, element.season > 10 ? ':' : '', element.episode, object.movie.original_title, element.orig_title].join('') : object.movie.original_title + element.orig_title);
      var view = Lampa.Timeline.view(hash);
      var item = Lampa.Template.get('online_mod', element);
      var hash_file = Lampa.Utils.hash(element.season ? [element.season, element.season > 10 ? ':' : '', element.episode, object.movie.original_title, element.orig_title, filter_items.voice[choice.voice]].join('') : object.movie.original_title + element.orig_title + element.title);
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
