function collaps(component, _object, prefer_dash) {
  var network = Utils.createRequest(component);
  this.cancel = function () { network.clear(); };
  var extract = {};
  var object = _object;
  var select_title = '';
  var prefer_http = Lampa.Storage.field('online_mod_prefer_http') === true; //let prefer_dash  = Lampa.Storage.field('online_mod_prefer_dash') === true

  var lampa_player = Lampa.Storage.field('online_mod_collaps_lampa_player') === true;
  var prox = component.proxy('collaps');
  var base = 'api.ortified.ws';
  var host = 'https://' + base;
  var ref = host + '/';
  var user_agent = Utils.baseUserAgent();
  var embed = (prefer_http ? 'http:' : 'https:') + '//' + base + '/embed/';
  var embed2 = (prefer_http ? 'http:' : 'https:') + '//api.kinogram.best/embed/';
  var prox_enc = '';

  if (prox) {
    prox_enc += 'param/User-Agent=' + encodeURIComponent(user_agent) + '/';
  }

  var prox_enc_stream = prox_enc;

  if (prox) {
    prox_enc += 'ip/';
    prox_enc_stream += 'param/Origin=' + encodeURIComponent(host) + '/';
    prox_enc_stream += 'param/Referer=' + encodeURIComponent(ref) + '/';
  }

  var net_method = lampa_player ? 'silent' : 'native';
  var play_headers = !prox && !lampa_player && Lampa.Platform.is('android') ? {
    'User-Agent': user_agent,
    'Origin': host,
    'Referer': ref
  } : {};
  var filter_items = {};
  var choice = {
    season: 0,
    voice: 0
  };

  function collaps_api_search(api, callback, error) {
    network.clear();
    network.timeout(10000);
    network[net_method](component.proxyLink(embed + api, prox, prox_enc, 'enc2t'), function (str) {
      if (callback) callback(str || '');
    }, function (a, c) {
      if (a.status == 404 && (!a.responseText || a.responseText.indexOf('видео недоступно') !== -1)) {
        if (callback) callback('');
      } else {
        network.clear();
        network.timeout(10000);
        network[net_method](component.proxyLink(embed2 + api, prox, prox_enc, 'enc2t'), function (str) {
          if (callback) callback(str || '');
        }, function (a, c) {
          if (a.status == 404 && (!a.responseText || a.responseText.indexOf('видео недоступно') !== -1) || a.status == 0 && a.statusText !== 'timeout') {
            if (callback) callback('');
          } else if (error) error(network.errorDecode(a, c));
        }, false, {
          dataType: 'text',
          headers: play_headers
        });
      }
    }, false, {
      dataType: 'text',
      headers: play_headers
    });
  }
  /**
   * Поиск
   * @param {Object} _object
   */


  this.search = function (_object, kinopoisk_id) {
    object = _object;
    select_title = object.search || object.movie.title;
    var error = component.empty.bind(component);
    var api = (+kinopoisk_id ? 'kp/' : 'imdb/') + kinopoisk_id;
    collaps_api_search(api, function (str) {
      if (str) parse(str);else if (!object.clarification && object.movie.imdb_id && kinopoisk_id != object.movie.imdb_id) {
        collaps_api_search('imdb/' + object.movie.imdb_id, function (str) {
          if (str) parse(str);else component.emptyForQuery(select_title);
        }, error);
      } else component.emptyForQuery(select_title);
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
      voice: 0
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

  this.loadEmbed = function (url, nextObject, title) {
    object = nextObject;
    select_title = title || object.movie.title;
    var origin = Utils.parseURL(url).origin;
    if (prox) {
      prox_enc_stream = 'param/User-Agent=' + encodeURIComponent(user_agent) + '/';
      prox_enc_stream += 'param/Origin=' + encodeURIComponent(origin) + '/';
      prox_enc_stream += 'param/Referer=' + encodeURIComponent(origin + '/') + '/';
    }
    if (Lampa.Platform.is('android')) {
      play_headers.Origin = origin;
      play_headers.Referer = origin + '/';
    }
    network.clear();
    network.timeout(10000);
    network[net_method](component.proxyLink(url, prox, prox_enc, 'enc2t'), parse, function (a, c) {
      component.empty(network.errorDecode(a, c));
    }, false, { dataType: 'text', headers: play_headers });
  };

  this.loadMarkup = function (str, nextObject, title) {
    object = nextObject;
    select_title = title || object.movie.title;
    parse(str);
  };

  function parse(str) {
    component.loading(false);
    var find = (str || '').match(/makePlayer\(({[\s\S]*?})\);/);
    var json = find && Utils.parsePlayerConfig(find[1]);

    if (json) {
      extract = json;

      if (extract.playlist && extract.playlist.seasons) {
        extract.playlist.seasons.sort(function (a, b) {
          return a.season - b.season;
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
      season: [],
      voice: []
    };

    if (extract.playlist && extract.playlist.seasons) {
      extract.playlist.seasons.forEach(function (season) {
        filter_items.season.push(Lampa.Lang.translate('torrent_serial_season') + ' ' + season.season);
      });
    }

    if (!filter_items.season[choice.season]) choice.season = 0;
    component.filter(filter_items, choice);
  }

  function fixUrl(url, add) {
    url = url || '';

    if (url && add) {
      url = Lampa.Utils.addUrlComponent(url, 'vp');
    }

    url = component.fixLinkProtocol(url, prefer_http, 'full');
    return url;
  }

  function streamLink(url) {
    return prox ? component.proxyLink(url, prox, prox_enc_stream) : component.proxyStream(url, 'collaps');
  }
  /**
   * Отфильтровать файлы
   * @returns array
   */


  function filtred() {
    var filtred = [];

    if (extract.playlist) {
      extract.playlist.seasons.forEach(function (season, i) {
        if (i == choice.season) {
          season.episodes.forEach(function (episode) {
            var audio_tracks = episode.audio.names.map(function (name) {
              return {
                language: name
              };
            });
            var audio_infos = episode.audio.names.map(function (name, index) {
              var order = episode.audio.order && episode.audio.order[index];
              return {
                name: name,
                order: order != null ? order : 1000
              };
            });
            audio_infos.sort(function (a, b) {
              return a.order - b.order;
            });
            var audio_names = audio_infos.map(function (a) {
              return a.name;
            }).filter(function (name) {
              return name && name !== 'delete';
            });
            var file = fixUrl(prefer_dash && (episode.dasha || episode.dash) || episode.hls || '', true);
            filtred.push({
              title: episode.title,
              quality: '360p ~ ' + (prefer_dash ? '1080p' : '720p'),
              info: audio_names.length ? ' / ' + component.uniqueNamesShortText(audio_names, 80) : '',
              season: season.season,
              episode: parseInt(episode.episode),
              file: streamLink(file),
              subtitles: episode.cc ? episode.cc.map(function (c) {
                var url = fixUrl(c.url || '');
                return {
                  label: c.name,
                  url: component.processSubs(streamLink(url))
                };
              }) : false,
              audio_tracks: audio_tracks.length ? audio_tracks : false
            });
          });
        }
      });
    } else if (extract.source) {
      var max_quality = 0;
      extract.qualityByWidth && Lampa.Arrays.getKeys(extract.qualityByWidth).forEach(function (resolution) {
        var quality = extract.qualityByWidth[resolution] || 0;
        if (!prefer_dash && quality > 720) quality = 0;
        if (quality > max_quality) max_quality = quality;
      });
      var audio_tracks = extract.source.audio.names.map(function (name) {
        return {
          language: name
        };
      });
      var audio_infos = extract.source.audio.names.map(function (name, index) {
        var order = extract.source.audio.order && extract.source.audio.order[index];
        return {
          name: name,
          order: order != null ? order : 1000
        };
      });
      audio_infos.sort(function (a, b) {
        return a.order - b.order;
      });
      var audio_names = audio_infos.map(function (a) {
        return a.name;
      }).filter(function (name) {
        return name && name !== 'delete';
      });
      var file = fixUrl(prefer_dash && (extract.source.dasha || extract.source.dash) || extract.source.hls || '', true);
      filtred.push({
        title: extract.title || select_title,
        quality: max_quality ? max_quality + 'p' : '360p ~ ' + (prefer_dash ? '1080p' : '720p'),
        info: audio_names.length ? ' / ' + component.uniqueNamesShortText(audio_names, 80) : '',
        file: streamLink(file),
        subtitles: extract.source.cc ? extract.source.cc.map(function (c) {
          var url = fixUrl(c.url || '');
          return {
            label: c.name,
            url: component.processSubs(streamLink(url))
          };
        }) : false,
        audio_tracks: audio_tracks.length ? audio_tracks : false
      });
    }

    return filtred;
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
      var hash_file = Lampa.Utils.hash(element.season ? [element.season, element.season > 10 ? ':' : '', element.episode, object.movie.original_title, element.title].join('') : object.movie.original_title + 'collaps');
      element.timeline = view;
      item.append(Lampa.Timeline.render(view));

      if (Lampa.Timeline.details) {
        item.find('.online__quality').append(Lampa.Timeline.details(view, ' / '));
      }

      if (viewed.indexOf(hash_file) !== -1) item.append('<div class="torrent-item__viewed">' + Lampa.Template.get('icon_star', {}, true) + '</div>');
      item.on('hover:enter', function (event, options) {
        if (object.movie.id) Lampa.Favorite.add('history', object.movie, 100);

        if (element.file) {
          var playlist = [];
          var first = {
            url: component.getDefaultQuality(null, element.file),
            subtitles: element.subtitles,
            translate: {
              tracks: element.audio_tracks
            },
            timeline: element.timeline,
            title: element.season ? element.title : select_title + (element.title == select_title ? '' : ' / ' + element.title),
            headers: play_headers
          };

          if (element.season) {
            items.forEach(function (elem) {
              playlist.push({
                url: component.getDefaultQuality(null, elem.file),
                subtitles: elem.subtitles,
                translate: {
                  tracks: elem.audio_tracks
                },
                timeline: elem.timeline,
                title: elem.title,
                headers: play_headers
              });
            });
          } else {
            playlist.push(first);
          }

          if (playlist.length > 1) first.playlist = playlist;
          if (options && options.runas) Lampa.Player.runas(options.runas);else if (lampa_player) Lampa.Player.runas('lampa');
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
          call({
            file: element.file
          });
        }
      });
    });
    component.start(true);
  }
}
