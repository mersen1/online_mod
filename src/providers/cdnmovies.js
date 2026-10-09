function cdnmovies(component, _object) {
  var network = new Lampa.Reguest();
  var extract = [];
  var object = _object;
  var select_title = '';
  var prefer_http = Lampa.Storage.field('online_mod_prefer_http') === true;
  var prefer_mp4 = Lampa.Storage.field('online_mod_prefer_mp4') === true;
  var prox = component.proxy('cdnmovies');
  var host = Utils.decodeSecret([36, 63, 17, 6, 17, 0, 104, 90, 4, 49, 40, 46, 10, 30, 6, 20, 40, 27, 30, 49, 34, 46]);
  var ref = host + '/';
  var user_agent = 'Mozilla/5.0 (Linux; Android 10; K; client) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.6167.178 Mobile Safari/537.36';
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

  var embed_host = 'https://cdnmovies-stream.online';
  var embed = embed_host + '/';
  var prox_enc2 = '';

  if (prox) {
    prox_enc2 += 'param/Origin=' + encodeURIComponent(embed_host) + '/';
    prox_enc2 += 'param/Referer=' + encodeURIComponent(embed) + '/';
    prox_enc2 += 'param/User-Agent=' + encodeURIComponent(user_agent) + '/';
  }

  var filter_items = {};
  var choice = {
    season: 0,
    voice: 0,
    voice_name: ''
  };

  function cdn_api_search(api, callback, error) {
    var call_success = function call_success(str) {
      if (callback) callback(str || '');
    };

    var call_error = function call_error(a, c) {
      if ((a.status == 404 || a.status == 403) && (!a.responseText || a.responseText.indexOf('<title>Not Found</title>') !== -1 || a.responseText.indexOf('Не найдено!') !== -1 || a.responseText.indexOf('Контент не найден или недоступен в вашем регионе!') !== -1) || a.status == 0 && a.statusText !== 'timeout') {
        if (callback) callback('');
      } else if (error) error(network.errorDecode(a, c));
    };

    {
      var meta = $('head meta[name="referrer"]');
      var referrer = meta.attr('content') || 'never';
      meta.attr('content', 'origin');

      try {
        network.clear();
        network.timeout(10000);
        network["native"](component.proxyLink(embed + api, prox, prox_enc), call_success, call_error, false, {
          dataType: 'text',
          headers: headers
        });
      } finally {
        meta.attr('content', referrer);
      }
    }
  }
  /**
   * Начать поиск
   * @param {Object} _object
   * @param {String} kinopoisk_id
   */


  this.search = function (_object, kinopoisk_id) {
    object = _object;
    select_title = object.search || object.movie.title;

    var empty = function empty() {
      component.emptyForQuery(select_title);
    };

    var error = component.empty.bind(component);
    var api = (+kinopoisk_id ? 'kinopoisk/' : 'imdb/') + kinopoisk_id + '/iframe';
    cdn_api_search(api, function (str) {
      parse(str || '', function () {
        if (!object.clarification && object.movie.imdb_id && kinopoisk_id != object.movie.imdb_id) {
          cdn_api_search('imdb/' + object.movie.imdb_id + '/iframe', function (str) {
            parse(str || '', empty);
          }, error);
        } else empty();
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

  function parse(str, empty) {
    str = (str || '').replace(/\n/g, '');
    var find = str.match(/Playerjs\(({.*?})\);/);
    var json;

    try {
      json = find && (0, eval)('"use strict"; (function(){ return ' + find[1] + '; })();');
    } catch (e) {}

    var video;
    var player = json && json.file && decode(json.file);

    try {
      video = player && JSON.parse(player);
    } catch (e) {}

    if (video && video.length && video.forEach) {
      component.loading(false);
      extract = video;
      filter();
      append(filtred());
    } else empty();
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

    var trashList = ['wNp2wBTNcPRQvTC0_CpxCsq_8T1u9Q', 'md-Od2G9RWOgSa5HoBSSbWrCyIqQyY', 'kzuOYQqB_QSOL-xzN_Kz3kkgkHhHit', '6-xQWMh7ertLp8t_M9huUDk1M0VrYJ', 'RyTwtf15_GLEsXxnpU4Ljjd0ReY-VH'];
    var x = data.substring(2);
    trashList.forEach(function (trash) {
      x = x.replace('//' + enc(trash), '');
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


  function extractItemsPlaylist(str, url) {
    if (!str) return [];

    try {
      var items = component.parsePlaylist(str).map(function (item) {
        var quality = item.label.match(/(\d\d\d+)/);
        var link = item.links[0] || '';
        link = link.replace('/sundb.coldcdn.xyz/', '/sundb.nl/');
        link = component.fixLinkProtocol(link, prefer_http, true);
        if (prefer_mp4) link = link.replace(/(\.mp4):hls:manifest\.m3u8$/i, '$1');
        return {
          label: item.label,
          quality: quality ? parseInt(quality[1]) : NaN,
          file: component.proxyLink(link, prox, prox_enc2)
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
      call(element);
    } else error();
  }
  /**
   * Получить поток
   * @param {*} element
   */


  function getStream(element, call, error) {
    if (element.stream) return call(element);
    var url = element.file || '';

    if (startsWith(url, '[')) {
      parseStream(element, call, error, extractItemsPlaylist, url, '');
      return;
    }

    url = url.replace('/sundb.coldcdn.xyz/', '/sundb.nl/');
    url = component.fixLinkProtocol(url, prefer_http, true);
    if (prefer_mp4) url = url.replace(/(\.mp4):hls:manifest\.m3u8$/i, '$1');

    if (url) {
      element.stream = component.proxyLink(url, prox, prox_enc2);
      element.qualitys = false;
      call(element);
    } else error();
  }
  /**
   * Построить фильтр
   */


  function filter() {
    filter_items = {
      season: [],
      voice: []
    };
    var season_objs = [];
    extract.forEach(function (s) {
      if (s.folder) {
        s.title = s.title || s.comment || '';
        s.season_num = parseInt(s.title.match(/\d+/));
        season_objs.push(s);
      }
    });
    season_objs.sort(function (a, b) {
      var cmp = a.season_num - b.season_num;
      if (cmp) return cmp;
      if (a.title > b.title) return 1;
      if (a.title < b.title) return -1;
      return 0;
    });
    filter_items.season = season_objs.map(function (s) {
      return s.title;
    });
    if (!filter_items.season[choice.season]) choice.season = 0;
    var s = season_objs[choice.season];

    if (s && s.folder) {
      s.folder.forEach(function (e) {
        if (e.folder) {
          e.folder.forEach(function (v) {
            var voice = v.title || v.comment || '';
            if (filter_items.voice.indexOf(voice) == -1) filter_items.voice.push(voice);
          });
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

  function parseSubs(str) {
    if (!str) return false;
    var subtitles = component.parsePlaylist(str).map(function (item) {
      var link = item.links[0] || '';
      link = link.replace('/sundb.coldcdn.xyz/', '/sundb.nl/');
      link = component.fixLinkProtocol(link, prefer_http, true);
      return {
        label: item.label,
        url: component.processSubs(component.proxyLink(link, prox, prox_enc2))
      };
    });
    return subtitles.length ? subtitles : false;
  }
  /**
   * Отфильтровать файлы
   * @returns array
   */


  function filtred() {
    var filtred = [];
    extract.forEach(function (data) {
      if (data.folder) {
        var s_title = data.title || data.comment || '';

        if (s_title == filter_items.season[choice.season]) {
          data.folder.forEach(function (e) {
            if (e.folder) {
              var e_title = e.title || e.comment || '';
              var found = false;
              var found_broken = false;
              e.folder.forEach(function (v) {
                var voice = v.title || v.comment || '';

                if (!found && voice == filter_items.voice[choice.voice] && v.file) {
                  if (v.file.indexOf('//sarnage.cc/') !== -1) {
                    found_broken = true;
                  } else {
                    found = true;
                    var episode_num = parseInt(e_title.match(/\d+/));
                    var season_num = parseInt(s_title.match(/\d+/));
                    filtred.push({
                      title: component.formatEpisodeTitle(season_num, episode_num),
                      quality: '360p ~ 1080p',
                      info: ' / ' + Lampa.Utils.shortText(voice, 50),
                      season: season_num,
                      episode: episode_num,
                      file: v.file,
                      subtitles: parseSubs(v.subtitle)
                    });
                  }
                }
              });

              if (!found && found_broken) {
                e.folder.forEach(function (v) {
                  var voice = v.title || v.comment || '';

                  if (!found && voice == filter_items.voice[choice.voice] && v.file) {
                    found = true;
                    var episode_num = parseInt(e_title.match(/\d+/));
                    var season_num = parseInt(s_title.match(/\d+/));
                    filtred.push({
                      title: component.formatEpisodeTitle(season_num, episode_num),
                      quality: '360p ~ 1080p',
                      info: ' / ' + Lampa.Utils.shortText(voice, 50),
                      season: season_num,
                      episode: episode_num,
                      file: v.file,
                      subtitles: parseSubs(v.subtitle)
                    });
                  }
                });
              }
            }
          });
        }
      } else {
        filtred.push({
          title: data.title || data.comment || select_title,
          quality: '360p ~ 1080p',
          info: '',
          file: data.file,
          subtitles: parseSubs(data.subtitle)
        });
      }
    });
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
