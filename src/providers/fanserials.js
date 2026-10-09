function fanserials(component, _object) {
  var network = new Lampa.Reguest();
  var extract = [];
  var object = _object;
  var select_title = '';
  var select_id = '';
  var prefer_http = Lampa.Storage.field('online_mod_prefer_http') === true;
  var prox = component.proxy('fanserials');
  var prox_cdn = component.proxy('fanserials_cdn');
  var host = Utils.decodeSecret([95, 57, 28, 42, 55, 125, 28, 124, 25, 93, 66, 41, 7, 46, 48, 49, 92, 33, 25, 64, 26, 33, 7, 40, 32, 33, 90, 63, 23, 27, 69, 56], atob('RnVja0Zhbg=='));
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

  var embed = (prefer_http ? 'http:' : 'https:') + atob('Ly9sb21vbnQuc2l0ZS9ndC8=');
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

  this.search = function (_object, kinopoisk_id) {
    object = _object;
    select_id = kinopoisk_id;
    select_title = object.search || object.movie.title;

    if (isNaN(select_id)) {
      component.emptyForQuery(select_title);
      return;
    }

    var url = embed + select_id;
    url = Lampa.Utils.addUrlComponent(url, 'season=1');
    url = Lampa.Utils.addUrlComponent(url, 'episode=1');
    url = Lampa.Utils.addUrlComponent(url, 'alloff=true');
    network.clear();
    network.timeout(10000);
    network["native"](component.proxyLink(url, prox, prox_enc, 'enc2t'), function (str) {
      parse(str);
    }, function (a, c) {
      if (a.status == 404 && (!a.responseText || a.responseText.indexOf('Сериал не найден :(') !== -1) || a.status == 0 && a.statusText !== 'timeout') {
        component.emptyForQuery(select_title);
      } else component.empty(network.errorDecode(a, c));
    }, false, {
      dataType: 'text',
      headers: headers
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
  /**
   * Получить поток
   * @param {*} element
   */


  function parseStream(element, call, error, url, str) {
    var file = '';
    var quality = false;
    var subtitles = [];
    str = (str || '').replace(/\n/g, '');
    var find = str.match(/<div id="videoplayer[^>]*data-config=[^>]*>/);
    var player = find && $(find[0]);

    if (player) {
      var config = player.attr('data-config');
      var json;

      try {
        json = config && Lampa.Arrays.decodeJson(config, {});
      } catch (e) {}

      if (json && json.hls) {
        file = component.fixLink(json.hls, url);

        if (prox && !prox_cdn) {
          file = file.replace(/\/\/cdn(\d+)\./, '//s$1.');
        }
      }

      ['data-original_subtitle', 'data-ru_subtitle', 'data-en_subtitle', 'data-ua_subtitle'].forEach(function (sub) {
        var link = player.attr(sub);

        if (link) {
          subtitles.push({
            label: sub.replace('data-', '').replace('_subtitle', ''),
            url: component.processSubs(component.fixLink(link, url))
          });
        }
      });
    }

    if (file) {
      element.stream = file;
      element.qualitys = quality;
      element.subtitles = subtitles.length ? subtitles : false;
      call(element);
    } else error();
  }
  /**
   * Получить поток
   * @param {*} element
   */


  function getBaseStream(element, call, error) {
    if (element.stream) return call(element);
    var url = embed + select_id;
    url = Lampa.Utils.addUrlComponent(url, 'season=' + element.media.season);
    url = Lampa.Utils.addUrlComponent(url, 'episode=' + element.media.episode);
    url = Lampa.Utils.addUrlComponent(url, 'voice=' + element.media.voice_id);
    url = Lampa.Utils.addUrlComponent(url, 'alloff=true');
    network.clear();
    network.timeout(10000);
    network["native"](component.proxyLink(url, prox, prox_enc, 'enc2t'), function (str) {
      parseStream(element, call, error, url, str);
    }, function (a, c) {
      error();
    }, false, {
      dataType: 'text',
      headers: headers
    });
  }
  /**
   * Получить поток
   * @param {*} element
   */


  function getStream(element, call, error) {
    getBaseStream(element, function (element) {
      var file = element.stream || '';
      if (element.qualitys || element.parsed || !endsWith(file, '.m3u8')) return call(element);
      network.clear();
      network.timeout(10000);
      network["native"](component.proxyLink(file, prox_cdn, '', 'enc2t'), function (str) {
        var items = extractQuality(str, file);
        items = items.filter(function (elem) {
          return elem.quality > 0;
        });

        if (items.length) {
          file = items[0].file;
          var quality = {};
          items.forEach(function (item) {
            if (!quality[item.label]) quality[item.label] = item.file;
          });
          element.stream = file;
          element.qualitys = quality;
        }

        element.parsed = true;
        call(element);
      }, function (a, c) {
        call(element);
      }, false, {
        dataType: 'text'
      });
    }, error);
  }

  function extractQuality(str, url) {
    if (!str) return [];

    try {
      var items = component.parseM3U(str).filter(function (item) {
        return item.xstream;
      }).map(function (item) {
        var link = item.link;
        var quality = item.height;
        if (quality > 1440 && quality <= 2160) quality = 2160;else if (quality > 1080 && quality <= 1440) quality = 1440;else if (quality > 720 && quality <= 1080) quality = 1080;else if (quality > 480 && quality <= 720) quality = 720;else if (quality > 360 && quality <= 480) quality = 480;else if (quality > 240 && quality <= 360) quality = 360;
        return {
          label: quality ? quality + 'p' : '360p ~ 1080p',
          quality: quality,
          bandwidth: item.bandwidth,
          codecs: item.codecs,
          file: component.fixLink(link, url)
        };
      });
      items.sort(function (a, b) {
        if (b.quality > a.quality) return 1;
        if (b.quality < a.quality) return -1;
        if (b.bandwidth > a.bandwidth) return 1;
        if (b.bandwidth < a.bandwidth) return -1;
        if (b.label > a.label) return 1;
        if (b.label < a.label) return -1;
        return 0;
      });
      return items;
    } catch (e) {}

    return [];
  }

  function parse(str) {
    component.loading(false);
    str = (str || '').replace(/\n/g, '');
    var find = str.match(/<div id="inputData"[^>]*>(\{.*?\})<\/div>/);
    var json;

    try {
      json = find && Lampa.Arrays.decodeJson(find[1], {});
    } catch (e) {}

    if (json) {
      extract = json;
      filter();
      append(filtred());
    } else {
      find = str.match(/>(Контент недоступен в вашем регионе[^<]*)</);
      if (find) component.empty(find[1]);else component.emptyForQuery(select_title);
    }
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

    for (var s_num in extract) {
      if (filter_items.season_num.indexOf(s_num) == -1) filter_items.season_num.push(s_num);
    }

    filter_items.season_num.sort(function (a, b) {
      return a - b;
    });
    filter_items.season_num.forEach(function (s_num) {
      filter_items.season.push(Lampa.Lang.translate('torrent_serial_season') + ' ' + s_num);
    });
    if (!filter_items.season[choice.season]) choice.season = 0;

    if (filter_items.season[choice.season]) {
      var _s_num = filter_items.season_num[choice.season];
      var episodes = extract[_s_num] || {};

      for (var e_num in episodes) {
        var translations = episodes[e_num] || [];
        translations.forEach(function (translation) {
          var v_id = translation.voice_id || '';

          if (!filter_items.voice_info.some(function (v) {
            return v.id == v_id;
          })) {
            filter_items.voice.push(translation.voice_name || '');
            filter_items.voice_info.push({
              id: v_id
            });
          }
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

    if (filter_items.season[choice.season] && filter_items.voice_info[choice.voice]) {
      (function () {
        var s_num = filter_items.season_num[choice.season];
        var v_id = filter_items.voice_info[choice.voice].id;
        var voice = filter_items.voice[choice.voice];
        var episodes = extract[s_num] || {};

        var _loop = function _loop(e_num) {
          var translations = episodes[e_num] || [];
          translations.forEach(function (translation) {
            if (translation.voice_id == v_id) {
              filtred.push({
                title: component.formatEpisodeTitle(s_num, e_num),
                quality: '360p ~ 1080p',
                info: ' / ' + Lampa.Utils.shortText(voice, 50),
                season: s_num,
                episode: e_num,
                media: translation
              });
            }
          });
        };

        for (var e_num in episodes) {
          _loop(e_num);
        }
      })();
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
