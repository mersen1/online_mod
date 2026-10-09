function lumex2(component, _object) {
  var network = new Lampa.Reguest();
  var extract = [];
  var object = _object;
  var select_title = '';
  var is_playlist = false;
  var embed = atob('aHR0cHM6Ly9hcGkubGFtcGEuc3RyZWFtL2x1bWV4Lw==');
  var api_suffix = '/' + encodeURIComponent(btoa(window.location.href));
  var cub_id = encodeURIComponent(btoa(Lampa.Storage.get('account', '{}').email || 'none'));
  var filter_items = {};
  var choice = {
    season: 0,
    voice: 0,
    voice_name: ''
  };

  function lumex_api(api, callback, error) {
    var error_check = function error_check(a, c) {
      if (a.status == 404 || a.status == 500 || a.status == 0 && a.statusText !== 'timeout') {
        if (callback) callback('');
      } else if (error) error(network.errorDecode(a, c));
    };

    var success_check = function success_check(json) {
      callback(json);
    };

    network.clear();
    network.timeout(20000);
    network["native"](api, success_check, error_check);
  }
  /**
   * Начать поиск
   * @param {Object} _object
   * @param {String} kinopoisk_id
   */


  this.search = function (_object, kinopoisk_id, data) {
    object = _object;
    select_title = object.search || object.movie.title;
    var error = component.empty.bind(component);
    var src = embed + 'sId/' + encodeURIComponent(object.movie.id) + '/mod/';

    if (data && data[0] && data[0].content_type && data[0].id) {
      var imdb_id = data[0].imdb_id || 'null';
      var kp_id = data[0].kp_id || 'null';
      src += encodeURIComponent(kp_id) + '/' + encodeURIComponent(imdb_id);
    } else {
      var _imdb_id = (+kinopoisk_id ? !object.clarification && object.movie.imdb_id : kinopoisk_id) || 'null';

      var _kp_id = +kinopoisk_id ? kinopoisk_id : 'null';

      src += encodeURIComponent(_kp_id) + '/' + encodeURIComponent(_imdb_id);
    }

    var original_title = !object.clarification && (object.movie.original_title || object.movie.original_name) || '';
    var search_date = object.search_date || !object.clarification && (object.movie.release_date || object.movie.first_air_date || object.movie.last_air_date) || '0000';
    var search_year = parseInt((search_date + '').slice(0, 4));
    component.checkMyIp(function () {
      var ip = Utils.getMyIp();

      if (!ip) {
        error();
        return;
      }

      var api = src + '/' + cub_id + api_suffix;
      api = Lampa.Utils.addUrlComponent(api, 'ip=' + encodeURIComponent(ip));
      api = Lampa.Utils.addUrlComponent(api, 'search=' + encodeURIComponent(select_title));
      api = Lampa.Utils.addUrlComponent(api, 'original_title=' + encodeURIComponent(original_title));
      api = Lampa.Utils.addUrlComponent(api, 'year=' + search_year);
      lumex_api(api, function (json) {
        if (json) success(json);else component.emptyForQuery(select_title);
      }, error);
    });
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

  function success(json, cookie) {
    component.loading(false);

    if (json && json.folder && Lampa.Arrays.getKeys(json.folder).length) {
      if (json.folder.forEach) {
        extract = json.folder;
        is_playlist = false;
      } else {
        extract = [];
        is_playlist = true;

        for (var voice in json.folder) {
          var seasons = json.folder[voice];

          if (!seasons.forEach) {
            var _loop = function _loop(season_id) {
              var episodes = seasons[season_id];

              if (episodes.forEach) {
                var s = extract.filter(function (s) {
                  return s.season_id === season_id;
                })[0];

                if (!s) {
                  s = {
                    season_id: season_id,
                    title: Lampa.Lang.translate('torrent_serial_season') + ' ' + season_id,
                    voices: []
                  };
                  extract.push(s);
                }

                s.voices.push({
                  title: voice,
                  episodes: episodes
                });
              }
            };

            for (var season_id in seasons) {
              _loop(season_id);
            }
          }
        }

        extract.sort(function (a, b) {
          return a.season_id - b.season_id;
        });
      }

      filter();
      append(filtred());
    } else component.emptyForQuery(select_title);
  }
  /**
   * Построить фильтр
   */


  function filter() {
    filter_items = {
      season: is_playlist ? extract.map(function (s) {
        return s.title;
      }) : [],
      voice: []
    };
    if (!filter_items.season[choice.season]) choice.season = 0;

    if (is_playlist) {
      var season = extract[choice.season];

      if (season && season.voices) {
        season.voices.forEach(function (voice) {
          filter_items.voice.push(voice.title);
        });
      }
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

    if (is_playlist) {
      var season = extract[choice.season];

      if (season && season.voices) {
        var voice_title = filter_items.voice[choice.voice];
        season.voices.forEach(function (voice) {
          if (voice.title == voice_title && voice.episodes) {
            voice.episodes.forEach(function (episode) {
              filtred.push({
                title: component.formatEpisodeTitle(episode.season, episode.episode),
                quality: episode.quality || '360p ~ 1080p',
                info: ' / ' + voice_title,
                season: episode.season + '',
                episode: episode.episode,
                media: episode,
                subtitles: parseSubs(episode.subtitles),
                vast_url: episode.vast_url,
                vast_msg: episode.vast_msg
              });
            });
          }
        });
      }
    } else {
      extract.forEach(function (voice) {
        if (voice.url) {
          filtred.push({
            title: voice.title || select_title,
            quality: voice.quality || '360p ~ 1080p',
            info: '',
            media: voice,
            subtitles: parseSubs(voice.subtitles),
            vast_url: voice.vast_url,
            vast_msg: voice.vast_msg
          });
        }
      });
    }

    return filtred;
  }

  function parseSubs(tracks) {
    if (!(tracks && tracks.forEach)) return false;
    var subtitles = tracks.map(function (item) {
      return {
        label: item.label,
        url: item.url || ''
      };
    }).filter(function (s) {
      return s.url;
    });
    return subtitles.length ? subtitles : false;
  }
  /**
   * Получить поток
   * @param {*} element
   */


  function getStream(element, call, error) {
    if (element.stream) return call(element);
    var ip = Utils.getMyIp();
    if (!element.media.url || !ip) return error();
    var api = element.media.url + '/' + encodeURIComponent(ip) + api_suffix;
    lumex_api(api, function (json) {
      if (json && json.url) {
        element.stream = json.url;
        element.qualitys = json.qualitys || false;
        call(element);
      } else error();
    }, error);
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
        if (element.loading) return;
        if (object.movie.id) Lampa.Favorite.add('history', object.movie, 100);
        element.loading = true;
        getStream(element, function (element) {
          element.loading = false;
          var first = {
            url: component.getDefaultQuality(element.qualitys, element.stream),
            quality: component.renameQualityMap(element.qualitys),
            subtitles: element.subtitles,
            vast_url: element.vast_url,
            vast_msg: element.vast_msg,
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
                  vast_url: elem.vast_url,
                  vast_msg: elem.vast_msg,
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
