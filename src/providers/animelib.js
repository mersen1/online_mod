function animelib(component, _object) {
  var network = Utils.createRequest(component);
  this.cancel = function () { network.clear(); };
  var extract = {};
  var object = _object;
  var select_title = '';
  var prox = component.proxy('animelib');
  var host = 'https://anilib.me';
  var ref = host + '/';
  var user_agent = Utils.baseUserAgent();
  var embed = 'https://api2.mangalib.me/api/';
  var prox_enc = '';

  if (prox) {
    prox_enc += 'param/Origin=' + encodeURIComponent(host) + '/';
    prox_enc += 'param/Referer=' + encodeURIComponent(ref) + '/';
    prox_enc += 'param/User-Agent=' + encodeURIComponent(user_agent) + '/';
  }

  var servers = [{
    name: 'Основной',
    url: 'https://video1.anilib.me/.%D0%B0s/'
  }, {
    name: 'Резервный 1',
    url: 'https://video2.anilib.me/.%D0%B0s/'
  }, {
    name: 'Резервный 2',
    url: 'https://video3.anilib.me/.%D0%B0s/'
  }];
  var filter_items = {};
  var choice = {
    season: 0,
    voice: 0,
    voice_name: '',
    server: 0
  };
  /**
   * Поиск
   * @param {Object} _object
   */

  this.search = function (_object, kinopoisk_id, data) {
    var _this = this;

    object = _object;
    select_title = object.search || object.movie.title;
    if (this.wait_similars && data && data[0] && data[0].is_similars) return getEpisodes(data[0]);
    var search_year = object.search_date;
    var orig_titles = [];

    if (object.movie.alternative_titles && object.movie.alternative_titles.results) {
      orig_titles = object.movie.alternative_titles.results.map(function (t) {
        return t.title;
      });
    }

    if (object.movie.original_title) orig_titles.push(object.movie.original_title);
    if (object.movie.original_name) orig_titles.push(object.movie.original_name);

    var display = function display(items) {
      if (items && items.length && items.forEach) {
        var is_sure = false;
        items.forEach(function (c) {
          c.orig_title = c.name;
          c.ru_title = c.rus_name;
          c.en_title = c.eng_name;
          var year = c.releaseDate || '0000';
          c.year = parseInt((year + '').slice(0, 4));
        });
        var cards = items;

        if (cards.length) {
          if (orig_titles.length) {
            var tmp = cards.filter(function (c) {
              return component.containsAnyTitle([c.orig_title, c.en_title, c.ru_title], orig_titles);
            });

            if (tmp.length) {
              cards = tmp;
              is_sure = true;
            }
          }

          if (select_title) {
            var _tmp = cards.filter(function (c) {
              return component.containsAnyTitle([c.ru_title, c.en_title, c.orig_title], [select_title]);
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
              is_sure |= component.equalAnyTitle([cards[0].orig_title, cards[0].en_title, cards[0].ru_title], orig_titles);
            }

            if (select_title) {
              is_sure |= component.equalAnyTitle([cards[0].ru_title, cards[0].en_title, cards[0].orig_title], [select_title]);
            }
          }
        }

        if (cards.length == 1 && is_sure) {
          getEpisodes(cards[0]);
        } else {
          _this.wait_similars = true;
          items.forEach(function (c) {
            c.is_similars = true;
          });
          component.similars(items);
          component.loading(false);
        }
      } else component.emptyForQuery(select_title);
    };

    var url = embed + 'anime?fields[]=rate_avg&fields[]=rate&fields[]=releaseDate';
    url = Lampa.Utils.addUrlComponent(url, 'q=' + encodeURIComponent(select_title));
    network.clear();
    network.timeout(1000 * 15);
    network.silent(component.proxyLink(url, prox, prox_enc), function (json) {
      display(json && json.data);
    }, function (a, c) {
      component.empty(network.errorDecode(a, c));
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
      voice_name: '',
      server: 0
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

  function getEpisodes(json) {
    var url = embed + 'episodes';
    url = Lampa.Utils.addUrlComponent(url, 'anime_id=' + encodeURIComponent(json.slug_url));
    network.clear();
    network.timeout(1000 * 15);
    network.silent(component.proxyLink(url, prox, prox_enc), function (episodes) {
      if (episodes && episodes.data && episodes.data.length) {
        json.episodes = episodes.data;
        getPlayers(json.episodes[0], function () {
          if (json.episodes[0].players && json.episodes[0].players.length) success(json);else component.emptyForQuery(select_title);
        });
      } else component.emptyForQuery(select_title);
    }, function (a, c) {
      component.empty(network.errorDecode(a, c));
    });
  }

  function getPlayers(episode, callback) {
    if (episode.players) {
      callback();
      return;
    }

    var url = embed + 'episodes/' + episode.id;
    network.clear();
    network.timeout(1000 * 15);
    network.silent(component.proxyLink(url, prox, prox_enc), function (json) {
      if (json && json.data && json.data.players) {
        episode.players = json.data.players.filter(function (p) {
          return p.player === 'Animelib';
        });
      }

      callback();
    }, function (a, c) {
      callback();
    });
  }

  function success(json) {
    component.loading(false);
    extract = json;
    extract.is_film = extract.episodes && extract.episodes.length === 1 && extract.type && ['Фильм', 'Неизвестный'].indexOf(extract.type.label) !== -1;
    filter();
    append(filtred());
  }
  /**
   * Построить фильтр
   */


  function filter() {
    filter_items = {
      season: [],
      voice: [],
      voice_info: [],
      server: servers.map(function (s) {
        return s.name;
      })
    };

    if (!extract.is_film) {
      extract.episodes.forEach(function (e) {
        if (e.players) {
          e.players.forEach(function (p) {
            if (p.team && !filter_items.voice_info.some(function (v) {
              return v.id == p.team.id;
            })) {
              filter_items.voice.push(p.team.name);
              filter_items.voice_info.push(p.team);
            }
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
  /**
   * Получить потоки
   * @param {Object} player
   * @returns array
   */


  function extractItems(player) {
    try {
      var items = [];

      if (player && player.video && player.video.quality) {
        var server = servers[choice.server] || servers[0];
        items = player.video.quality.map(function (q) {
          return {
            label: q.quality ? q.quality + 'p' : '360p ~ 1080p',
            quality: q.quality,
            file: q.href ? component.proxyLink(server.url + q.href, prox, prox_enc) : ''
          };
        });
        items.sort(function (a, b) {
          if (b.quality > a.quality) return 1;
          if (b.quality < a.quality) return -1;
          if (b.label > a.label) return 1;
          if (b.label < a.label) return -1;
          return 0;
        });
      }

      return items;
    } catch (e) {}

    return [];
  }

  function extractSubs(player) {
    try {
      var subtitles = [];

      if (player && player.subtitles) {
        subtitles = player.subtitles.map(function (item) {
          return {
            label: item.format || item.filename || '',
            url: component.processSubs(item.src || '')
          };
        });
      }

      return subtitles.length ? subtitles : false;
    } catch (e) {}

    return false;
  }
  /**
   * Отфильтровать файлы
   * @returns array
   */


  function filtred() {
    var filtred = [];
    var server = servers[choice.server] || servers[0];

    if (extract.episodes) {
      if (extract.is_film) {
        extract.episodes.forEach(function (episode) {
          if (episode.players) {
            episode.players.forEach(function (player) {
              var voice_name = player && player.team && player.team.name || '';
              var voice_id = player && player.team && player.team.id || null;
              var items = extractItems(player);
              filtred.push({
                title: voice_name || extract.ru_title || extract.en_title || extract.orig_title || select_title,
                orig_title: extract.orig_title || extract.en_title || extract.ru_title || select_title,
                quality: items[0] ? items[0].label : '???',
                info: ' / ' + server.name,
                media: {
                  episode: episode,
                  player: player,
                  voice_id: voice_id
                }
              });
            });
          }
        });
      } else {
        var voice_id = filter_items.voice_info[choice.voice] && filter_items.voice_info[choice.voice].id;
        extract.episodes.forEach(function (episode) {
          var player = null;

          if (episode.players && episode.players.length) {
            player = episode.players.filter(function (p) {
              return p.team && p.team.id == voice_id;
            })[0] || episode.players[0];
          }

          var voice_name = player && player.team && player.team.name || '???';
          var items = extractItems(player);
          filtred.push({
            title: component.formatEpisodeTitle(null, episode.item_number, episode.name),
            orig_title: extract.orig_title || extract.en_title || extract.ru_title || select_title,
            quality: items[0] ? items[0].label : '???',
            info: ' / ' + voice_name + ' / ' + server.name,
            season: 1,
            episode: episode.item_number,
            media: {
              episode: episode,
              player: player,
              voice_id: voice_id
            }
          });
        });
      }
    }

    return filtred;
  }
  /**
   * Получить поток
   * @param {*} element
   */


  function getStream(element, call, error) {
    if (element.stream) return call(element);
    var episode = element.media.episode;
    var old_player = element.media.player;
    getPlayers(episode, function () {
      var player = element.media.player;

      if (!player) {
        var voice_id = element.media.voice_id;

        if (episode.players && episode.players.length) {
          player = episode.players.filter(function (p) {
            return p.team && p.team.id == voice_id;
          })[0] || episode.players[0];
        }
      }

      var items = extractItems(player);
      var file = '';
      var quality = false;

      if (items && items.length) {
        file = items[0].file;
        quality = {};
        items.forEach(function (item) {
          quality[item.label] = item.file;
        });
      }

      if (!old_player && player) {
        var voice_name = player && player.team && player.team.name || '???';
        var server = servers[choice.server] || servers[0];
        element.quality = items[0] ? items[0].label : '???';
        element.info = ' / ' + voice_name + ' / ' + server.name;
        var dst = element.template && element.template.find('.online__quality');

        if (dst && dst.length) {
          var src = Lampa.Template.get('online_mod', element).find('.online__quality');

          if (src && src.length) {
            if (Lampa.Timeline.details) {
              src.append(Lampa.Timeline.details(element.timeline, ' / '));
            }

            dst[0].innerHTML = src[0].innerHTML;
          }
        }
      }

      if (file) {
        element.stream = file;
        element.qualitys = quality;
        element.subtitles = extractSubs(player);
        call(element);
      } else error();
    });
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
      element.template = item;
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
