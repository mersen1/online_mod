function anilibria2(component, _object) {
  var network = Utils.createRequest(component);
  this.cancel = function () { network.clear(); };
  var extract = {};
  var object = _object;
  var select_title = '';
  var prox = component.proxy('anilibria2');
  var embed = 'https://api.anilibria.app/api/v1/';
  var filter_items = {};
  var choice = {
    season: 0,
    voice: 0
  };
  /**
   * Поиск
   * @param {Object} _object
   */

  this.search = function (_object, kinopoisk_id, data) {
    var _this = this;

    object = _object;
    select_title = object.search || object.movie.title;
    if (this.wait_similars && data && data[0] && data[0].is_similars) return getRelease(data[0]);
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
          c.ru_title = c.name && c.name.main;
          c.en_title = c.name && c.name.english;
          c.alt_title = c.name && c.name.alternative;
        });
        var cards = items;

        if (cards.length) {
          if (orig_titles.length) {
            var tmp = cards.filter(function (c) {
              return component.containsAnyTitle([c.en_title, c.ru_title, c.alt_title], orig_titles);
            });

            if (tmp.length) {
              cards = tmp;
              is_sure = true;
            }
          }

          if (select_title) {
            var _tmp = cards.filter(function (c) {
              return component.containsAnyTitle([c.ru_title, c.en_title, c.alt_title], [select_title]);
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
              is_sure |= component.equalAnyTitle([cards[0].en_title, cards[0].ru_title, cards[0].alt_title], orig_titles);
            }

            if (select_title) {
              is_sure |= component.equalAnyTitle([cards[0].ru_title, cards[0].en_title, cards[0].alt_title], [select_title]);
            }
          }
        }

        if (cards.length == 1 && is_sure) {
          getRelease(cards[0]);
        } else {
          _this.wait_similars = true;
          items.forEach(function (c) {
            c.is_similars = true;

            if (!(c.type && c.type.value === 'MOVIE')) {
              c.episodes_count = c.episodes_total;
            }
          });
          component.similars(items);
          component.loading(false);
        }
      } else component.emptyForQuery(select_title);
    };

    var url = embed + 'app/search/releases';
    url = Lampa.Utils.addUrlComponent(url, 'query=' + encodeURIComponent(select_title));
    network.clear();
    network.timeout(1000 * 15);
    network.silent(component.proxyLink(url, prox), function (json) {
      display(json);
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

  function getRelease(json) {
    var url = embed + 'anime/releases/' + json.id;
    network.clear();
    network.timeout(1000 * 15);
    network.silent(component.proxyLink(url, prox), function (json) {
      if (json && json.episodes && json.episodes.length) {
        json.ru_title = json.name && json.name.main;
        json.en_title = json.name && json.name.english;
        json.alt_title = json.name && json.name.alternative;
        success(json);
      } else component.emptyForQuery(select_title);

      if (json && json.is_blocked_by_copyrights) Lampa.Noty.show(Lampa.Lang.translate('online_mod_blockedlink_copyright'));else if (json && json.is_blocked_by_geo) Lampa.Noty.show(Lampa.Lang.translate('online_mod_blockedlink'));
    }, function (a, c) {
      component.empty(network.errorDecode(a, c));
    });
  }

  function success(json) {
    component.loading(false);
    extract = json;
    filter();
    append(filtred());
  }
  /**
   * Построить фильтр
   */


  function filter() {
    filter_items = {
      season: [],
      voice: []
    };
    component.filter(filter_items, choice);
  }
  /**
   * Получить потоки
   * @param {String} host
   * @param {Object} hls
   * @returns array
   */


  function extractItems(episode) {
    var items = [];

    if (episode.hls_1080) {
      items.push({
        label: '1080p',
        quality: 1080,
        file: episode.hls_1080
      });
    }

    if (episode.hls_720) {
      items.push({
        label: '720p',
        quality: 720,
        file: episode.hls_720
      });
    }

    if (episode.hls_480) {
      items.push({
        label: '480p',
        quality: 480,
        file: episode.hls_480
      });
    }

    return items;
  }
  /**
   * Отфильтровать файлы
   * @returns array
   */


  function filtred() {
    var filtred = [];

    if (extract.episodes && extract.episodes.length) {
      if (extract.type && extract.type.value === 'MOVIE' && extract.episodes.length === 1) {
        extract.episodes.forEach(function (episode) {
          var items = extractItems(episode);
          filtred.push({
            title: extract.ru_title || extract.en_title || select_title,
            orig_title: extract.en_title || extract.ru_title || select_title,
            quality: items[0] ? items[0].label : '360p ~ 1080p',
            info: '',
            media: items
          });
        });
      } else {
        extract.episodes.forEach(function (episode) {
          var items = extractItems(episode);
          filtred.push({
            title: component.formatEpisodeTitle(null, episode.ordinal, episode.name),
            orig_title: extract.en_title || extract.ru_title || select_title,
            quality: items[0] ? items[0].label : '360p ~ 1080p',
            info: '',
            season: 1,
            episode: episode.ordinal,
            media: items
          });
        });
      }
    }

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
      var hash = Lampa.Utils.hash(element.season ? [element.season, element.season > 10 ? ':' : '', element.episode, object.movie.original_title, element.orig_title].join('') : object.movie.original_title + element.orig_title);
      var view = Lampa.Timeline.view(hash);
      var item = Lampa.Template.get('online_mod', element);
      var hash_file = Lampa.Utils.hash(element.season ? [element.season, element.season > 10 ? ':' : '', element.episode, object.movie.original_title, element.orig_title].join('') : object.movie.original_title + element.orig_title + element.title);
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
            title: element.title
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
        file: function file(call) {
          call(getFile(element));
        }
      });
    });
    component.start(true);
  }
}
