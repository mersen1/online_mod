function kinopub(component, _object) {
  var network = new Lampa.Reguest();
  var extract = {};
  var object = _object;
  var select_title = '';
  var prefer_http = Lampa.Storage.field('online_mod_prefer_http') === true;
  var prox = component.proxy('kinopub');
  var embed = 'https://api.srvkp.com/v1/';
  var token = Utils.decodeSecret([56, 32, 0, 66, 18, 86, 49, 1, 70, 63, 40, 46, 83, 78, 22, 78, 119, 66, 20, 51, 33, 59, 16, 28, 91, 86, 41, 2, 64, 47, 125, 125]);
  var server = 'ru';
  var hls_type = 'hls';
  var replace_mask = /\/(pd|http|hls4|hls2|hls)\/[^\/]*/;
  var filter_items = {};
  var choice = {
    season: 0,
    voice: 0,
    voice_name: ''
  };
  var secret = '';

  function decodeSecretToken(callback) {
    {
      if (callback) callback();
      return;
    }
  }

  function kinopub_api_search(api, callback, error) {
    network.clear();
    network.timeout(10000);
    network["native"](component.proxyLink(embed + api, prox), function (json) {
      if (callback) callback(json);
    }, function (a, c) {
      if (error) error(network.errorDecode(a, c));
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
    if (this.wait_similars && data && data[0] && data[0].is_similars) return success(data[0]);
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

    var display = function display(items) {
      if (items && items.length && items.forEach) {
        var is_sure = false;
        var is_imdb = false;
        items.forEach(function (c) {
          var titles = (c.title || '').split(' / ');

          if (titles.length === 2) {
            c.full_title = c.title;
            c.title = titles[0].trim();
            c.orig_title = titles[1].trim();
          }
        });

        if (!object.clarification && (object.movie.imdb_id || +object.movie.kinopoisk_id)) {
          var imdb_id = object.movie.imdb_id && parseInt(object.movie.imdb_id.substring(2));
          var kp_id = +object.movie.kinopoisk_id;
          var tmp = items.filter(function (c) {
            return imdb_id && c.imdb == imdb_id || kp_id && c.kinopoisk == kp_id;
          });

          if (tmp.length) {
            items = tmp;
            is_sure = true;
            is_imdb = true;
          }
        }

        var cards = items;

        if (cards.length) {
          if (orig_titles.length) {
            var _tmp = cards.filter(function (c) {
              return component.containsAnyTitle([c.orig_title, c.title, c.full_title], orig_titles);
            });

            if (_tmp.length) {
              cards = _tmp;
              is_sure = true;
            }
          }

          if (select_title) {
            var _tmp2 = cards.filter(function (c) {
              return component.containsAnyTitle([c.title, c.orig_title, c.full_title], [select_title]);
            });

            if (_tmp2.length) {
              cards = _tmp2;
              is_sure = true;
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

        if (cards.length == 1 && is_sure && !is_imdb) {
          if (search_year && cards[0].year) {
            is_sure = cards[0].year > search_year - 2 && cards[0].year < search_year + 2;
          }

          if (is_sure) {
            is_sure = false;

            if (orig_titles.length) {
              is_sure |= component.equalAnyTitle([cards[0].orig_title, cards[0].title, cards[0].full_title], orig_titles);
            }

            if (select_title) {
              is_sure |= component.equalAnyTitle([cards[0].title, cards[0].orig_title, cards[0].full_title], [select_title]);
            }
          }
        }

        if (cards.length == 1 && is_sure) {
          success(cards[0]);
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

    var error = component.empty.bind(component);
    var params = Lampa.Utils.addUrlComponent('items/search', 'access_token=' + token);
    params = Lampa.Utils.addUrlComponent(params, 'perpage=100');
    params = Lampa.Utils.addUrlComponent(params, 'field=title');
    params = Lampa.Utils.addUrlComponent(params, 'q=' + encodeURIComponent(select_title));
    decodeSecretToken(function () {
      kinopub_api_search(params, function (json) {
        display(json && json.items);
      }, error);
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

  function success(item) {
    var params = Lampa.Utils.addUrlComponent('items/' + item.id, 'access_token=' + token);
    var error = component.empty.bind(component);
    kinopub_api_search(params, function (json) {
      if (json && json.item && (json.item.videos && json.item.videos.length || json.item.seasons && json.item.seasons.length)) {
        component.loading(false);
        extractData(json.item);
        filter();
        append(filtred());
      } else component.emptyForQuery(select_title);
    }, error);
  }
  /**
   * Получить информацию о фильме
   * @param {Object} item
   */


  function extractData(item) {
    extract = item;

    if (extract.seasons) {
      extract.seasons.forEach(function (season) {
        var episodes = season.episodes || [];
        episodes.forEach(function (episode) {
          episode.streams = extractFiles(episode);
        });
      });
    } else if (extract.videos) {
      extract.videos.forEach(function (video) {
        video.streams = extractFiles(video);
      });
    }
  }

  function extractFiles(media) {
    var items = [];
    var files = media.files || [];
    files.forEach(function (file) {
      var label = file.quality || file.h && file.h + 'p' || '360p ~ 1080p';

      if (file.url) {
        var subtitles = false;

        if (file.url.http && file.file) {
          var base = file.url.http.match(/^(.*)\/demo\/demo\.mp4(.*)$/);

          if (!base) {
            var pos = file.url.http.indexOf((startsWith(file.file, '/') ? '' : '/') + file.file);
            if (pos !== -1) base = [file.url.http, file.url.http.substring(0, pos)];
          }

          if (base) {
            var base_url = base[1];

            if (replace_mask && secret) {
              base_url = base_url.replace(replace_mask, secret);
            }

            base_url = component.fixLinkProtocol(base_url, prefer_http, 'full');

            if (media.subtitles) {
              subtitles = media.subtitles.map(function (sub) {
                return {
                  label: sub.lang + (sub.forced ? ' - forced' : ''),
                  url: component.processSubs(sub.file ? base_url + '/subtitles' + (startsWith(sub.file, '/') ? '' : '/') + sub.file + '?loc=' + server : '')
                };
              });
              if (!subtitles.length) subtitles = false;
            }

            items.push({
              height: file.h,
              quality_id: file.quality_id,
              label: label,
              codec: file.codec,
              type: 'http',
              params: base[2],
              file: base_url + (startsWith(file.file, '/') ? '' : '/') + file.file,
              subtitles: subtitles
            });
          }
        }

        if (file.url.hls4) {
          var _base = file.url.hls4.match(/^(.*)\/demo\.m3u8(.*)$/);

          if (!_base) {
            var _pos = file.url.hls4.indexOf('/' + media.id + '.m3u8');

            if (_pos !== -1) _base = [file.url.hls4, file.url.hls4.substring(0, _pos)];
          }

          if (_base) {
            var _base_url = _base[1];

            if (replace_mask && secret) {
              _base_url = _base_url.replace(replace_mask, secret);
            }

            _base_url = component.fixLinkProtocol(_base_url, prefer_http, 'full');
            items.push({
              height: file.h,
              quality_id: file.quality_id,
              label: label,
              codec: file.codec,
              type: 'hls4',
              params: _base[2],
              file: _base_url + '/' + media.id + '.m3u8',
              subtitles: subtitles
            });
          }
        }

        if (file.url.hls2) {
          var _base2 = file.url.hls2.match(/^(.*)\/demo\.m3u8(.*)$/);

          if (!_base2) {
            var _pos2 = file.url.hls2.indexOf('/' + media.id + '.m3u8');

            if (_pos2 !== -1) _base2 = [file.url.hls2, file.url.hls2.substring(0, _pos2)];
          }

          if (_base2) {
            var _base_url2 = _base2[1];

            if (replace_mask && secret) {
              _base_url2 = _base_url2.replace(replace_mask, secret);
            }

            _base_url2 = component.fixLinkProtocol(_base_url2, prefer_http, 'full');
            items.push({
              height: file.h,
              quality_id: file.quality_id,
              label: label,
              codec: file.codec,
              type: 'hls2',
              params: _base2[2],
              file: _base_url2 + '/' + media.id + '.m3u8',
              subtitles: subtitles
            });
          }
        }

        if (file.url.hls && file.file) {
          var _base3 = file.url.hls.match(/^(.*)\/demo\/master-v1a1\.m3u8(.*)$/);

          if (!_base3) {
            var _pos3 = file.url.hls.indexOf((startsWith(file.file, '/') ? '' : '/') + file.file);

            if (_pos3 !== -1) _base3 = [file.url.hls, file.url.hls.substring(0, _pos3)];
          }

          if (_base3) {
            var _base_url3 = _base3[1];

            if (replace_mask && secret) {
              _base_url3 = _base_url3.replace(replace_mask, secret);
            }

            _base_url3 = component.fixLinkProtocol(_base_url3, prefer_http, 'full');
            items.push({
              height: file.h,
              quality_id: file.quality_id,
              label: label,
              codec: file.codec,
              type: 'hls',
              params: _base3[2],
              file: _base_url3 + (startsWith(file.file, '/') ? '' : '/') + file.file,
              subtitles: subtitles
            });
          }
        }
      }
    });
    items.sort(function (a, b) {
      var cmp = b.height - a.height;
      if (cmp) return cmp;
      cmp = b.quality_id - a.quality_id;
      if (cmp) return cmp;
      if (b.label > a.label) return 1;
      if (b.label < a.label) return -1;
      if (b.codec > a.codec) return 1;
      if (b.codec < a.codec) return -1;
      if (b.type > a.type) return 1;
      if (b.type < a.type) return -1;
      return 0;
    });
    return items;
  }

  function getVoiceName(audio, full) {
    var voice_name;

    if (full) {
      voice_name = [audio.type && audio.type.title, audio.author && audio.author.title].filter(function (name) {
        return name;
      }).join(' - ');
    } else {
      var type = audio.type && audio.type.title || '';
      voice_name = type === 'Оригинал' ? type : audio.author && audio.author.title || type;
    }

    if (voice_name) voice_name += audio.lang && audio.lang !== 'und' && audio.lang !== 'rus' ? ' (' + audio.lang + ')' : '';else voice_name = audio.lang || '';
    return voice_name;
  }

  function getVoiceChoice(audios, full) {
    var voice_info = filter_items.voice_info[choice.voice];

    if (voice_info) {
      var type = voice_info.type && voice_info.type.title || '';
      var author = !full && type === 'Оригинал' ? '' : voice_info.author && voice_info.author.title;
      var lang = voice_info.lang || '';

      if (author) {
        var tmp = audios.filter(function (audio) {
          return audio.author && audio.author.title === author;
        });
        if (tmp.length) audios = tmp;

        if (type && full) {
          tmp = tmp.filter(function (audio) {
            return audio.type && audio.type.title === type;
          });
          if (tmp.length) audios = tmp;
        }
      }

      if (lang) {
        var _tmp4 = audios.filter(function (audio) {
          return audio.lang === lang;
        });

        if (_tmp4.length) audios = _tmp4;
      }

      if (!author) {
        var _tmp5 = audios.filter(function (audio) {
          return !full && audio.type && audio.type.title === 'Оригинал' || !(audio.author && audio.author.title);
        });

        if (_tmp5.length) audios = _tmp5;

        if (type) {
          _tmp5 = _tmp5.filter(function (audio) {
            return audio.type && audio.type.title === type;
          });
          if (_tmp5.length) audios = _tmp5;
        }
      }
    }

    return audios.length == 1 ? audios[0] : null;
  }
  /**
   * Построить фильтр
   */


  function filter() {
    filter_items = {
      season: extract.seasons ? extract.seasons.map(function (season) {
        return Lampa.Lang.translate('torrent_serial_season') + ' ' + season.number + (season.title ? ' - ' + season.title : '');
      }) : [],
      voice: [],
      voice_info: []
    };
    if (!filter_items.season[choice.season]) choice.season = 0;

    if (extract.seasons || extract.videos && extract.videos.length > 1) {
      var episodes;

      if (extract.seasons) {
        var season = extract.seasons[choice.season];
        episodes = season && season.episodes || [];
      } else episodes = extract.videos;

      episodes.forEach(function (episode) {
        var audios = episode.audios || [];
        audios.forEach(function (audio) {
          var voice_name = getVoiceName(audio);

          if (voice_name && filter_items.voice.indexOf(voice_name) == -1) {
            filter_items.voice.push(voice_name);
            filter_items.voice_info.push(audio);
          }
        });
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
   * Отфильтровать файлы
   * @returns array
   */


  function filtred() {
    var filtred = [];

    if (extract.seasons) {
      var season = extract.seasons[choice.season];
      var episodes = season && season.episodes || [];
      episodes.forEach(function (episode) {
        var audios = episode.audios || [];
        var audio = getVoiceChoice(audios);
        var voice_name;
        if (audio) voice_name = getVoiceName(audio);else {
          audio = {};
          var voice_names = audios.map(function (audio) {
            return getVoiceName(audio);
          }).filter(function (name) {
            return name;
          });
          voice_name = component.uniqueNamesShortText(voice_names, 80);
        }
        filtred.push({
          title: component.formatEpisodeTitle(season.number, episode.number, episode.title),
          orig_title: extract.title || select_title,
          quality: extract.quality ? extract.quality + 'p' : '360p ~ 1080p',
          info: voice_name ? ' / ' + voice_name : '',
          season: '' + season.number,
          episode: parseInt(episode.number),
          audio_index: audio.index,
          media: episode
        });
      });
    } else if (extract.videos && extract.videos.length > 1) {
      extract.videos.forEach(function (video, index) {
        var audios = video.audios || [];
        var audio = getVoiceChoice(audios);
        var voice_name;
        if (audio) voice_name = getVoiceName(audio);else {
          audio = {};
          var voice_names = audios.map(function (audio) {
            return getVoiceName(audio);
          }).filter(function (name) {
            return name;
          });
          voice_name = component.uniqueNamesShortText(voice_names, 80);
        }
        var episode_num = video.number != null ? video.number : index + 1;
        var title = episode_num + (video.title ? ' - ' + video.title : '');
        filtred.push({
          title: title,
          orig_title: extract.title || select_title,
          quality: extract.quality ? extract.quality + 'p' : '360p ~ 1080p',
          info: voice_name ? ' / ' + voice_name : '',
          season: 1,
          episode: parseInt(episode_num),
          audio_index: audio.index,
          media: video
        });
      });
    } else if (extract.videos) {
      extract.videos.forEach(function (video) {
        var audios = video.audios || [];

        if (!audios.length) {
          audios.push({});
        }

        audios.forEach(function (audio) {
          filtred.push({
            title: getVoiceName(audio, true) || video.title || select_title,
            orig_title: extract.title || select_title,
            quality: extract.quality ? extract.quality + 'p' : '360p ~ 1080p',
            info: audio.codec && audio.codec !== 'aac' ? ' / ' + audio.codec : '',
            audio_index: audio.index,
            media: video
          });
        });
      });
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
    var subtitles = false;
    var items = element.media.streams || [];
    items = items.filter(function (elem) {
      return elem.type === hls_type;
    });

    {
      var tmp = items.filter(function (elem) {
        return elem.codec === 'h265';
      });
      if (tmp.length) items = tmp;
    }

    {
      var _tmp6 = items.filter(function (elem) {
        return elem.codec === 'h264';
      });

      if (_tmp6.length) items = _tmp6;
    }

    if (items && items.length) {
      var file_end = items[0].type === 'hls' ? element.audio_index ? '/master-v1a' + element.audio_index + '.m3u8' : '/master.m3u8' : '';
      file_end += '?loc=' + server;
      file = items[0].file + file_end;
      subtitles = items[0].subtitles;

      if (items.some(function (item) {
        return item.file != items[0].file;
      })) {
        quality = {};
        items.forEach(function (item) {
          quality[item.label] = item.file + file_end;
        });
      }
    }

    return {
      file: file,
      quality: quality,
      subtitles: subtitles
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
      var hash_file = Lampa.Utils.hash(element.season ? [element.season, element.season > 10 ? ':' : '', element.episode, object.movie.original_title, element.orig_title, filter_items.voice[choice.voice]].join('') : object.movie.original_title + element.orig_title + element.title);
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
            title: element.season ? element.title : select_title + (element.title == select_title ? '' : ' / ' + element.title)
          };

          if (element.season) {
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
