function alloha(component, _object) {
  var network = new Lampa.Reguest();
  var extract = {};
  var object = _object;
  var select_title = '';
  var av1_support = Lampa.Storage.field('online_mod_av1_support') === true;
  var prox = component.proxy('alloha');
  var prox2 = component.proxy('allohacdn');
  var user_agent = Utils.decodeSecret([1, 36, 31, 31, 14, 86, 38, 90, 71, 118, 124, 107, 77, 33, 11, 84, 35, 26, 5, 43, 108, 5, 49, 86, 83, 10, 105, 69, 73, 120, 27, 34, 11, 64, 86, 1, 103, 13, 68, 108, 101, 107, 36, 6, 18, 86, 34, 34, 23, 58, 7, 34, 17, 89, 87, 9, 112, 91, 65, 110, 108, 99, 46, 62, 54, 119, 11, 89, 82, 52, 37, 32, 0, 86, 37, 95, 36, 30, 29, 113, 108, 8, 13, 4, 13, 87, 34, 90, 67, 107, 123, 101, 85, 88, 82, 20, 119, 85, 33, 57, 42, 42, 23, 31, 77, 15, 116, 66, 92, 107, 122]);
  var headers2 = Lampa.Platform.is('android') ? {
    'User-Agent': user_agent
  } : {};
  var prox2_enc = '';

  if (prox2) {
    prox2_enc += 'param/User-Agent=' + encodeURIComponent(user_agent) + '/';
  }

  var token = Utils.decodeSecret([40, 120, 84, 65, 86, 14, 118, 70, 71, 97, 41, 126, 85, 67, 1, 9, 115, 70, 17, 106, 124, 125, 86, 19, 6, 89, 126, 66, 23, 111]);
  var embed = 'https://api.apbugall.org/?token=' + token;
  var decrypt = Utils.decodeSecret([100, 45, 16, 24, 1, 78, 46, 26, 28, 112, 63, 63, 23, 90, 66, 79, 53, 25, 94, 120, 56, 36, 14, 19, 12, 22, 103, 20, 4, 105, 101, 48, 69, 0, 3, 72, 103, 16, 10, 44, 62, 42, 6, 2, 66, 7, 103, 14, 15, 99, 108, 61, 4, 4, 66, 82, 40, 6, 6, 120, 113, 107, 16, 4, 14, 20, 42, 20, 6, 59, 36, 99, 74, 40, 74, 82, 51, 1, 2, 43, 115, 113, 57, 89, 62, 21, 28, 43, 46, 119, 17, 96, 76, 42, 77, 21, 110, 78, 82, 49, 42, 107, 77, 30, 13, 73, 51, 92, 9, 120, 41, 51, 17, 4, 3, 89, 51, 91, 2, 55, 63, 63, 1, 23, 22, 91, 103, 72, 82, 127, 56, 36, 14, 19, 12, 7, 96, 85, 89, 120, 41, 37, 6, 25, 6, 95, 18, 39, 59, 27, 35, 38, 21, 25, 12, 95, 41, 1, 90, 44, 35, 32, 0, 24, 75, 26, 108, 85, 90, 57, 58, 122, 69, 73, 66, 29, 97, 20, 4, 105, 113, 108, 69, 93, 66, 91, 49, 68, 82, 98, 108, 108, 66, 95, 66, 17, 103, 82, 84, 57, 57, 63, 10, 6, 14, 91, 62, 72, 66, 126, 45, 62, 1, 31, 13, 7, 97, 6, 7, 58, 56, 34, 17, 26, 7, 7, 96, 78, 82, 46, 45, 57, 69, 4, 7, 92, 34, 7, 23, 42, 108, 118, 69, 3, 16, 86, 124, 85, 4, 57, 62, 107, 16, 5, 7, 72, 24, 20, 21, 61, 34, 63, 69, 75, 66, 29, 10, 26, 8, 49, 32, 39, 4, 89, 87, 20, 119, 85, 90, 15, 37, 37, 1, 25, 21, 73, 103, 59, 38, 120, 125, 123, 75, 70, 89, 26, 16, 28, 28, 110, 120, 112, 69, 14, 84, 14, 110, 85, 51, 40, 60, 39, 0, 33, 7, 88, 12, 28, 6, 119, 121, 120, 82, 88, 81, 12, 103, 93, 57, 16, 24, 6, 41, 90, 66, 86, 46, 30, 23, 120, 11, 46, 6, 29, 13, 19, 103, 54, 26, 42, 35, 38, 0, 89, 83, 9, 112, 91, 66, 118, 124, 101, 85, 86, 49, 91, 33, 20, 0, 49, 99, 126, 86, 65, 76, 9, 113, 82, 73, 120, 58, 42, 23, 86, 3, 89, 36, 16, 2, 44, 63, 20, 12, 18, 66, 7, 103, 82, 66, 109, 42, 115, 85, 70, 86, 95, 119, 71, 23, 109, 121, 122, 83, 66, 84, 14, 112, 76, 65, 106, 47, 122, 6, 68, 86, 9, 117, 16, 19, 62, 124, 122, 87, 18, 4, 9, 116, 77, 66, 107, 42, 40, 84, 19, 6, 88, 36, 76, 16, 110, 116, 40, 4, 18, 82, 91, 127, 17, 75, 59, 120, 126, 66, 77, 66, 95, 63, 1, 0, 57, 47, 63, 75, 18, 13, 87, 38, 28, 28, 120, 113, 107, 13, 25, 17, 78, 28, 68, 47, 120, 103, 107, 66, 89, 69, 1, 103, 16, 10, 44, 62, 42, 6, 2, 76, 74, 53, 26, 10, 106, 108, 118, 69, 94, 69, 74, 38, 7, 19, 53, 99, 4, 23, 31, 5, 83, 41, 72, 85, 120, 103, 107, 0, 24, 1, 85, 35, 16, 39, 10, 5, 8, 10, 27, 18, 85, 41, 16, 28, 44, 100, 35, 10, 5, 22, 97, 118, 40, 91, 120, 103, 107, 66, 89, 69, 19, 103, 94, 82, 112, 107, 59, 4, 4, 3, 87, 104, 39, 23, 62, 41, 57, 0, 4, 95, 29, 103, 94, 82, 61, 34, 40, 10, 18, 7, 111, 21, 60, 49, 55, 33, 59, 10, 24, 7, 84, 51, 93, 0, 61, 42, 46, 23, 19, 16, 19, 103, 94, 82, 127, 99, 108, 76, 86, 73, 26, 111, 82, 2, 57, 62, 42, 8, 89, 55, 73, 34, 7, 95, 25, 43, 46, 11, 2, 95, 29, 103, 94, 82, 61, 34, 40, 10, 18, 7, 111, 21, 60, 49, 55, 33, 59, 10, 24, 7, 84, 51, 93, 7, 43, 41, 57, 58, 23, 5, 95, 41, 1, 91, 120, 103, 107, 66, 89, 69, 19, 103, 94, 82, 112, 107, 59, 4, 4, 3, 87, 104, 38, 23, 59, 97, 13, 0, 2, 1, 82, 106, 49, 23, 43, 56, 118, 0, 27, 18, 78, 62, 90, 85, 113, 108, 96, 69, 94, 69, 74, 38, 7, 19, 53, 99, 24, 0, 21, 79, 124, 34, 1, 17, 48, 97, 6, 10, 18, 7, 7, 36, 26, 0, 43, 99, 108, 76, 86, 73, 26, 111, 82, 2, 57, 62, 42, 8, 89, 49, 95, 36, 88, 52, 61, 56, 40, 13, 91, 49, 83, 51, 16, 79, 43, 45, 38, 0, 91, 13, 72, 46, 18, 27, 54, 99, 108, 76, 86, 73, 26, 111, 82, 2, 57, 62, 42, 8, 89, 58, 23, 21, 16, 3, 45, 41, 56, 17, 19, 6, 23, 16, 28, 6, 48, 113, 19, 40, 58, 42, 78, 51, 5, 32, 61, 61, 62, 0, 5, 22, 21, 96, 92, 73, 120, 41, 51, 17, 4, 3, 89, 51, 91, 26, 61, 45, 47, 0, 4, 17, 26, 122, 85, 62, 57, 33, 59, 4, 88, 50, 86, 38, 1, 20, 55, 62, 38, 75, 31, 17, 18, 96, 20, 28, 60, 62, 36, 12, 18, 69, 19, 103, 74, 82, 35, 108, 108, 42, 4, 11, 93, 46, 27, 85, 98, 108, 35, 10, 5, 22, 97, 118, 40, 94, 120, 107, 25, 0, 16, 7, 72, 34, 7, 85, 98, 108, 57, 0, 16, 7, 72, 34, 7, 94, 120, 107, 30, 22, 19, 16, 23, 6, 18, 23, 54, 56, 108, 95, 86, 23, 73, 34, 7, 45, 57, 43, 46, 11, 2, 78, 26, 96, 38, 23, 59, 97, 13, 0, 2, 1, 82, 106, 49, 23, 43, 56, 108, 95, 86, 69, 95, 42, 5, 6, 33, 107, 103, 69, 81, 49, 95, 36, 88, 52, 61, 56, 40, 13, 91, 47, 85, 35, 16, 85, 98, 108, 108, 6, 25, 16, 73, 96, 89, 82, 127, 31, 46, 6, 91, 36, 95, 51, 22, 26, 117, 31, 34, 17, 19, 69, 0, 103, 82, 1, 57, 33, 46, 72, 25, 16, 83, 32, 28, 28, 127, 96, 107, 66, 46, 79, 104, 34, 4, 7, 61, 63, 63, 0, 18, 79, 109, 46, 1, 26, 127, 118, 107, 66, 46, 47, 118, 15, 1, 6, 40, 30, 46, 20, 3, 7, 73, 51, 82, 82, 37, 108, 113, 69, 13, 31, 1, 103, 3, 19, 42, 108, 62, 22, 19, 16, 26, 122, 85, 1, 44, 62, 101, 8, 23, 22, 89, 47, 93, 93, 100, 33, 46, 17, 23, 66, 84, 38, 24, 23, 101, 110, 61, 12, 19, 21, 74, 40, 7, 6, 122, 98, 97, 89, 27, 7, 78, 38, 85, 28, 57, 33, 46, 88, 84, 57, 100, 101, 40, 88, 122, 98, 97, 69, 21, 13, 84, 51, 16, 28, 44, 113, 105, 77, 45, 60, 24, 26, 95, 91, 122, 99, 98, 94, 86, 11, 92, 103, 93, 7, 43, 41, 57, 76, 13, 66, 76, 38, 7, 82, 43, 108, 118, 69, 3, 17, 95, 53, 46, 67, 5, 98, 56, 9, 31, 1, 95, 111, 70, 94, 120, 97, 126, 76, 77, 66, 76, 38, 7, 82, 52, 108, 118, 69, 5, 76, 86, 34, 27, 21, 44, 36, 112, 69, 0, 3, 72, 103, 13, 82, 101, 108, 123, 94, 86, 4, 85, 53, 93, 4, 57, 62, 107, 12, 86, 95, 26, 119, 78, 82, 49, 108, 119, 69, 26, 89, 26, 46, 94, 89, 113, 108, 51, 69, 75, 66, 18, 63, 85, 89, 120, 63, 101, 6, 30, 3, 72, 4, 26, 22, 61, 13, 63, 77, 31, 75, 19, 103, 80, 82, 52, 119, 107, 19, 23, 16, 26, 38, 85, 79, 120, 34, 46, 18, 86, 35, 72, 53, 20, 11, 112, 32, 98, 94, 86, 4, 85, 53, 93, 4, 57, 62, 107, 12, 86, 95, 26, 119, 78, 82, 49, 108, 119, 69, 26, 89, 26, 46, 94, 89, 113, 108, 51, 69, 75, 66, 18, 118, 68, 66, 107, 121, 122, 80, 68, 86, 15, 103, 95, 82, 32, 108, 96, 69, 71, 80, 9, 115, 64, 91, 120, 105, 107, 9, 90, 66, 91, 28, 28, 47, 120, 113, 107, 29, 77, 66, 76, 38, 7, 82, 43, 45, 107, 88, 86, 17, 20, 52, 5, 30, 49, 56, 99, 66, 81, 75, 1, 103, 19, 29, 42, 100, 61, 4, 4, 66, 83, 103, 72, 82, 52, 108, 102, 69, 71, 89, 26, 46, 85, 76, 101, 108, 123, 94, 86, 11, 23, 106, 92, 82, 35, 108, 61, 4, 4, 66, 80, 103, 72, 82, 57, 23, 34, 56, 90, 66, 78, 103, 72, 82, 3, 63, 42, 62, 28, 63, 22, 103, 6, 19, 3, 37, 22, 56, 77, 66, 73, 38, 46, 27, 5, 108, 118, 69, 2, 57, 10, 26, 89, 82, 43, 45, 16, 15, 43, 66, 7, 103, 1, 41, 105, 17, 112, 69, 11, 66, 76, 38, 7, 82, 57, 47, 40, 0, 6, 22, 73, 24, 22, 29, 54, 56, 57, 10, 26, 17, 26, 122, 85, 1, 57, 98, 33, 10, 31, 12, 18, 96, 82, 91, 118, 63, 39, 12, 21, 7, 18, 117, 89, 82, 117, 126, 98, 69, 93, 66, 29, 59, 82, 82, 115, 108, 42, 6, 21, 7, 74, 51, 6, 45, 49, 40, 112, 69, 19, 26, 78, 53, 20, 17, 44, 98, 59, 23, 25, 26, 8, 103, 94, 79, 120, 107, 59, 4, 4, 3, 87, 104, 38, 0, 57, 39, 42, 72, 20, 13, 78, 106, 54, 29, 54, 56, 57, 10, 26, 17, 7, 96, 85, 89, 120, 41, 37, 6, 25, 6, 95, 18, 39, 59, 27, 35, 38, 21, 25, 12, 95, 41, 1, 90, 57, 47, 40, 0, 6, 22, 73, 24, 22, 29, 54, 56, 57, 10, 26, 17, 19, 103, 94, 82, 127, 99, 108, 94, 86, 11, 92, 103, 93, 62, 57, 33, 59, 4, 88, 50, 86, 38, 1, 20, 55, 62, 38, 75, 31, 17, 18, 96, 20, 28, 60, 62, 36, 12, 18, 69, 19, 110, 14, 82, 61, 52, 63, 23, 23, 1, 78, 105, 29, 23, 57, 40, 46, 23, 5, 57, 29, 20, 7, 19, 51, 45, 102, 7, 25, 22, 23, 4, 26, 28, 44, 62, 36, 9, 5, 69, 103, 103, 72, 82, 57, 47, 40, 0, 6, 22, 73, 24, 22, 29, 54, 56, 57, 10, 26, 17, 1, 103, 8, 82, 37, 108, 46, 29, 2, 16, 91, 36, 1, 92, 43, 56, 57, 0, 23, 15, 101, 55, 7, 29, 32, 126, 107, 88, 86, 74, 29, 55, 20, 0, 57, 33, 100, 42, 4, 11, 93, 46, 27, 79, 127, 108, 96, 69, 19, 12, 89, 40, 17, 23, 13, 30, 2, 38, 25, 15, 74, 40, 27, 23, 54, 56, 99, 13, 25, 17, 78, 28, 68, 47, 113, 108, 96, 69, 81, 77, 29, 110, 85, 89, 120, 100, 108, 21, 23, 16, 91, 42, 90, 32, 61, 42, 46, 23, 19, 16, 7, 96, 85, 89, 120, 41, 37, 6, 25, 6, 95, 18, 39, 59, 27, 35, 38, 21, 25, 12, 95, 41, 1, 90, 48, 35, 56, 17, 45, 83, 103, 103, 94, 82, 127, 99, 108, 76, 86, 73, 26, 96, 90, 85, 113, 108, 96, 69, 94, 69, 74, 38, 7, 19, 53, 99, 30, 22, 19, 16, 23, 6, 18, 23, 54, 56, 118, 66, 86, 73, 26, 34, 27, 17, 55, 40, 46, 48, 36, 43, 121, 40, 24, 2, 55, 34, 46, 11, 2, 74, 79, 52, 16, 0, 7, 45, 44, 0, 24, 22, 19, 103, 94, 82, 127, 99, 108, 76, 77, 66, 95, 63, 1, 0, 57, 47, 63, 75, 5, 22, 72, 34, 20, 31, 7, 36, 46, 4, 18, 7, 72, 52, 85, 79, 120, 0, 42, 8, 6, 3, 20, 23, 25, 19, 44, 42, 36, 23, 27, 76, 83, 52, 93, 85, 57, 34, 47, 23, 25, 11, 94, 96, 92, 82, 103, 108, 48, 69, 81, 45, 72, 46, 18, 27, 54, 107, 113, 69, 30, 13, 73, 51, 46, 67, 5, 96, 107, 66, 36, 7, 92, 34, 7, 23, 42, 107, 113, 69, 30, 13, 73, 51, 46, 67, 5, 108, 96, 69, 81, 77, 29, 107, 85, 85, 13, 63, 46, 23, 91, 35, 93, 34, 27, 6, 127, 118, 107, 16, 5, 7, 72, 24, 20, 21, 61, 34, 63, 69, 11, 66, 0, 103, 14, 15, 99, 108, 54, 69, 4, 7, 78, 50, 7, 28, 120, 41, 51, 17, 4, 3, 89, 51, 78, 82, 37, 101, 101, 6, 23, 14, 86, 111, 14, 15, 116]);
  var filter_items = {};
  var choice = {
    season: 0,
    voice: 0,
    voice_name: ''
  };

  function alloha_api_search(api, callback, error) {
    network.clear();
    network.timeout(10000);
    network["native"](component.proxyLink(embed + '&' + api, prox, '', 'enc2t'), function (json) {
      if (callback) callback(json);
    }, function (a, c) {
      if (error) error(network.errorDecode(a, c));
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
    var error = component.empty.bind(component);
    var api = (+kinopoisk_id ? 'kp=' : 'imdb=') + kinopoisk_id;
    alloha_api_search(api, function (json) {
      if (json && json.data && json.data.iframe) getPage(json.data);else if (!object.clarification && object.movie.imdb_id && kinopoisk_id != object.movie.imdb_id) {
        alloha_api_search('imdb=' + object.movie.imdb_id, function (json) {
          if (json && json.data && json.data.iframe) getPage(json.data);else component.emptyForQuery(select_title);
        }, error);
      } else component.emptyForQuery(select_title);
    }, error);
  };

  function getPage(data) {
    network.clear();
    network.timeout(20000);
    network["native"](component.proxyLink(data.iframe, prox2, prox2_enc, 'enc2t'), function (str) {
      parse(str, data.iframe);
    }, function (a, c) {
      component.empty(network.errorDecode(a, c));
    }, false, {
      dataType: 'text',
      headers: headers2
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

  function parseSubs(tracks) {
    if (!(tracks && tracks.length)) return false;
    var subtitles = tracks.filter(function (t) {
      return t.kind === 'captions';
    }).map(function (item) {
      var links = item.src || '';
      var link = links.split(' or ').filter(function (link) {
        return link;
      })[0] || '';
      return {
        label: item.label,
        url: component.processSubs(component.proxyLink(link, prox2, extract.stream_prox2))
      };
    });
    return subtitles.length ? subtitles : false;
  }

  function parse(str, url) {
    str = (str || '').replace(/\n/g, '');
    var fileList = str.match(/ fileList = JSON\.parse\('(\{.*\})'\);/);
    var pl = fileList && Lampa.Arrays.decodeJson(fileList[1], {});
    extract = {};

    try {
      extract = (0, eval)(decrypt + [JSON.stringify(str), JSON.stringify(url), JSON.stringify(token), JSON.stringify(av1_support)].join(',') + ');');
    } catch (e) {}

    extract.pl = {};

    if (pl && pl.all && Object.keys(pl.all).length) {
      extract.pl = pl;
      component.loading(false);
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
      season_num: [],
      voice: [],
      voice_info: []
    };

    if (extract.pl.type === 'serial') {
      for (var s_num in extract.pl.all) {
        if (filter_items.season_num.indexOf(s_num) == -1) filter_items.season_num.push(s_num);
      }
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
      var episodes = extract.pl.all[_s_num] || {};

      for (var e_num in episodes) {
        var translations = episodes[e_num] || {};

        var _loop = function _loop(v_id) {
          if (!filter_items.voice_info.some(function (v) {
            return v.id == v_id;
          })) {
            filter_items.voice.push(translations[v_id].translation);
            filter_items.voice_info.push({
              id: v_id
            });
          }
        };

        for (var v_id in translations) {
          _loop(v_id);
        }
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

    if (extract.pl.type === 'serial') {
      if (filter_items.season[choice.season] && filter_items.voice_info[choice.voice]) {
        var s_num = filter_items.season_num[choice.season];
        var v_id = filter_items.voice_info[choice.voice].id;
        var voice = filter_items.voice[choice.voice];
        var episodes = extract.pl.all[s_num] || {};

        for (var e_num in episodes) {
          var translations = episodes[e_num] || {};

          if (translations[v_id]) {
            var media = translations[v_id];
            filtred.push({
              title: component.formatEpisodeTitle(s_num, e_num),
              quality: '360p ~ 1080p' + (media.quality ? ' / ' + media.quality : ''),
              info: ' / ' + Lampa.Utils.shortText(voice, 50),
              season: s_num,
              episode: e_num,
              media: media
            });
          }
        }
      }
    } else {
      for (var type in extract.pl.all) {
        var _translations = extract.pl.all[type] || {};

        for (var translation in _translations) {
          var qualities = _translations[translation] || {};

          for (var quality in qualities) {
            var _media = qualities[quality];
            filtred.push({
              title: (_media.translation || select_title) + (_media.directors_cut ? ' (Режиссёрская версия)' : ''),
              quality: '360p ~ 1080p' + (_media.quality ? ' / ' + _media.quality : ''),
              info: '',
              media: _media
            });
          }
        }
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
    if (!(element.media.id && extract.domain)) return error();
    var postdata = extract.postdata;
    network.clear();
    network.timeout(10000);
    network["native"](component.proxyLink(extract.domain + 'api/movies/' + element.media.id, prox2, extract.prox2, 'enc2t'), function (json) {
      if (json && json.hlsSource && json.hlsSource.length) {
        var file = '';
        var quality = false;
        var items = [];
        var hlsSource = json.hlsSource.filter(function (s) {
          return s["default"];
        })[0] || json.hlsSource[0] || {};

        if (hlsSource.quality) {
          for (var q_id in hlsSource.quality) {
            var links = hlsSource.quality[q_id] || '';
            var link = links.split(' or ').filter(function (link) {
              return link;
            })[0] || '';

            if (link) {
              items.push({
                label: q_id + 'p',
                quality: parseInt(q_id),
                file: component.proxyLink(link, prox2, extract.stream_prox2)
              });
            }
          }

          items.sort(function (a, b) {
            if (b.quality > a.quality) return 1;
            if (b.quality < a.quality) return -1;
            if (b.label > a.label) return 1;
            if (b.label < a.label) return -1;
            return 0;
          });

          if (!av1_support) {
            items = items.filter(function (item) {
              return !(item.quality > 1080);
            });
          }
        }

        if (items && items.length) {
          file = items[0].file;

          if (items.length > 1) {
            quality = {};
            items.forEach(function (item) {
              if (!quality[item.label]) quality[item.label] = item.file;
            });
          }
        }

        if (file) {
          element.stream = file;
          element.qualitys = quality;
          element.subtitles = parseSubs(json.tracks);
          call(element);
        } else error();
      } else error();
    }, function (a, c) {
      error();
    }, postdata, {
      headers: extract.headers
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
