function vibix(component, _object) {
  var network = new Lampa.Reguest();
  var extract = {};
  var object = _object;
  var select_title = '';
  var prox = component.proxy('vibix');
  var user_agent = Utils.baseUserAgent();
  var auth = Utils.decodeSecret([44, 23, 81, 32, 63, 32, 116, 90, 0, 115, 89, 14, 116, 10, 30, 49, 1, 61, 3, 115, 57, 64, 8, 57, 45, 21, 28, 88, 113, 14, 94, 29, 118, 56, 25, 102, 5, 15, 90, 29, 33, 68, 123, 6, 40, 35, 33, 91, 127, 62, 28, 65, 9, 49, 104, 55, 97, 14, 8, 46], atob('VmliaXhBdXRo'));
  var key = Utils.decodeSecret([60, 11, 99, 54, 44, 49, 45, 25, 5, 34, 58, 39, 72, 60, 99, 101, 34, 2, 4, 3, 25, 29, 94, 59, 45, 53, 44, 13, 115, 50, 0, 51], atob('VmliaXhBdXRo'));
  var sign_key = Utils.decodeSecret([60, 38, 113, 24, 14, 63, 62, 42, 85, 44, 52, 20, 72, 43, 52, 3, 109, 89, 117, 60, 10, 29, 65, 11, 40, 3, 102, 56, 5, 17, 36, 55], atob('VmliaXhBdXRo'));
  var headers = Lampa.Platform.is('android') ? {
    'User-Agent': user_agent,
    'Authorization': auth
  } : {};
  var prox_enc = '';

  if (prox) {
    prox_enc += 'param/User-Agent=' + encodeURIComponent(user_agent) + '/';
    prox_enc += 'param/Authorization=' + encodeURIComponent(auth) + '/';
  }

  var embed = atob('aHR0cHM6Ly92aWJpeC5vcmcvYXBpL3YxL3B1Ymxpc2hlci92aWRlb3Mv');
  var filter_items = {};
  var choice = {
    season: 0,
    voice: 0,
    voice_name: ''
  };

  function vibix_api_search(api, callback, error) {
    network.clear();
    network.timeout(15000);
    network["native"](component.proxyLink(embed + api, prox, prox_enc, 'enc2t'), function (json) {
      if (callback) callback(json);
    }, function (a, c) {
      if (a.status == 404 && (!a.responseText || a.responseText.indexOf('"Video not found"') !== -1)) {
        if (callback) callback('');
      } else if (error) error(network.errorDecode(a, c));
    }, false, {
      headers: headers
    });
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
    var api = (+kinopoisk_id ? 'kp/' : 'imdb/') + encodeURIComponent(kinopoisk_id);
    vibix_api_search(api, function (json) {
      getPage(json, function () {
        if (!object.clarification && object.movie.imdb_id && kinopoisk_id != object.movie.imdb_id) {
          vibix_api_search('imdb/' + encodeURIComponent(object.movie.imdb_id), function (json) {
            getPage(json, empty);
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

  function parseIFrame(iframe_url) {
    var serial = iframe_url.match(/\/embed-serials\/(\d+)/);
    var movie = iframe_url.match(/\/embed\/(\d+)/);

    if (serial) {
      return {
        type: 'serial',
        id: serial[1]
      };
    } else if (movie) {
      return {
        type: 'movie',
        id: movie[1]
      };
    }

    return null;
  }

  function xorDecrypt(str) {
    var key_len = key.length;
    var len = str.length;
    var result = '';

    for (var i = 0; i < len; i++) {
      result += String.fromCharCode(str.charCodeAt(i) ^ key.charCodeAt(i % key_len));
    }

    return result;
  }

  function binaryToUtf8(str) {
    if (typeof TextDecoder !== "undefined") {
      try {
        var arr = new Uint8Array(str.length);

        for (var i = 0; i < str.length; i++) {
          arr[i] = str.charCodeAt(i);
        }

        return new TextDecoder('utf-8').decode(arr);
      } catch (e) {}
    }

    try {
      return decodeURIComponent(escape(str));
    } catch (e) {
      return str;
    }
  }

  function decrypt(json) {
    try {
      var str = json.p;

      if (json.v == 1) {
        if (true) {
          str = str.split('').reverse().join('');
        }

        str = binaryToUtf8(xorDecrypt(atob(str)));
      }

      return JSON.parse(str);
    } catch (e) {
      return {};
    }
  }

  function sign(key, secret) {
    function encode(msg) {
      var x = 0;

      if (msg.length === 0) {
        return x.toString();
      }

      for (var i = 0; i < msg.length; i++) {
        var c = msg.charCodeAt(i);
        x = (x << 5) - x + c;
        x = x & x;
      }

      var y = Math.abs(x).toString(16);

      while (y.length < 8) {
        y = '0' + y;
      }

      var z = [y];

      for (var j = 0; j < msg.length; j += 3) {
        var part = msg.substring(j, j + 3);
        var r = 0;

        for (var k = 0; k < part.length; k++) {
          r += part.charCodeAt(k);
        }

        z.push(r.toString(16));
      }

      return z.join('');
    }

    var salt1 = '';
    var salt2 = '';

    if (key.length > 64) {
      key = encode(key);
    }

    while (key.length < 64) {
      key += "\0";
    }

    for (var i = 0; i < 64; i++) {
      salt1 += String.fromCharCode(key.charCodeAt(i) ^ 54);
      salt2 += String.fromCharCode(key.charCodeAt(i) ^ 92);
    }

    var sign0 = encode(salt1 + secret);
    return encode(salt2 + sign0);
  }

  function getPage(json, empty) {
    var info = json && json.iframe_url && parseIFrame(json.iframe_url);

    if (!info) {
      empty();
      return;
    }

    json.iframe_url = json.iframe_url.replace(/^(https?:\/\/)\d+\./, Utils.decodeSecret([73, 84, 65, 114, 83, 112, 126, 79, 112, 69, 92, 75], atob('ZGViYmx5ZA==')));
    var parsed = Utils.parseURL(json.iframe_url);
    var host = parsed.origin;
    var ref = parsed.origin + parsed.pathname;
    var headers2 = Lampa.Platform.is('android') ? {
      'User-Agent': user_agent,
      'Origin': host,
      'Referer': ref,
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin'
    } : {};
    var prox_enc2 = '';

    if (prox) {
      prox_enc2 += 'param/User-Agent=' + encodeURIComponent(user_agent) + '/';
      prox_enc2 += 'param/Origin=' + encodeURIComponent(host) + '/';
      prox_enc2 += 'param/Referer=' + encodeURIComponent(ref) + '/';
      prox_enc2 += 'param/Sec-Fetch-Dest=empty/';
      prox_enc2 += 'param/Sec-Fetch-Mode=cors/';
      prox_enc2 += 'param/Sec-Fetch-Site=same-origin/';
    }

    var domain = Utils.decodeSecret([4, 3, 5, 37, 9, 34, 97, 20, 47, 30, 24, 1], atob('ZGViYmx5ZA=='));
    var iframe_url = json.iframe_url;
    var timestamp = Math.floor(Date.now() / 1000);
    var nonce = Math.random().toString(36).substring(2, 15);
    var secret = [domain, iframe_url, timestamp.toString(), nonce].join('|');
    var sig = sign(sign_key, secret);
    var url = host + (info.type === 'movie' ? '/api/v1/embed/' : '/api/v1/embed-serials/') + info.id;
    url = Lampa.Utils.addUrlComponent(url, 'domain=' + encodeURIComponent(domain));
    url = Lampa.Utils.addUrlComponent(url, 'iframe_url=' + encodeURIComponent(iframe_url));
    url = Lampa.Utils.addUrlComponent(url, 'sig=' + encodeURIComponent(sig));
    url = Lampa.Utils.addUrlComponent(url, 'ts=' + timestamp);
    url = Lampa.Utils.addUrlComponent(url, 'nonce=' + encodeURIComponent(nonce));
    url = Lampa.Utils.addUrlComponent(url, 'nc=' + Math.floor(new Date().getTime() / 60000));
    network.clear();
    network.timeout(15000);
    network["native"](component.proxyLink(url, prox, prox_enc2, 'enc2t'), function (json) {
      if (json && Object.keys(json).length == 2 && typeof json.p === 'string' && json.v != null) {
        json = decrypt(json);
      }

      if (json && json.data && json.data.playlist && json.data.playlist.length && json.data.playlist.forEach) {
        component.loading(false);
        extract = json.data;
        filter();
        append(filtred());
      } else empty();
    }, function (a, c) {
      empty();
    }, false, {
      headers: headers2
    });
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
    extract.playlist.forEach(function (s) {
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
        var label = item.label;

        if (startsWith(label, 'MP4 ')) {
          label = label.substring('MP4 '.length).trim();
        }

        var quality = label.match(/(\d\d\d+)/);
        var file = item.links[0] || '';
        return {
          label: label,
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
    extract.playlist.forEach(function (data) {
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
