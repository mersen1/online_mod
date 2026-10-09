function zetflix(component, _object) {
  var network = new Lampa.Reguest();
  var extract = [];
  var object = _object;
  var select_title = '';
  var select_id = '';
  var prefer_http = Lampa.Storage.field('online_mod_prefer_http') === true;
  var prox = component.proxy('zetflix');
  var prox_enc = '';

  var embed = (prefer_http ? 'http:' : 'https:') + '//hidxlglk.deploy.cx/lite/zetflix';
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

    extract = [];
    getEpisodes();
  };

  function getEpisodes() {
    var s = object.movie.number_of_seasons ? choice.season + 1 : 0;

    if (extract[s]) {
      component.loading(false);
      filter();
      append(filtred());
      return;
    }

    var url = Lampa.Utils.addUrlComponent(embed, 'kinopoisk_id=' + select_id);
    if (s) url = Lampa.Utils.addUrlComponent(url, 's=' + s);
    url = Lampa.Utils.addUrlComponent(url, 'orightml=true');

    var call_success = function call_success(str) {
      parse(str);
    };

    var call_error = function call_error(a, c) {
      component.empty(network.errorDecode(a, c));
    };

    {
      var meta = $('head meta[name="referrer"]');
      var referrer = meta.attr('content') || 'never';
      meta.attr('content', 'origin');

      try {
        network.clear();
        network.timeout(10000);
        network.silent(url, call_success, call_error, false, {
          dataType: 'text'
        });
      } finally {
        meta.attr('content', referrer);
      }
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
    component.loading(true);
    getEpisodes();
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
    component.loading(true);
    getEpisodes();
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
  /**
   * Получить потоки
   * @param {String} str
   * @returns array
   */


  function extractItems(str) {
    if (!str) return [];

    try {
      var items = component.parsePlaylist(str).map(function (item) {
        var quality = item.label.match(/(\d\d\d+)/);
        var link = item.links[0] || '';
        link = component.fixLinkProtocol(link, prefer_http, true);
        return {
          label: item.label,
          quality: quality ? parseInt(quality[1]) : NaN,
          file: component.proxyLink(link, prox, prox_enc)
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

  function parse(str) {
    component.loading(false);
    str = (str || '').replace(/\n/g, '');
    var find = str.match(/Playerjs\(({.*?})\);/);
    var json;

    try {
      json = find && (0, eval)('"use strict"; (function(){ var sign = function(){}; return ' + find[1] + '; })();');
    } catch (e) {}

    if (json && json.file) {
      var s = object.movie.number_of_seasons ? choice.season + 1 : 0;
      extract[s] = typeof json.file === 'string' ? [json] : json.file;
      extract[s].forEach(function (data) {
        if (data.folder) {
          data.folder.forEach(function (e) {
            e.media = {
              items: extractItems(e.file)
            };
          });
        } else {
          data.media = {
            items: extractItems(data.file)
          };
        }
      });
      filter();
      append(filtred());
    } else component.emptyForQuery(select_title);
  }
  /**
   * Построить фильтр
   */


  function filter() {
    filter_items = {
      season: [],
      voice: []
    };

    if (object.movie.number_of_seasons) {
      for (var snum = 1; snum <= object.movie.number_of_seasons; snum++) {
        filter_items.season.push(Lampa.Lang.translate('torrent_serial_season') + ' ' + snum);
      }
    }

    if (!filter_items.season[choice.season]) choice.season = 0;
    var extract_s = extract[object.movie.number_of_seasons ? choice.season + 1 : 0] || [];
    extract_s.forEach(function (v) {
      if (v.folder) {
        var voice = v.title || v.comment || '';
        if (filter_items.voice.indexOf(voice) == -1) filter_items.voice.push(voice);
      }
    });
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
    var extract_s = extract[object.movie.number_of_seasons ? choice.season + 1 : 0] || [];
    extract_s.forEach(function (data) {
      if (data.folder) {
        var voice = data.title || data.comment || '';

        if (voice == filter_items.voice[choice.voice]) {
          data.folder.forEach(function (e) {
            if (e.file) {
              var e_title = e.title || e.comment || '';
              var max_quality = e.media.items[0] || {};
              var episode_num = parseInt(e_title.match(/\d+/));
              var season_num = choice.season + 1;
              filtred.push({
                title: component.formatEpisodeTitle(season_num, episode_num),
                quality: max_quality.label || '360p ~ 1080p',
                info: ' / ' + Lampa.Utils.shortText(voice, 50),
                season: season_num,
                episode: episode_num,
                media: e.media
              });
            }
          });
        }

        filtred.sort(function (a, b) {
          return a.episode - b.episode;
        });
      } else if (data.file) {
        var max_quality = data.media.items[0] || {};
        filtred.push({
          title: data.title || data.comment || select_title,
          quality: max_quality.label || '360p ~ 1080p',
          info: '',
          media: data.media
        });
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
    var items = element.media.items;

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
