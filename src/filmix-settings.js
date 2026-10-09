var filmix_headers = Lampa.Platform.is('android') ? {
  'User-Agent': Utils.filmixUserAgent()
} : {};
var api_url = Utils.filmixAppHost() + '/api/v2/';
var dev_id = Utils.randomHex(16);
var ping_auth;

function addSettingsFilmix() {
  if (Lampa.Settings.main && Lampa.Settings.main() && !Lampa.Settings.main().render().find('[data-component="filmix"]').length) {
    var field = $("<div class=\"settings-folder selector\" data-component=\"filmix\">\n            <div class=\"settings-folder__icon\">\n                <svg height=\"57\" viewBox=\"0 0 58 57\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M20 20.3735V45H26.8281V34.1262H36.724V26.9806H26.8281V24.3916C26.8281 21.5955 28.9062 19.835 31.1823 19.835H39V13H26.8281C23.6615 13 20 15.4854 20 20.3735Z\" fill=\"white\"/>\n                <rect x=\"2\" y=\"2\" width=\"54\" height=\"53\" rx=\"5\" stroke=\"white\" stroke-width=\"4\"/>\n                </svg>\n            </div>\n            <div class=\"settings-folder__name\">Filmix</div>\n        </div>");
    Lampa.Settings.main().render().find('[data-component="more"]').after(field);
    Lampa.Settings.main().update();
  }
}

function showStatus() {
  var status = Lampa.Storage.get("filmix_status", '{}');
  var info = Lampa.Lang.translate('online_mod_filmix_nodevice');

  if (status.login) {
    if (status.is_pro) info = status.login + ' - PRO ' + Lampa.Lang.translate('filter_rating_to') + ' - ' + status.pro_date;else if (status.is_pro_plus) info = status.login + ' - PRO_PLUS ' + Lampa.Lang.translate('filter_rating_to') + ' - ' + status.pro_date;else info = status.login + ' - NO PRO';
  }

  var field = $(Lampa.Lang.translate("\n        <div class=\"settings-param\" data-name=\"filmix_status\" data-static=\"true\">\n            <div class=\"settings-param__name\">#{online_mod_filmix_status}</div>\n            <div class=\"settings-param__value\">".concat(info, "</div>\n        </div>")));
  $('.settings [data-name="filmix_status"]').remove();
  $('.settings [data-name="filmix_add"]').after(field);
}

function checkPro(token, call) {
  var filmix_prox = Utils.proxy('filmix');
  var filmix_prox_enc = '';

  if (filmix_prox) {
    filmix_prox_enc += 'param/User-Agent=' + encodeURIComponent(Utils.filmixUserAgent()) + '/';
  }

  network.clear();
  network.timeout(8000);
  network["native"](Utils.proxyLink(api_url + 'user_profile' + Utils.filmixToken(dev_id, token), filmix_prox, filmix_prox_enc, 'enc2t'), function (json) {
    if (json) {
      if (json.user_data) {
        Lampa.Storage.set("filmix_status", json.user_data);
        if (call) call();
      } else {
        Lampa.Storage.set("filmix_status", {});
      }

      showStatus();
    }
  }, function (a, c) {
    Lampa.Noty.show(network.errorDecode(a, c));
  }, false, {
    headers: filmix_headers
  });
}

function initFilmix() {
  Lampa.Params.select('filmix_token', '', '');
  Lampa.Template.add('settings_filmix', "<div>\n        <div class=\"settings-param selector\" data-name=\"filmix_token\" data-type=\"input\" placeholder=\"#{online_mod_filmix_param_placeholder}\">\n            <div class=\"settings-param__name\">#{online_mod_filmix_param_add_title}</div>\n            <div class=\"settings-param__value\"></div>\n            <div class=\"settings-param__descr\">#{online_mod_filmix_param_add_descr}</div>\n        </div>\n        <div class=\"settings-param selector\" data-name=\"filmix_add\" data-static=\"true\">\n            <div class=\"settings-param__name\">#{online_mod_filmix_param_add_device}</div>\n        </div>\n    </div>");
  Lampa.Storage.listener.follow('change', function (e) {
    if (e.name == 'filmix_token') {
      window.mod_filmix = {
        max_qualitie: 480,
        is_max_qualitie: false
      };
      if (e.value) checkPro(e.value);else {
        Lampa.Storage.set("filmix_status", {});
        showStatus();
      }
    }
  });
  if (window.appready) addSettingsFilmix();else {
    Lampa.Listener.follow('app', function (e) {
      if (e.type == 'ready') addSettingsFilmix();
    });
  }
  Lampa.Settings.listener.follow('open', function (e) {
    if (e.name == 'filmix') {
      e.body.find('[data-name="filmix_add"]').unbind('hover:enter').on('hover:enter', function () {
        var user_code = '';
        var user_token = '';
        var filmix_prox = Utils.proxy('filmix');
        var filmix_prox_enc = '';

        if (filmix_prox) {
          filmix_prox_enc += 'param/User-Agent=' + encodeURIComponent(Utils.filmixUserAgent()) + '/';
        }

        var modal = $('<div><div class="broadcast__text">' + Lampa.Lang.translate('online_mod_filmix_modal_text') + '</div><div class="broadcast__device selector" style="text-align: center">' + Lampa.Lang.translate('online_mod_filmix_modal_wait') + '...</div><br><div class="broadcast__scan"><div></div></div></div></div>');
        Lampa.Modal.open({
          title: '',
          html: modal,
          onBack: function onBack() {
            clearInterval(ping_auth);
            Lampa.Modal.close();
            Lampa.Controller.toggle('settings_component');
          },
          onSelect: function onSelect() {
            Lampa.Utils.copyTextToClipboard(user_code, function () {
              Lampa.Noty.show(Lampa.Lang.translate('online_mod_filmix_copy_secuses'));
            }, function () {
              Lampa.Noty.show(Lampa.Lang.translate('online_mod_filmix_copy_fail'));
            });
          }
        });
        ping_auth = setInterval(function () {
          checkPro(user_token, function () {
            clearInterval(ping_auth);
            Lampa.Modal.close();
            Lampa.Storage.set("filmix_token", user_token);
            e.body.find('[data-name="filmix_token"] .settings-param__value').text(user_token);
            Lampa.Controller.toggle('settings_component');
          });
        }, 10000);
        network.clear();
        network.timeout(10000);
        network["native"](Utils.proxyLink(api_url + 'token_request' + Utils.filmixToken(dev_id, ''), filmix_prox, filmix_prox_enc, 'enc2t'), function (found) {
          if (found && found.status == 'ok') {
            user_token = found.code;
            user_code = found.user_code;
            modal.find('.selector').text(user_code); //modal.find('.broadcast__scan').remove()
          } else {
            clearInterval(ping_auth);
            modal.find('.selector').text(Lampa.Lang.translate('network_401'));
            modal.find('.broadcast__scan').remove();
            Lampa.Noty.show(Lampa.Lang.translate('network_401'));
          }
        }, function (a, c) {
          clearInterval(ping_auth);
          modal.find('.selector').text(Lampa.Lang.translate('network_noconnect') + ': ' + network.errorCode(a));
          modal.find('.broadcast__scan').remove();
          Lampa.Noty.show(network.errorDecode(a, c));
        }, false, {
          headers: filmix_headers
        });
      });
      showStatus();
    }
  });
} ///////Rezka2/////////
