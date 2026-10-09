function cdnvideohub(component, _object) {
  var network = Utils.createRequest(component);
  this.cancel = function () { network.clear(); };
  var extract = {};
  var object = _object;
  var select_title = '';
  var prefer_http = Lampa.Storage.field('online_mod_prefer_http') === true;
  var prox = component.proxy('cdnvideohub');
  var user_agent = Utils.baseUserAgent();
  var prox_enc = '';

  if (prox) {
    prox_enc += 'param/Origin=/';
    prox_enc += 'param/Referer=/';
    prox_enc += 'param/User-Agent=' + encodeURIComponent(user_agent) + '/';
  }

  var embed = atob('aHR0cHM6Ly9wbGFwaS5jZG52aWRlb2h1Yi5jb20vYXBpL3YxL3BsYXllci9zdi8=');
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

    var url = Lampa.Utils.addUrlComponent(embed + atob('cGxheWxpc3Q/cHViPTEyJmFnZ3I9a3A='), 'id=' + kinopoisk_id);
    network.clear();
    network.timeout(10000);
    network["native"](component.proxyLink(url, prox, prox_enc), function (json) {
      parse(json);
    }, function (a, c) {
      if (a.status == 500 && !a.responseText || a.status == 0 && a.statusText !== 'timeout') {
        parse(null);
      } else component.empty(network.errorDecode(a, c));
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

  function parse(json) {
    component.loading(false);

    if (json && json.items && json.items.length && json.items.forEach) {
      var seasons = [];
      var items = json.items;
      items.sort(function (a, b) {
        var cmp = (a.season || 0) - (b.season || 0);
        if (cmp) return cmp;
        cmp = (a.episode || 0) - (b.episode || 0);
        if (cmp) return cmp;
        if ((a.voiceStudio || a.voiceType || '') > (b.voiceStudio || b.voiceType || '')) return 1;
        if ((a.voiceStudio || a.voiceType || '') < (b.voiceStudio || b.voiceType || '')) return -1;
        cmp = (a.vkId || 0) - (b.vkId || 0);
        return cmp;
      });
      items.forEach(function (data) {
        if (data.season != null) {
          var s = seasons.filter(function (s) {
            return s.id === data.season;
          })[0];

          if (!s) {
            s = {
              id: data.season,
              title: Lampa.Lang.translate('torrent_serial_season') + ' ' + data.season,
              voices: []
            };
            seasons.push(s);
          }

          var voice = data.voiceStudio || data.voiceType || '';
          if (s.voices.indexOf(voice) == -1) s.voices.push(voice);
        }
      });
      extract = {
        title_name: json.titleName || json.title_name || select_title,
        items: items,
        seasons: seasons
      };
      filter();
      append(filtred());
    } else component.emptyForQuery(select_title);
  }
  /**
   * Построить фильтр
   */


  function filter() {
    filter_items = {
      season: extract.seasons.map(function (s) {
        return s.title;
      }),
      voice: []
    };
    if (!filter_items.season[choice.season]) choice.season = 0;
    var s = extract.seasons[choice.season];
    if (s) filter_items.voice = s.voices;
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
      extract.items.forEach(function (data) {
        var voice = data.voiceStudio || data.voiceType || '';

        if (data.season == season_id && voice == filter_items.voice[choice.voice]) {
          filtred.push({
            title: component.formatEpisodeTitle(season_id, data.episode),
            quality: '360p ~ 1080p',
            info: ' / ' + Lampa.Utils.shortText(voice, 50) + (data.vkId ? ' / id: ' + data.vkId : ''),
            data_id: data.vkId,
            season: '' + season_id,
            episode: data.episode,
            media: data
          });
        }
      });
    } else {
      extract.items.forEach(function (data) {
        filtred.push({
          title: data.voiceStudio || data.voiceType || extract.title_name,
          quality: '360p ~ 1080p',
          info: data.vkId ? ' / id: ' + data.vkId : '',
          data_id: data.vkId,
          media: data
        });
      });
    }

    return filtred;
  }
  /**
   * Получить потоки
   * @param {String} str
   * @returns array
   */


  function extractItems(sources) {
    if (!sources) return [];
    var items = [];
    /* 4K и 2K перепутаны */

    if (sources.mpeg2kUrl) {
      items.push({
        label: '4K',
        quality: 2160,
        file: sources.mpeg2kUrl
      });
    }

    if (sources.mpeg4kUrl) {
      items.push({
        label: '2K',
        quality: 1440,
        file: sources.mpeg4kUrl
      });
    }

    if (sources.mpegQhdUrl) {
      items.push({
        label: '1440p',
        quality: 1440,
        file: sources.mpegQhdUrl
      });
    }

    if (sources.mpegFullHdUrl) {
      items.push({
        label: '1080p',
        quality: 1080,
        file: sources.mpegFullHdUrl
      });
    }

    if (sources.mpegHighUrl) {
      items.push({
        label: '720p',
        quality: 720,
        file: sources.mpegHighUrl
      });
    }

    if (sources.mpegMediumUrl) {
      items.push({
        label: '480p',
        quality: 480,
        file: sources.mpegMediumUrl
      });
    }

    if (sources.mpegLowUrl) {
      items.push({
        label: '360p',
        quality: 360,
        file: sources.mpegLowUrl
      });
    }

    if (sources.mpegLowestUrl) {
      items.push({
        label: '240p',
        quality: 240,
        file: sources.mpegLowestUrl
      });
    }

    if (sources.mpegTinyUrl) {
      items.push({
        label: '144p',
        quality: 144,
        file: sources.mpegTinyUrl
      });
    }

    if (!items.length && sources.hlsUrl) {
      items.push({
        label: 'HLS',
        quality: NaN,
        file: sources.hlsUrl
      });
    }

    items.forEach(function (item) {
      item.file = component.proxyLink(component.fixLinkProtocol(item.file, prefer_http, true), prox, prox_enc);
    });
    return items;
  }
  /**
   * Получить поток
   * @param {*} element
   */


  function getStream(element, call, error) {
    if (element.stream) return call(element);
    if (!element.data_id) return error();
    var url = embed + 'video/' + element.data_id;
    network.clear();
    network.timeout(10000);
    network["native"](component.proxyLink(url, prox, prox_enc), function (json) {
      if (json && json.sources) {
        var file = '',
            quality = false;
        var items = extractItems(json.sources);

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
    });
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
      var hash_file = Lampa.Utils.hash(element.season ? [element.season, element.season > 10 ? ':' : '', element.episode, object.movie.original_title, filter_items.voice[choice.voice]].join('') : object.movie.original_title + element.data_id);
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
