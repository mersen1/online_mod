function rezka2Login(success, error) {
  if (Utils.proxy('rezka2')) {
    return rezka2FillCookie(function () {
      Lampa.Storage.set('online_mod_rezka2_status', 'true');
      if (success) success();
    }, function () {
      Lampa.Storage.set('online_mod_rezka2_status', 'false');
      if (error) error();
    });
  }
  var host = Utils.rezka2Mirror();
  var url = host + '/ajax/login/';
  var postdata = 'login_name=' + encodeURIComponent(Lampa.Storage.get('online_mod_rezka2_name', ''));
  postdata += '&login_password=' + encodeURIComponent(Lampa.Storage.get('online_mod_rezka2_password', ''));
  postdata += '&login_not_save=0';
  network.clear();
  network.timeout(8000);
  network.silent(url, function (json) {
    if (json && (json.success || json.message == 'Уже авторизован на сайте. Необходимо обновить страницу!')) {
      Lampa.Storage.set('online_mod_rezka2_status', 'true');
      network.clear();
      network.timeout(8000);
      network.silent(host + '/', function (str) {
        str = (str || '').replace(/\n/g, '');
        var error_form = str.match(/(<div class="error-code">[^<]*<div>[^<]*<\/div>[^<]*<\/div>)\s*(<div class="error-title">[^<]*<\/div>)/);

        if (error_form) {
          Lampa.Noty.show(error_form[0]);
          if (error) error();
          return;
        }

        var verify_form = str.match(/<span>MIRROR<\/span>.*<button type="submit" onclick="\$\.cookie(\([^)]*\))/);

        if (verify_form) {
          Lampa.Noty.show(Lampa.Lang.translate('online_mod_unsupported_mirror') + ' HDrezka');
          rezka2Logout(error, error);
          return;
        }

        if (success) success();
      }, function (a, c) {
        Lampa.Storage.set('online_mod_rezka2_status', 'false');
        Lampa.Noty.show(network.errorDecode(a, c));
        if (error) error();
      }, false, {
        dataType: 'text',
        withCredentials: true
      });
    } else {
      Lampa.Storage.set('online_mod_rezka2_status', 'false');
      if (json && json.message) Lampa.Noty.show(json.message);
      if (error) error();
    }
  }, function (a, c) {
    Lampa.Noty.show(network.errorDecode(a, c));
    if (error) error();
  }, postdata, {
    withCredentials: true
  });
}

function rezka2Logout(success, error) {
  var url = Utils.rezka2Mirror() + '/logout/';
  var prox = Utils.proxy('rezka2');
  var cookie = Lampa.Storage.get('online_mod_rezka2_cookie', '') + '';
  var encoded = prox && cookie ? 'param/Cookie=' + encodeURIComponent(cookie) + '/' : '';
  Lampa.Storage.set('online_mod_rezka2_cookie', '');
  Lampa.Storage.set('online_mod_rezka2_status', 'false');
  network.clear();
  network.timeout(8000);
  network.silent(Utils.proxyLink(url, prox, encoded, 'enc2t'), function (str) {
    Lampa.Storage.set('online_mod_rezka2_status', 'false');
    if (success) success();
  }, function (a, c) {
    Lampa.Storage.set('online_mod_rezka2_status', 'false');
    Lampa.Noty.show(network.errorDecode(a, c));
    if (error) error();
  }, false, {
    dataType: 'text',
    withCredentials: !prox
  });
}

function rezka2FillCookie(success, error) {
  var prox = Utils.proxy('rezka2');
  var prox_enc = '';
  var returnHeaders = androidHeaders;
  var proxy_mirror = Lampa.Storage.field('online_mod_proxy_rezka2_mirror') === true;
  var host = prox && !proxy_mirror ? Utils.rezka2Host() : Utils.rezka2Mirror();
  if (!prox && !returnHeaders) prox = Utils.proxy('cookie');

  if (!prox && !returnHeaders) {
    if (error) error();
    return;
  }

  var user_agent = Utils.baseUserAgent();
  var headers = Lampa.Platform.is('android') ? {
    'User-Agent': user_agent
  } : {};

  if (prox) {
    prox_enc += 'param/User-Agent=' + encodeURIComponent(user_agent) + '/';
    prox_enc += 'cookie_plus/param/Cookie=/';
    returnHeaders = false;
  }

  var url = host + '/ajax/login/';
  var postdata = 'login_name=' + encodeURIComponent(Lampa.Storage.get('online_mod_rezka2_name', ''));
  postdata += '&login_password=' + encodeURIComponent(Lampa.Storage.get('online_mod_rezka2_password', ''));
  postdata += '&login_not_save=0';
  network.clear();
  network.timeout(8000);
  network["native"](Utils.proxyLink(url, prox, prox_enc, 'enc2t'), function (json) {
    var cookie = '';
    var values = {};
    var sid = '';
    var body = json && json.body || {};
    body = typeof body === 'string' ? Lampa.Arrays.decodeJson(body, {}) : body;

    if (!body.success) {
      if (body.message) Lampa.Noty.show(body.message);
      if (error) error();
      return;
    }

    var cookieHeaders = json && json.headers && json.headers['set-cookie'] || null;

    if (cookieHeaders && cookieHeaders.forEach) {
      cookieHeaders.forEach(function (param) {
        var parts = param.split(';')[0].split('=');

        if (parts[0]) {
          if (parts[1] === 'deleted') delete values[parts[0]];else values[parts[0]] = parts[1] || '';
        }
      });
      sid = values['PHPSESSID'];
      delete values['PHPSESSID'];
      var cookies = [];

      for (var name in values) {
        cookies.push(name + '=' + values[name]);
      }

      cookie = cookies.join('; ');
    }

    if (cookie) {
      Lampa.Storage.set('online_mod_rezka2_cookie', cookie);
      if (cookie.indexOf('PHPSESSID=') == -1) cookie = 'PHPSESSID=' + (sid || Utils.randomId(26)) + (cookie ? '; ' + cookie : '');
      var prox_enc2 = prox_enc;

      if (prox) {
        prox_enc2 += 'param/Cookie=' + encodeURIComponent(cookie) + '/';
      } else {
        headers['Cookie'] = cookie;
      }

      network.clear();
      network.timeout(8000);
      network["native"](Utils.proxyLink(host + '/', prox, prox_enc2, 'enc2t'), function (str) {
        var json = typeof str === 'string' ? Lampa.Arrays.decodeJson(str, {}) : str;
        var body = (json && json.body || '').replace(/\n/g, '');
        var error_form = body.match(/(<div class="error-code">[^<]*<div>[^<]*<\/div>[^<]*<\/div>)\s*(<div class="error-title">[^<]*<\/div>)/);

        if (error_form) {
          Lampa.Noty.show(error_form[0]);
          if (error) error();
          return;
        }

        var cookieHeaders = json && json.headers && json.headers['set-cookie'] || null;

        if (cookieHeaders && cookieHeaders.forEach) {
          cookieHeaders.forEach(function (param) {
            var parts = param.split(';')[0].split('=');

            if (parts[0]) {
              if (parts[1] === 'deleted') delete values[parts[0]];else values[parts[0]] = parts[1] || '';
            }
          });
          sid = values['PHPSESSID'] || sid;
          delete values['PHPSESSID'];
          var _cookies = [];

          for (var _name in values) {
            _cookies.push(_name + '=' + values[_name]);
          }

          cookie = _cookies.join('; ');
          if (cookie) Lampa.Storage.set('online_mod_rezka2_cookie', cookie);
        }

        var verify_form = body.match(/<span>MIRROR<\/span>.*<button type="submit" onclick="\$\.cookie(\([^)]*\))/);

        if (verify_form) {
          var verify_cookie;

          try {
            var arguments_data = JSON5.parse('[' + verify_form[1].slice(1, -1) + ']');
            if (typeof arguments_data[0] === 'string' && typeof arguments_data[1] === 'string') verify_cookie = { name: arguments_data[0], value: arguments_data[1] };
          } catch (e) {}

          if (verify_cookie) {
            values[verify_cookie.name] = verify_cookie.value;
            var _cookies2 = [];

            for (var _name2 in values) {
              _cookies2.push(_name2 + '=' + values[_name2]);
            }

            cookie = _cookies2.join('; ');
            if (cookie) Lampa.Storage.set('online_mod_rezka2_cookie', cookie);
            if (cookie.indexOf('PHPSESSID=') == -1) cookie = 'PHPSESSID=' + (sid || Utils.randomId(26)) + (cookie ? '; ' + cookie : '');
            var prox_enc3 = prox_enc;

            if (prox) {
              prox_enc3 += 'param/Cookie=' + encodeURIComponent(cookie) + '/';
            } else {
              headers['Cookie'] = cookie;
            }

            network.clear();
            network.timeout(8000);
            network["native"](Utils.proxyLink(host + '/', prox, prox_enc3, 'enc2t'), function (str) {
              var json = typeof str === 'string' ? Lampa.Arrays.decodeJson(str, {}) : str;
              var body = (json && json.body || '').replace(/\n/g, '');
              var error_form = body.match(/(<div class="error-code">[^<]*<div>[^<]*<\/div>[^<]*<\/div>)\s*(<div class="error-title">[^<]*<\/div>)/);

              if (error_form) {
                Lampa.Noty.show(error_form[0]);
                if (error) error();
                return;
              }

              var verify_form = body.match(/<span>MIRROR<\/span>.*<button type="submit" onclick="\$\.cookie(\([^)]*\))/);

              if (verify_form) {
                Lampa.Storage.set('online_mod_rezka2_cookie', '');
                Lampa.Noty.show(Lampa.Lang.translate('online_mod_unsupported_mirror') + ' HDrezka');
                if (error) error();
                return;
              }

              var cookieHeaders = json && json.headers && json.headers['set-cookie'] || null;

              if (cookieHeaders && cookieHeaders.forEach) {
                cookieHeaders.forEach(function (param) {
                  var parts = param.split(';')[0].split('=');

                  if (parts[0]) {
                    if (parts[1] === 'deleted') delete values[parts[0]];else values[parts[0]] = parts[1] || '';
                  }
                });
                sid = values['PHPSESSID'] || sid;
                delete values['PHPSESSID'];
                var _cookies3 = [];

                for (var _name3 in values) {
                  _cookies3.push(_name3 + '=' + values[_name3]);
                }

                cookie = _cookies3.join('; ');
                if (cookie) Lampa.Storage.set('online_mod_rezka2_cookie', cookie);
              }

              if (success) success();
            }, function (a, c) {
              Lampa.Noty.show(network.errorDecode(a, c));
              if (error) error();
            }, false, {
              dataType: 'text',
              headers: headers,
              returnHeaders: returnHeaders
            });
            return;
          }
        }

        if (success) success();
      }, function (a, c) {
        Lampa.Noty.show(network.errorDecode(a, c));
        if (error) error();
      }, false, {
        dataType: 'text',
        headers: headers,
        returnHeaders: returnHeaders
      });
    } else {
      if (error) error();
    }
  }, function (a, c) {
    Lampa.Noty.show(network.errorDecode(a, c));
    if (error) error();
  }, postdata, {
    headers: headers,
    returnHeaders: returnHeaders
  });
}
