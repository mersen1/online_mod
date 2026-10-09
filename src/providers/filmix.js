function filmix(component, _object, _debug) {
  var network = new Lampa.Reguest();
  var extract = {};
  var object = _object;
  var debug = _debug;
  var prox = component.proxy('filmix');
  var prox2 = component.proxy('filmix_site');
  var prox3 = component.proxy('filmix_abuse');
  var host = Utils.filmixHost();
  var ref = host + '/';
  var user_agent = Utils.baseUserAgent();
  var site = ref;
  var embed = Utils.filmixAppHost() + '/api/v2/';
  var headers = Lampa.Platform.is('android') ? {
    'User-Agent': Utils.filmixUserAgent()
  } : {};
  var prox_enc = '';

  if (prox) {
    prox_enc += 'param/User-Agent=' + encodeURIComponent(Utils.filmixUserAgent()) + '/';
  }

  var headers2 = Lampa.Platform.is('android') ? {
    'Origin': host,
    'Referer': ref,
    'User-Agent': user_agent,
    'X-Requested-With': 'XMLHttpRequest'
  } : {
    'X-Requested-With': 'XMLHttpRequest'
  };
  var prox2_enc = '';

  if (prox2) {
    prox2_enc += 'param/Origin=' + encodeURIComponent(host) + '/';
    prox2_enc += 'param/Referer=' + encodeURIComponent(ref) + '/';
    prox2_enc += 'param/User-Agent=' + encodeURIComponent(user_agent) + '/';
  }

  var select_title = '';
  var prefer_http = Lampa.Storage.field('online_mod_prefer_http') === true;
  var filter_items = {};
  var choice = {
    season: 0,
    voice: 0,
    voice_name: ''
  };
  var secret = '';
  var secret_url = '';

  function decodeSecretToken(callback) {
    {
      if (callback) callback();
      return;
    }
  }

  if (!window.mod_filmix) {
    window.mod_filmix = {
      max_qualitie: 480,
      is_max_qualitie: false
    };
  }

  var token = Lampa.Storage.get('filmix_token', '') + '';
  var dev_token = Utils.filmixToken(Utils.randomHex(16), token || 'aaaabbbbccccddddeeeeffffaaaabbbb');
  var abuse_token = prox3 ? Utils.filmixToken(Utils.randomHex(16), 'aaaabbbbccccddddeeeeffffaaaabbbb') : '';
  /**
   * Начать поиск
   * @param {Object} _object
   * @param {String} kinopoisk_id
   */

  this.search = function (_object, kinopoisk_id, data) {
    var _this = this;

    object = _object;
    select_title = object.search || object.movie.title;
    if (this.wait_similars && data && data[0] && data[0].is_similars) return find(data[0].id);
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
    var clean_title = component.cleanTitle(select_title).replace(/\b(\d\d\d\d+)\b/g, '+$1');
    var object_date = object.movie.release_date || object.movie.first_air_date || object.movie.last_air_date || '0000';
    var object_year = parseInt((object_date + '').slice(0, 4));

    if (object_year) {
      clean_title = clean_title.replace(new RegExp(' \\+(' + object_year + ')$'), ' $1');
    }

    var display = function display(json) {
      if (json && json.length && json.forEach) {
        var is_sure = false;
        json.forEach(function (c) {
          if (!c.orig_title) c.orig_title = c.original_title || c.original_name;
          if (!c.year && c.alt_name) c.year = parseInt(c.alt_name.split('-').pop());
        });
        var cards = json;

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

        if (cards.length == 1 && is_sure) find(cards[0].id);else if (json.length) {
          _this.wait_similars = true;
          json.forEach(function (c) {
            c.is_similars = true;
            c.seasons_count = c.last_episode && c.last_episode.season;
            c.episodes_count = c.last_episode && c.last_episode.episode;
          });
          component.similars(json);
          component.loading(false);
        } else component.emptyForQuery(select_title);
      } else component.emptyForQuery(select_title);
    };

    var siteSearch = function siteSearch() {
      var url = site + 'api/v2/suggestions?search_word=' + encodeURIComponent(clean_title);
      network.clear();
      network.timeout(15000);
      network["native"](component.proxyLink(url, prox2, prox2_enc, 'enc2t'), function (json) {
        display(json && json.posts || []);
      }, function (a, c) {
        component.empty(network.errorDecode(a, c));
      }, false, {
        headers: headers2
      });
    };

    var apiSearch = function apiSearch(abuse) {
      var url = embed + 'search' + (abuse ? abuse_token : dev_token);
      url = Lampa.Utils.addUrlComponent(url, 'story=' + encodeURIComponent(clean_title));
      url = abuse ? component.proxyLink(url, prox3, '', '') : component.proxyLink(url, prox, prox_enc, 'enc2t');
      network.clear();
      network.timeout(15000);
      network["native"](url, function (json) {
        if (json && json.length && json.forEach) display(json);else siteSearch();
      }, function (a, c) {
        if (!abuse && abuse_token) apiSearch(true);else siteSearch();
      }, false, {
        headers: headers
      });
    };

    decodeSecretToken(function () {
      return apiSearch();
    });
  };

  function find(filmix_id, abuse, abuse_error, low_quality) {
    if (!debug && !window.mod_filmix.is_max_qualitie) {
      window.mod_filmix.is_max_qualitie = true;
      token = Lampa.Storage.get('filmix_token', '') + '';
      dev_token = Utils.filmixToken(Utils.randomHex(16), token || 'aaaabbbbccccddddeeeeffffaaaabbbb');

      if (token) {
        var url = embed + 'user_profile' + dev_token;
        network.clear();
        network.timeout(15000);
        network["native"](component.proxyLink(url, prox, prox_enc, 'enc2t'), function (found) {
          if (found && found.user_data) {
            window.mod_filmix.max_qualitie = 720;
            if (found.user_data.is_pro) window.mod_filmix.max_qualitie = 1080;
            if (found.user_data.is_pro_plus) window.mod_filmix.max_qualitie = 2160;
          }

          end_search();
        }, function (a, c) {
          end_search();
        }, false, {
          headers: headers
        });
      } else end_search();
    } else end_search();

    function end_search() {
      var url = embed + 'post/' + filmix_id + (abuse ? abuse_token : dev_token);
      url = abuse ? component.proxyLink(url, prox3, '', '') : component.proxyLink(url, prox, prox_enc, 'enc2t');

      var not_found = function not_found(str) {
        if (abuse && abuse_error) success(abuse_error);else if (!abuse && abuse_token) find(filmix_id, true, null, true);else if (str) component.empty(str);else component.emptyForQuery(select_title);
      };

      network.clear();
      network.timeout(15000);
      network["native"](url, function (found) {
        var pl_links = found && found.player_links || {};

        if (pl_links.movie && Object.keys(pl_links.movie).length > 0 || pl_links.playlist && Object.keys(pl_links.playlist).length > 0) {
          if (!abuse && abuse_token && checkAbuse(found)) find(filmix_id, true, found);else success(found, low_quality);
        } else {
          console.log('Filmix', 'not found:', filmix_id, pl_links.movie, pl_links.playlist);
          not_found();
        }
      }, function (a, c) {
        console.log('Filmix', 'error:', filmix_id, network.errorDecode(a, c));
        not_found(network.errorDecode(a, c));
      }, false, {
        headers: headers
      });
    }
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
   * Успешно, есть данные
   * @param {Object} json
   */


  function success(json, low_quality) {
    component.loading(false);
    extractData(json, low_quality);
    filter();
    append(filtred());
  }

  function checkAbuse(data) {
    var pl_links = data.player_links || {};

    if (pl_links.movie && Object.keys(pl_links.movie).length > 0) {

      for (var ID in pl_links.movie) {
        var file = pl_links.movie[ID];
        var stream_url = file.link || '';

        if (file.translation === 'Заблокировано правообладателем!' && stream_url.indexOf('/abuse_') !== -1) {
          var found = stream_url.match(/https?:\/\/[^\/]+(\/s\/[^\/]*\/)/);

          if (found) {
            {
              secret = '$1' + found[1];
              secret_url = '';
            }

            console.log('Filmix', 'abuse:', data.id, Object.keys(pl_links.movie).length);
            return true;
          }
        }
      }
    }

    return false;
  }
  /**
   * Получить информацию о фильме
   * @param {Arrays} data
   */


  function extractData(data, low_quality) {
    extract = {};
    var filmix_max_qualitie = low_quality ? 480 : debug ? 2160 : window.mod_filmix.max_qualitie;
    var pl_links = data.player_links || {};

    if (pl_links.playlist && Object.keys(pl_links.playlist).length > 0) {
      var seasons = [];
      var seas_num = 0;

      for (var season_id in pl_links.playlist) {
        var season = pl_links.playlist[season_id];
        var voices = [];
        ++seas_num;

        for (var voice_id in season) {
          var episodes = season[voice_id];
          var items = [];
          var epis_num = 0;

          for (var episode_id in episodes) {
            var file = episodes[episode_id];
            ++epis_num;
            var quality_eps = file.qualities.filter(function (qualitys) {
              return !isNaN(qualitys) && qualitys <= filmix_max_qualitie;
            });
            quality_eps.sort(function (a, b) {
              return b - a;
            });
            var max_quality = quality_eps[0];

            if (max_quality) {
              var stream_url = file.link || '';
              stream_url = component.fixLinkProtocol(stream_url, prefer_http, true);

              if (secret) {
                stream_url = stream_url.replace(/(https?:\/\/[^\/]+)\/s\/[^\/]*\//, secret);
                if (secret_url) stream_url = stream_url.replace(/^https?:\/\//, secret_url);
              }

              var seas_id = parseInt(season_id);
              var epis_id = parseInt(episode_id);

              if (isNaN(seas_id) || isNaN(epis_id)) {
                var s_e = stream_url.substring(stream_url.lastIndexOf('/'));
                var str_s_e = s_e.match(/s(\d+)e(\d+)_%s\.mp4/i);

                if (str_s_e) {
                  seas_id = parseInt(str_s_e[1]);
                  epis_id = parseInt(str_s_e[2]);
                }
              }

              if (isNaN(seas_id)) seas_id = seas_num;
              if (isNaN(epis_id)) epis_id = epis_num;
              items.push({
                season: seas_id,
                episode: epis_id,
                file: stream_url,
                quality: max_quality,
                qualities: quality_eps
              });
            }
          }

          if (items.length) {
            voices.push({
              id: voice_id,
              items: items
            });
          }
        }

        if (voices.length) {
          seasons.push({
            id: season_id,
            title: Lampa.Lang.translate('torrent_serial_season') + ' ' + (isNaN(season_id) ? seas_num : season_id),
            voices: voices
          });
        }
      }

      extract.seasons = seasons;
    } else if (pl_links.movie && Object.keys(pl_links.movie).length > 0) {
      var movies = [];

      for (var ID in pl_links.movie) {
        var _file = pl_links.movie[ID];
        var _max_quality = filmix_max_qualitie;

        var _stream_url = _file.link || '';

        _stream_url = component.fixLinkProtocol(_stream_url, prefer_http, true);

        if (secret) {
          _stream_url = _stream_url.replace(/(https?:\/\/[^\/]+)\/s\/[^\/]*\//, secret);
          if (secret_url) _stream_url = _stream_url.replace(/^https?:\/\//, secret_url);
        }

        var _quality_eps = _stream_url.match(/\[([\d,]*)\]\.mp4/i);

        if (_quality_eps) {
          _quality_eps = _quality_eps[1].split(',').map(function (quality) {
            return parseInt(quality);
          }).filter(function (quality) {
            return !isNaN(quality) && quality <= filmix_max_qualitie;
          });

          _quality_eps.sort(function (a, b) {
            return b - a;
          });

          _max_quality = _quality_eps[0];
        }

        if (_max_quality) {
          var file_url = _stream_url.replace(/\[[\d,]*\](\.mp4)/i, '%s$1');

          movies.push({
            translation: _file.translation,
            file: file_url,
            quality: _max_quality,
            qualities: _quality_eps
          });
        }
      }

      extract.movies = movies;
    }
  }
  /**
   * Найти поток
   * @param {Object} element
   * @returns string
   */


  function getFile(element) {
    var media = element.media || {};
    var file = media.file;
    var quality = false;

    if (file) {
      quality = {};

      if (media.qualities) {
        media.qualities.forEach(function (q) {
          quality[q + 'p'] = file.replace(/%s(\.mp4)/i, q + '$1');
        });
        file = file.replace(/%s(\.mp4)/i, media.qualities[0] + '$1');
      }
    }

    return {
      file: file,
      quality: quality
    };
  }
  /**
   * Построить фильтр
   */


  function filter() {
    filter_items = {
      season: extract.seasons ? extract.seasons.map(function (s) {
        return s.title;
      }) : [],
      voice: []
    };
    if (!filter_items.season[choice.season]) choice.season = 0;

    if (extract.seasons && extract.seasons[choice.season]) {
      filter_items.voice = extract.seasons[choice.season].voices.map(function (v) {
        return v.id;
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

    if (extract.seasons) {
      var season = extract.seasons[choice.season] || {};
      var voices = season.voices || [];
      var voice = voices[choice.voice] || {};
      var voice_name = Lampa.Utils.shortText(filter_items.voice[choice.voice] || '', 50);
      var items = voice.items || [];
      items.forEach(function (media) {
        filtred.push({
          title: component.formatEpisodeTitle(media.season, media.episode),
          quality: media.quality + 'p',
          info: voice_name ? ' / ' + voice_name : '',
          season: media.season,
          episode: media.episode,
          media: media
        });
      });
    } else if (extract.movies) {
      extract.movies.forEach(function (media) {
        filtred.push({
          title: media.translation || select_title,
          quality: media.quality + 'p',
          info: '',
          media: media
        });
      });
    }

    return filtred;
  }
  /**
   * Добавить видео
   * @param {Array} items
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
        if (object.movie.id) Lampa.Favorite.add('history', object.movie, 100);
        var extra = getFile(element);

        if (extra.file) {
          var playlist = [];
          var first = {
            url: component.getDefaultQuality(extra.quality, extra.file),
            quality: component.renameQualityMap(extra.quality),
            timeline: element.timeline,
            title: element.season ? element.title : select_title + (element.title == select_title ? '' : ' / ' + element.title)
          };

          if (element.season) {
            items.forEach(function (elem) {
              var ex = getFile(elem);
              playlist.push({
                url: component.getDefaultQuality(ex.quality, ex.file),
                quality: component.renameQualityMap(ex.quality),
                timeline: elem.timeline,
                title: elem.title
              });
            });
          } else {
            playlist.push(first);
          }

          if (playlist.length > 1) first.playlist = playlist;
          Lampa.Player.play(first);
          Lampa.Player.playlist(playlist);

          if (viewed.indexOf(hash_file) == -1) {
            viewed.push(hash_file);
            item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_star', {}, true) + '</div>');
            Lampa.Storage.set('online_view', viewed);
          }
        } else Lampa.Noty.show(Lampa.Lang.translate('online_mod_nolink'));
      });
      component.append(item);
      component.contextmenu({
        item: item,
        view: view,
        viewed: viewed,
        hash_file: hash_file,
        element: element,
        file: function file(call) {
          call(getFile(element));
        }
      });
    });
    component.start(true);
  }
}
