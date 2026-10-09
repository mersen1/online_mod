function redheadsound(component, _object, prefer_dash) {
  var network = Utils.createRequest(component);
  this.cancel = function () { network.clear(); };
  var extract = [];
  var object = _object;
  var select_title = '';
  var page_title = '';
  var prox = component.proxy('redheadsound');
  var host = 'https://redheadsound.studio';
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

  var embed = ref;
  var filter_items = {};
  var choice = {
    season: 0,
    voice: 0
  };
  var secret = atob('MWM2MzYyNTY3ZjNmNzQ5ZDVkOTZjOWVmYjZlM2UwYmRhYzY4NjI3OA==');
  var secret_timestamp = null;

  function decodeSecretToken(callback) {

    var timestamp = new Date().getTime();
    var cache_timestamp = timestamp - 1000 * 60 * 10;

    if (secret && secret_timestamp && secret_timestamp > cache_timestamp) {
      if (callback) callback();
      return;
    }

    network.clear();
    network.timeout(10000);
    network["native"](component.proxyLink(embed, prox), function (str) {
      str = (str || '').replace(/\n/g, '');
      var found = str.match(/\bdle_login_hash = '([^']+)'/);

      if (found) {
        secret = found[1];
        secret_timestamp = timestamp;
      }

      if (callback) callback();
    }, function (a, c) {
      if (callback) callback();
    }, false, {
      dataType: 'text'
    });
  }
  /**
   * Поиск
   * @param {Object} _object
   */


  this.search = function (_object, kinopoisk_id, data) {
    var _this = this;

    object = _object;
    select_title = object.search || object.movie.title;
    if (this.wait_similars && data && data[0] && data[0].is_similars) return getPage(data[0]);
    var search_date = object.search_date || !object.clarification && (object.movie.release_date || object.movie.first_air_date || object.movie.last_air_date) || '0000';
    var search_year = parseInt((search_date + '').slice(0, 4));
    var orig_titles = [];

    if (object.movie.alternative_titles && object.movie.alternative_titles.results) {
      orig_titles = object.movie.alternative_titles.results.map(function (t) {
        return t.title;
      });
    }

    if (object.movie.original_title) orig_titles.push(object.movie.original_title);
    if (object.movie.original_name) orig_titles.push(object.movie.original_name);
    var url = embed + 'engine/ajax/controller.php?mod=search';

    var display = function display(links) {
      if (links && links.length && links.forEach) {
        var is_sure = false;
        var items = links.map(function (l) {
          var h4 = $(l.link);
          var link = $('a', h4);
          var titl = link.text().trim() || '';
          var year_link = $(l.year);
          var year = parseInt(year_link.text().trim() || '');
          return {
            year: year,
            title: titl,
            orig_title: '',
            link: link.attr('href') || ''
          };
        });
        var cards = items;

        if (cards.length) {
          if (orig_titles.length) {
            var tmp = cards.filter(function (c) {
              return component.containsAnyTitle([c.orig_title, c.title], orig_titles);
            });

            if (tmp.length) {
              cards = tmp;
              is_sure = true;
            }
          }

          if (select_title) {
            var _tmp = cards.filter(function (c) {
              return component.containsAnyTitle([c.title, c.orig_title], [select_title]);
            });

            if (_tmp.length) {
              cards = _tmp;
              is_sure = true;
            }
          }

          {
            var _tmp2 = cards.filter(function (c) {
              return !endsWith(c.title, ' - обзор');
            });

            if (_tmp2.length) {
              cards = _tmp2;
            }
          }

          if (cards.length > 1 && search_year) {
            var _tmp3 = cards.filter(function (c) {
              return c.year == search_year;
            });

            if (!_tmp3.length) _tmp3 = cards.filter(function (c) {
              return c.year && c.year > search_year - 2 && c.year < search_year + 2;
            });
            if (_tmp3.length) cards = _tmp3;
          }
        }

        if (cards.length == 1 && is_sure) {
          if (search_year && cards[0].year) {
            is_sure = cards[0].year > search_year - 2 && cards[0].year < search_year + 2;
          }

          if (is_sure) {
            is_sure = false;

            if (orig_titles.length) {
              is_sure |= component.equalAnyTitle([cards[0].orig_title, cards[0].title], orig_titles);
            }

            if (select_title) {
              is_sure |= component.equalAnyTitle([cards[0].title, cards[0].orig_title], [select_title]);
            }
          }
        }

        if (cards.length == 1 && is_sure) getPage(cards[0]);else if (items.length) {
          _this.wait_similars = true;
          items.forEach(function (c) {
            c.is_similars = true;
          });
          component.similars(items);
          component.loading(false);
        } else component.emptyForQuery(select_title);
      } else component.emptyForQuery(select_title);
    };

    var query_search = function query_search(query, data, callback) {
      var postdata = 'query=' + encodeURIComponent(query);
      postdata += '&skin=rhs_new';
      postdata += '&user_hash=' + secret;
      network.clear();
      network.timeout(10000);
      network["native"](component.proxyLink(url, prox), function (str) {
        str = (str || '').replace(/\n/g, '');
        var pos = str.indexOf('<div class="move-item">');

        if (pos !== -1) {
          str.substring(pos + '<div class="move-item">'.length).split('<div class="move-item">').forEach(function (item) {
            var link = item.match(/<div class="move-item__content">\s*(<h4 class="title">\s*<a [^>]*>[^<]*<\/a>[^<]*<\/h4>)/);
            var year = item.match(/(<span class="year [^>]*>\s*(<a [^>]*>[^<]*<\/a>)?[^<]*<\/span>)/);

            if (link) {
              data.push({
                link: link[1],
                year: year && year[1] || ''
              });
            }
          });
        }

        if (callback) callback(data);
      }, function (a, c) {
        component.empty(network.errorDecode(a, c));
      }, postdata, {
        dataType: 'text'
      });
    };

    var query_title_search = function query_title_search() {
      query_search(component.cleanTitle(select_title), [], function (data) {
        if (data && data.length && data.forEach) display(data);else display([]);
      });
    };

    var apiSearch = function apiSearch() {
      query_title_search();
    };

    decodeSecretToken(function () {
      return apiSearch();
    });
  };

  function getPage(card) {
    page_title = card.title || card.orig_title || select_title;
    var url = component.fixLink(card.link, ref);
    network.clear();
    network.timeout(10000);
    network["native"](component.proxyLink(url, prox), function (str) {
      str = (str || '').replace(/\n/g, '');
      var player = str.match(/\bvideoUrl = '(http[^']*)'/);
      var player_link = player && player[1];

      if (player_link) {
        network.clear();
        network.timeout(10000);
        network["native"](component.proxyLink(player_link, prox, prox_enc), function (str) {
          parse(str);
        }, function (a, c) {
          component.empty(network.errorDecode(a, c));
        }, false, {
          dataType: 'text',
          headers: headers
        });
      } else component.emptyForQuery(select_title);
    }, function (a, c) {
      component.empty(network.errorDecode(a, c));
    }, false, {
      dataType: 'text'
    });
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

  function parse(str, url) {
    component.loading(false);
    str = (str || '').replace(/\n/g, '');
    var find = str.match(/var playerOptions = ({.*?});/);
    var json;

    try {
      json = find && (0, eval)('"use strict"; (function(){ return ' + find[1] + '; })();');
    } catch (e) {}

    if (json && json.playlist && json.playlist.length && json.playlist.forEach) {
      extract = json.playlist;
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
    component.filter(filter_items, choice);
  }
  /**
   * Отфильтровать файлы
   * @returns array
   */


  function filtred() {
    var filtred = [];
    extract.forEach(function (data) {
      var file = data.sources && (prefer_dash && data.sources.shakadash && data.sources.shakadash.src || data.sources.hls && data.sources.hls.src) || '';
      filtred.push({
        title: data.title || data.comment || select_title,
        quality: '360p ~ 1080p',
        info: '',
        file: file
      });
    });
    return filtred;
  }
  /**
   * Найти поток
   * @param {Object} element
   * @returns string
   */


  function getFile(element) {
    return {
      file: element.file,
      quality: false,
      subtitles: false
    };
  }
  /**
   * Показать файлы
   */


  function append(items) {
    component.reset();
    var viewed = Lampa.Storage.cache('online_view', 5000, []);
    items.forEach(function (element) {
      var hash = Lampa.Utils.hash(object.movie.original_title + page_title + element.title);
      var view = Lampa.Timeline.view(hash);
      var item = Lampa.Template.get('online_mod', element);
      var hash_file = Lampa.Utils.hash(object.movie.original_title + page_title + element.title);
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
            subtitles: extra.subtitles,
            timeline: element.timeline,
            title: items.length > 1 ? element.title : select_title + (element.title == select_title ? '' : ' / ' + element.title)
          };

          if (items.length > 1) {
            items.forEach(function (elem) {
              var ex = getFile(elem);
              playlist.push({
                url: component.getDefaultQuality(ex.quality, ex.file),
                quality: component.renameQualityMap(ex.quality),
                subtitles: ex.subtitles,
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
