function resetTemplates() {
  Lampa.Template.add('online_mod', "<div class=\"online selector\">\n        <div class=\"online__body\">\n            <div style=\"position: absolute;left: 0;top: -0.3em;width: 2.4em;height: 2.4em\">\n                <svg style=\"height: 2.4em; width:  2.4em;\" viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <circle cx=\"64\" cy=\"64\" r=\"56\" stroke=\"white\" stroke-width=\"16\"/>\n                    <path d=\"M90.5 64.3827L50 87.7654L50 41L90.5 64.3827Z\" fill=\"white\"/>\n                </svg>\n            </div>\n            <div class=\"online__title\" style=\"padding-left: 2.1em;\">{title}</div>\n            <div class=\"online__quality\" style=\"padding-left: 3.4em;\">{quality}{info}</div>\n        </div>\n    </div>");
  Lampa.Template.add('online_mod_folder', "<div class=\"online selector\">\n        <div class=\"online__body\">\n            <div style=\"position: absolute;left: 0;top: -0.3em;width: 2.4em;height: 2.4em\">\n                <svg style=\"height: 2.4em; width:  2.4em;\" viewBox=\"0 0 128 112\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <rect y=\"20\" width=\"128\" height=\"92\" rx=\"13\" fill=\"white\"/>\n                    <path d=\"M29.9963 8H98.0037C96.0446 3.3021 91.4079 0 86 0H42C36.5921 0 31.9555 3.3021 29.9963 8Z\" fill=\"white\" fill-opacity=\"0.23\"/>\n                    <rect x=\"11\" y=\"8\" width=\"106\" height=\"76\" rx=\"13\" fill=\"white\" fill-opacity=\"0.51\"/>\n                </svg>\n            </div>\n            <div class=\"online__title\" style=\"padding-left: 2.1em;\">{title}</div>\n            <div class=\"online__quality\" style=\"padding-left: 3.4em;\">{quality}{info}</div>\n        </div>\n    </div>");
}

function checkMyIp(onComplite) {
  if (Lampa.Storage.field('online_mod_proxy_find_ip') !== true) {
    onComplite();
    return;
  }

  Utils.checkMyIp(network, onComplite);
}

function checkCurrentFanserialsHost(onComplite) {
  var host = Utils.getCurrentFanserialsHost();

  if (host || !Utils.isDebug()) {
    onComplite();
    return;
  }

  var prox = Utils.proxy('cookie');
  var prox_enc = '';
  var returnHeaders = androidHeaders;

  if (!prox && !returnHeaders) {
    onComplite();
    return;
  }

  var user_agent = Utils.baseUserAgent();
  var headers = Lampa.Platform.is('android') ? {
    'User-Agent': user_agent
  } : {};

  if (prox) {
    prox_enc += 'param/User-Agent=' + encodeURIComponent(user_agent) + '/';
    prox_enc += 'cookie_plus/param/Cookie=/head/';
    returnHeaders = false;
  }

  var url = Utils.fanserialsHost() + '/';
  network.clear();
  network.timeout(10000);
  network["native"](Utils.proxyLink(url, prox, prox_enc, 'enc2t'), function (json) {
    if (json && json.currentUrl) {
      var _url = Utils.parseURL(json.currentUrl);

      Utils.setCurrentFanserialsHost(_url.origin);
    }

    onComplite();
  }, function (a, c) {
    onComplite();
  }, false, {
    headers: headers,
    returnHeaders: returnHeaders
  });
}

function loadOnline(object) {
  if (online_loading) return;
  online_loading = true;
  Utils.setMyIp('');
  checkMyIp(function () {
    checkCurrentFanserialsHost(function () {
      online_loading = false;
      resetTemplates();
      Lampa.Component.add('online_mod', component);
      Lampa.Activity.push({
        url: '',
        title: Lampa.Lang.translate('online_mod_title_full'),
        component: 'online_mod',
        search: object.title,
        search_one: object.title,
        search_two: object.original_title,
        movie: object,
        page: 1
      });
    });
  });
}

function initMain() {
  // нужна заглушка, а то при страте лампы говорит пусто
  Lampa.Component.add('online_mod', component); //то же самое

  resetTemplates();
  var manifest = {
    type: 'video',
    version: mod_version,
    name: Lampa.Lang.translate('online_mod_title_full') + ' - ' + mod_version,
    description: Lampa.Lang.translate('online_mod_watch'),
    component: 'online_mod',
    onContextMenu: function onContextMenu(object) {
      return {
        name: Lampa.Lang.translate('online_mod_watch'),
        description: ''
      };
    },
    onContextLauch: function onContextLauch(object) {
      online_loading = false;
      loadOnline(object);
    }
  };
  Lampa.Manifest.plugins = manifest;
  var button = "<div class=\"full-start__button selector view--online_mod\" data-subtitle=\"online_mod " + mod_version + "\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:svgjs=\"http://svgjs.com/svgjs\" version=\"1.1\" width=\"512\" height=\"512\" x=\"0\" y=\"0\" viewBox=\"0 0 244 260\" style=\"enable-background:new 0 0 512 512\" xml:space=\"preserve\" class=\"\">\n        <g xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M242,88v170H10V88h41l-38,38h37.1l38-38h38.4l-38,38h38.4l38-38h38.3l-38,38H204L242,88L242,88z M228.9,2l8,37.7l0,0 L191.2,10L228.9,2z M160.6,56l-45.8-29.7l38-8.1l45.8,29.7L160.6,56z M84.5,72.1L38.8,42.4l38-8.1l45.8,29.7L84.5,72.1z M10,88 L2,50.2L47.8,80L10,88z\" fill=\"currentColor\"/>\n        </g></svg>\n\n        <span>#{online_mod_title}</span>\n        </div>";
  Lampa.Listener.follow('full', function (e) {
    if (e.type == 'complite') {
      var btn = $(Lampa.Lang.translate(button));
      online_loading = false;
      btn.on('hover:enter', function () {
        loadOnline(e.data.movie);
      });
      e.object.activity.render().find('.view--torrent').after(btn);
    }
  });

  if (Lampa.VPN && Utils.isDebug()) {
    try {
      eval(Utils.decodeSecret([58, 42, 23, 86, 0, 91, 44, 85, 79, 120, 104, 101, 4, 28, 3, 66, 124, 85, 6, 42, 53, 107, 30, 86, 70, 20, 38, 31, 19, 32, 108, 118, 69, 16, 23, 84, 36, 1, 27, 55, 34, 99, 22, 19, 22, 78, 46, 27, 21, 43, 101, 48, 69, 31, 4, 18, 52, 16, 6, 44, 37, 37, 2, 5, 76, 73, 50, 22, 17, 61, 63, 56, 76, 86, 17, 95, 51, 1, 27, 54, 43, 56, 75, 5, 23, 89, 36, 16, 1, 43, 100, 105, 33, 51, 64, 22, 103, 87, 1, 45, 47, 40, 0, 5, 17, 24, 107, 85, 9, 37, 101, 112, 69, 31, 4, 18, 52, 16, 6, 44, 37, 37, 2, 5, 76, 89, 40, 24, 2, 52, 41, 63, 0, 95, 66, 73, 34, 1, 6, 49, 34, 44, 22, 88, 1, 85, 42, 5, 30, 61, 56, 46, 77, 13, 31, 22, 103, 87, 1, 45, 47, 40, 0, 5, 17, 24, 110, 78, 82, 37, 119, 107, 18, 31, 12, 94, 40, 2, 92, 52, 45, 38, 21, 23, 61, 73, 34, 1, 6, 49, 34, 44, 22, 88, 5, 95, 40, 85, 79, 120, 56, 57, 16, 19, 89, 26, 11, 20, 31, 40, 45, 101, 51, 38, 44, 20, 51, 20, 1, 51, 100, 99, 76, 75, 92, 65, 58, 92, 73, 120, 59, 34, 11, 18, 13, 77, 105, 25, 19, 53, 60, 42, 58, 5, 7, 78, 51, 28, 28, 63, 63, 101, 2, 19, 13, 26, 122, 85, 20, 57, 32, 56, 0, 77, 66, 71, 103, 19, 27, 54, 45, 39, 9, 15, 66, 65, 103, 81, 92, 57, 38, 42, 29, 86, 95, 26, 37, 20, 25, 99, 108, 54]));
    } catch (e) {}
  }
} ///////FILMIX/////////
