function videoseed(component, _object) {
  var network = new Lampa.Reguest();
  var extract = {};
  var object = _object;
  var select_title = '';
  var prox = component.proxy('videoseed');
  var host = atob('aHR0cHM6Ly9raW5vc2VyaWFscy5uZXQ=');
  var ref = host + '/';
  var user_agent = Utils.baseUserAgent();
  var embed = atob('aHR0cHM6Ly9hcGkudmlkZW9zZWVkLnR2L2FwaXYyLnBocA==');
  var suffix = Utils.decodeSecret([56, 36, 14, 19, 12, 7, 35, 22, 22, 58, 127, 45, 82, 19, 83, 10, 118, 70, 66, 57, 121, 124, 93, 71, 0, 12, 126, 20, 64, 109, 122, 47, 3, 68, 80, 9, 34, 71]);
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
    select_title = object.search || object.movie.title;

    if (isNaN(kinopoisk_id)) {
      component.emptyForQuery(select_title);
      return;
    }

    var empty = function empty() {
      component.emptyForQuery(select_title);
    };

    var error = component.empty.bind(component);
    var api = embed;
    api = Lampa.Utils.addUrlComponent(api, 'item=' + (object.movie.number_of_seasons ? 'serial' : 'movie'));
    api = Lampa.Utils.addUrlComponent(api, 'kp=' + encodeURIComponent(kinopoisk_id));
    api = Lampa.Utils.addUrlComponent(api, suffix);
    network.clear();
    network.timeout(10000);
    network["native"](component.proxyLink(api, prox, prox_enc, 'enc2t'), function (json) {
      if (json && json.data && json.data[0] && json.data[0].iframe) {
        var url = host + Utils.parseURL(json.data[0].iframe).pathname;
        url = Lampa.Utils.addUrlComponent(url, 'token=' + Utils.randomHex(32));
        network.clear();
        network.timeout(10000);
        network["native"](component.proxyLink(url, prox, prox_enc, 'enc2t'), function (str) {
          parse(str || '', empty);
        }, function (a, c) {
          error(network.errorDecode(a, c));
        }, false, {
          dataType: 'text',
          headers: headers
        });
      } else empty();
    }, function (a, c) {
      error(network.errorDecode(a, c));
    }, false, {
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

  function parse(str, empty) {
    str = (str || '').replace(/\n/g, '');
    var json;
    var find = str.match(/Playerjs\(({.*?})\);/) || str.match(/var +plr_config *= *({.*?});/);

    if (find) {
      try {
        json = find && (0, eval)('"use strict"; (function(){ var token = "", domain_name = ""; return ' + find[1] + '; })();');
      } catch (e) {}
    } else {
      find = str.match(/Playerjs\("([^"]*)"\);/) || str.match(/var +plr_config *= *"([^"]*)";/);
      var player = find && decode(find[1]);

      try {
        json = player && JSON.parse(player);
      } catch (e) {}
    }

    if (json && json.file && typeof json.file === 'string') {
      json.file = decode(json.file);

      try {
        json.file = JSON.parse(json.file);
      } catch (e) {
        json = {
          file: [json]
        };
      }
    }

    if (json && json.file && json.file.length && json.file.forEach) {
      component.loading(false);
      extract = json;
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

    var trashList = [atob('YTBCZnREaUZaVXNLV3A2d0o5VnloMmxIcWoxQ2JjOGVuTVlQQVQ3VGFialpqdkcySWZaRU9XYm9ZdDFvUTZPSw=='), atob('NnNlbFdvNUcwcjczNGttWm5hSHZZSmpFU3VpY1BJTGRYVGJ0WHUwcTR4Q3hWbmJaaDRKWFRKRElOeXNJRXY2aQ=='), atob('U0hiTkJZa085VkNoeTNtMjg1NnF3WEljS0ZUQXAwTTdXbjFyUllvY1lVbmFLeThXNkJsekdlUUhnMjFYNmZGbg=='), atob('QWw2aXhzYlZuQ1dlZHBSd0hjdjdHTGhNWTFUeTl6YXIwU1pmS29PNk9rM3c1ejRJbUVqNjFidkRCdEhQSXF0Mg=='), atob('WEV6bjVZUE9sRnM5VndjdThKMzRmdEh5R1FheDFXNzZoQUNlWjBEb0RNckg4TGQ1aGhqNVd6em5Md2c3amZnVg==')];
    var x = data.substring(2);
    trashList.forEach(function (trash) {
      x = x.replace('|||' + enc(trash), '');
    });

    try {
      x = dec(x);
    } catch (e) {
      x = '';
    }

    return x;
  }

  function extractVoices(str) {
    var voices = {};
    var items = extractItems(str);
    items.forEach(function (item) {
      var prev = voices[item.voice || ''];
      var prev_items = prev && prev.items || [];
      prev_items.push(item);

      if (!prev || item.quality > prev.quality) {
        voices[item.voice || ''] = {
          quality: item.quality,
          items: prev_items
        };
      }
    });
    return voices;
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
    extract.file.forEach(function (s) {
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
        } else if (typeof e.file === 'string') {
          e.file_voices = extractVoices(e.file);

          for (var voice in e.file_voices) {
            if (voice && filter_items.voice.indexOf(voice) == -1) filter_items.voice.push(voice);
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
   * Получить потоки
   * @param {String} str
   * @param {String} voice
   * @returns array
   */


  function extractItems(str, voice) {
    if (!str) return [];

    try {
      if (!startsWith(str, '[')) str = '[]' + str;
      var list = component.parsePlaylist(str);
      list.forEach(function (el) {
        if (el.voice) el.voice = el.voice.trim();
      });

      if (voice) {
        var tmp = list.filter(function (el) {
          return el.voice == voice;
        });

        if (tmp.length) {
          list = tmp;
        } else {
          list = list.filter(function (el) {
            return typeof el.voice === 'undefined';
          });
        }
      }

      var items = list.map(function (item) {
        var quality = item.label.match(/(\d\d\d+)/);
        var file = item.links[0] || '';
        return {
          label: item.label,
          quality: quality ? parseInt(quality[1]) : NaN,
          voice: item.voice,
          file: file
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

  function parseSubs(str) {
    if (!str) return false;
    var subtitles = component.parsePlaylist(str).map(function (item) {
      var link = item.links[0] || '';
      return {
        label: item.label,
        url: component.processSubs(link)
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
    extract.file.forEach(function (data) {
      if (data.folder) {
        var s_title = data.title || data.comment || '';

        if (s_title == filter_items.season[choice.season]) {
          var season_num = parseInt(s_title.match(/\d+/));
          data.folder.forEach(function (e) {
            var e_title = e.title || e.comment || '';
            var episode_num = parseInt(e_title.match(/\d+/));
            e_title = e_title.replace(/\d+/, '').replace(/серия/i, '').trim();

            if (e.folder) {
              e.folder.forEach(function (v) {
                var voice = v.title || v.comment || '';

                if (voice == filter_items.voice[choice.voice] && v.file) {
                  var items = extractItems(v.file);
                  filtred.push({
                    title: component.formatEpisodeTitle(season_num, episode_num, e_title),
                    quality: items[0] && items[0].quality ? items[0].quality + 'p' : '360p ~ 1080p',
                    info: ' / ' + Lampa.Utils.shortText(voice, 50),
                    season: season_num,
                    episode: episode_num,
                    media: items,
                    subtitles: parseSubs(v.subtitle)
                  });
                }
              });
            } else if (e.file_voices) {
              var voice = filter_items.voice[choice.voice] || '';
              var v = e.file_voices[voice];

              if (!v) {
                voice = '';
                v = e.file_voices[voice];
              }

              if (v) {
                filtred.push({
                  title: component.formatEpisodeTitle(season_num, episode_num, e_title),
                  quality: v.quality ? v.quality + 'p' : '360p ~ 1080p',
                  info: voice ? ' / ' + Lampa.Utils.shortText(voice, 50) : '',
                  season: season_num,
                  episode: episode_num,
                  media: v.items,
                  subtitles: parseSubs(e.subtitle)
                });
              }
            }
          });
        }
      } else {
        if (!data.file_voices && data.file && typeof data.file === 'string') {
          data.file_voices = extractVoices(data.file);
        }

        if (data.file_voices) {
          var subtitles = parseSubs(data.subtitle);

          for (var voice in data.file_voices) {
            var v = data.file_voices[voice];
            filtred.push({
              title: voice || data.title || data.comment || select_title,
              quality: v.quality ? v.quality + 'p' : '360p ~ 1080p',
              info: '',
              media: v.items,
              subtitles: subtitles
            });
          }
        }
      }
    });
    return filtred;
  }
  /**
   * Найти поток
   * @param {Object} element
   * @returns string
   */


  function getFile(element) {
    var file = '';
    var quality = false;
    var items = element.media;

    if (items && items.length) {
      file = items[0].file;
      quality = {};
      items.forEach(function (item) {
        quality[item.label] = item.file;
      });
    }

    return {
      file: file,
      quality: quality
    };
  }
  /**
   * Показать файлы
   */


  function append(items) {
    component.reset();
    var viewed = Lampa.Storage.cache('online_view', 5000, []);
    items.forEach(function (element) {
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
            subtitles: element.subtitles,
            timeline: element.timeline,
            title: element.season ? element.title : select_title + (element.title == select_title ? '' : ' / ' + element.title)
          };

          if (element.season) {
            items.forEach(function (elem) {
              var ex = getFile(elem);
              playlist.push({
                url: component.getDefaultQuality(ex.quality, ex.file),
                quality: component.renameQualityMap(ex.quality),
                subtitles: elem.subtitles,
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
        file: function file(call) {
          call(getFile(element));
        }
      });
    });
    component.start(true);
  }
}
