function fancdnFillCookie(success, error) {
  var prox = Utils.proxy('fancdn');
  var prox_enc = '';
  var returnHeaders = androidHeaders;

  if (!prox && !returnHeaders) {
    if (error) error();
    return;
  }

  var host = Utils.fanserialsHost();
  var user_agent = Utils.baseUserAgent();
  var headers = Lampa.Platform.is('android') ? {
    'User-Agent': user_agent
  } : {};

  if (prox) {
    prox_enc += 'param/User-Agent=' + encodeURIComponent(user_agent) + '/';
    prox_enc += 'cookie_plus/param/Cookie=/';
    returnHeaders = false;
  }

  var url = host + '/';
  var postdata = 'login_name=' + encodeURIComponent(Lampa.Storage.get('online_mod_fancdn_name', ''));
  postdata += '&login_password=' + encodeURIComponent(Lampa.Storage.get('online_mod_fancdn_password', ''));
  postdata += '&login=submit';
  network.clear();
  network.timeout(8000);
  network["native"](Utils.proxyLink(url, prox, prox_enc, 'enc2t'), function (str) {
    var cookie = '';
    var values = {};
    var sid = '';
    var json = typeof str === 'string' ? Lampa.Arrays.decodeJson(str, {}) : str;
    var body = (json && json.body || '').replace(/\n/g, '');
    var error_form = body.match(/(<div class="berrors-inner">[^<]*<b class="berrors-title">[^<]*<\/b>[^<]*<\/div>)/);

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
      sid = values['PHPSESSID'];
      delete values['PHPSESSID'];
      var cookies = [];

      for (var name in values) {
        cookies.push(name + '=' + values[name]);
      }

      cookie = cookies.join('; ');
    }

    if (cookie) {
      Lampa.Storage.set('online_mod_fancdn_cookie', cookie);
      if (cookie.indexOf('PHPSESSID=') == -1) cookie = 'PHPSESSID=' + (sid || Utils.randomHex(32)) + (cookie ? '; ' + cookie : '');
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
        var error_form = body.match(/(<div class="berrors-inner">[^<]*<b class="berrors-title">[^<]*<\/b>[^<]*<\/div>)/);

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
          delete values['PHPSESSID'];
          var _cookies4 = [];

          for (var _name4 in values) {
            _cookies4.push(_name4 + '=' + values[_name4]);
          }

          cookie = _cookies4.join('; ');
          if (cookie) Lampa.Storage.set('online_mod_fancdn_cookie', cookie);
        }

        if (success) success();
      }, function (a, c) {
        if (success) success();
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
    dataType: 'text',
    headers: headers,
    returnHeaders: returnHeaders
  });
} ///////Онлайн Мод/////////
