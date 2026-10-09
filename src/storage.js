var mod_version = '09.10.2026-mersen1.1';
var isMSX = !!(window.TVXHost || window.TVXManager);
var isTizen = navigator.userAgent.toLowerCase().indexOf('tizen') !== -1;
var isIFrame = window.parent !== window;
var isLocal = !startsWith(window.location.protocol, 'http');
var androidHeaders = Lampa.Platform.is('android') && Utils.checkAndroidVersion(339);
var filmixHost = Utils.filmixHost();
var network = new Lampa.Reguest();
var online_loading = false;

function logApp() {
  console.log('App', 'start address:', window.location.href);
  console.log('App', 'is MSX:', isMSX);
  console.log('App', 'is Tizen:', isTizen);
  console.log('App', 'is iframe:', isIFrame);
  console.log('App', 'is local:', isLocal);
  console.log('App', 'supports headers:', androidHeaders);
}

function initStorage() {
  if (!Utils.isDebug()) {
    Lampa.Storage.set('online_mod_proxy_lumex', 'false');
    Lampa.Storage.set('online_mod_proxy_rezka2', 'false');
    Lampa.Storage.set('online_mod_proxy_kinobase', 'false');
    Lampa.Storage.set('online_mod_proxy_collaps', 'false');
    Lampa.Storage.set('online_mod_proxy_cdnmovies', 'false');
    Lampa.Storage.set('online_mod_proxy_fancdn', 'false');
    Lampa.Storage.set('online_mod_proxy_fancdn2', 'false');
    Lampa.Storage.set('online_mod_proxy_fanserials', 'false');
    Lampa.Storage.set('online_mod_proxy_fanserials_cdn', 'false');
    Lampa.Storage.set('online_mod_proxy_animelib', 'false');
  } else if (!Lampa.Platform.is('android')) {
    Lampa.Storage.set('online_mod_proxy_lumex', 'true');
    Lampa.Storage.set('online_mod_proxy_cdnmovies', 'true');
    Lampa.Storage.set('online_mod_proxy_fancdn', 'true');
    Lampa.Storage.set('online_mod_proxy_fancdn2', 'true');

    if (!isLocal) {
      Lampa.Storage.set('online_mod_proxy_fanserials', 'true');
    }
  }

  if (!Lampa.Platform.is('android')) {
    Lampa.Storage.set('online_mod_proxy_filmix', 'true');
  }

  Lampa.Storage.set('online_mod_proxy_videoseed', Lampa.Platform.is('android') || isLocal ? 'false' : 'true');
  Lampa.Storage.set('online_mod_proxy_vibix', Lampa.Platform.is('android') ? 'false' : 'true');
  Lampa.Storage.set('online_mod_proxy_redheadsound', Lampa.Platform.is('android') ? 'false' : 'true');
  Lampa.Storage.set('online_mod_proxy_cdnvideohub', 'false');
  Lampa.Storage.set('online_mod_proxy_videodb', 'false');
  Lampa.Storage.set('online_mod_proxy_zetflix', 'false');
  Lampa.Storage.set('online_mod_proxy_kinopub', 'true');
  Lampa.Storage.set('online_mod_proxy_alloha', 'false');
  Lampa.Storage.set('online_mod_proxy_hdvb', 'false');
  Lampa.Storage.set('online_mod_proxy_kp', 'false');
  Lampa.Params.trigger('online_mod_iframe_proxy', !isTizen || isLocal);
  Lampa.Params.trigger('online_mod_proxy_iframe', false);
  Lampa.Params.trigger('online_mod_use_stream_proxy', false);
  Lampa.Params.trigger('online_mod_proxy_find_ip', false);
  Lampa.Params.trigger('online_mod_proxy_other', false);
  Lampa.Params.trigger('online_mod_proxy_lumex', false);
  Lampa.Params.trigger('online_mod_proxy_rezka', false);
  Lampa.Params.trigger('online_mod_proxy_rezka2', false);
  Lampa.Params.trigger('online_mod_proxy_rezka2_mirror', false);
  Lampa.Params.trigger('online_mod_proxy_kinobase', false);
  Lampa.Params.trigger('online_mod_proxy_collaps', false);
  Lampa.Params.trigger('online_mod_proxy_cdnmovies', false);
  Lampa.Params.trigger('online_mod_proxy_filmix', false);
  Lampa.Params.trigger('online_mod_proxy_videodb', false);
  Lampa.Params.trigger('online_mod_proxy_zetflix', false);
  Lampa.Params.trigger('online_mod_proxy_fancdn', false);
  Lampa.Params.trigger('online_mod_proxy_fancdn2', false);
  Lampa.Params.trigger('online_mod_proxy_fanserials', false);
  Lampa.Params.trigger('online_mod_proxy_fanserials_cdn', false);
  Lampa.Params.trigger('online_mod_proxy_videoseed', false);
  Lampa.Params.trigger('online_mod_proxy_vibix', false);
  Lampa.Params.trigger('online_mod_proxy_redheadsound', false);
  Lampa.Params.trigger('online_mod_proxy_cdnvideohub', false);
  Lampa.Params.trigger('online_mod_proxy_anilibria', false);
  Lampa.Params.trigger('online_mod_proxy_anilibria2', false);
  Lampa.Params.trigger('online_mod_proxy_animelib', false);
  Lampa.Params.trigger('online_mod_proxy_kodik', false);
  Lampa.Params.trigger('online_mod_proxy_kinopub', false);
  Lampa.Params.trigger('online_mod_proxy_alloha', false);
  Lampa.Params.trigger('online_mod_proxy_hdvb', false);
  Lampa.Params.trigger('online_mod_proxy_kp', false);
  Lampa.Params.trigger('online_mod_skip_kp_search', false);
  Lampa.Params.trigger('online_mod_prefer_http', window.location.protocol !== 'https:');
  Lampa.Params.trigger('online_mod_prefer_mp4', true);
  Lampa.Params.trigger('online_mod_prefer_dash', false);
  Lampa.Params.trigger('online_mod_collaps_lampa_player', false);
  Lampa.Params.trigger('online_mod_full_episode_title', false);
  Lampa.Params.trigger('online_mod_av1_support', true);
  Lampa.Params.trigger('online_mod_save_last_balanser', false);
  Lampa.Params.trigger('online_mod_rezka2_fix_stream', false);
  Lampa.Params.select('online_mod_kinobase_mirror', '', '');
  Lampa.Params.select('online_mod_kinobase_cookie', '', '');
  Lampa.Params.select('online_mod_rezka2_mirror', '', '');
  Lampa.Params.select('online_mod_rezka2_name', '', '');
  Lampa.Params.select('online_mod_rezka2_password', '', '');
  Lampa.Params.select('online_mod_rezka2_cookie', '', '');
  Lampa.Params.select('online_mod_rezka2_prx_ukr', {
    'prx.ukrtelcdn.net': 'prx.ukrtelcdn.net',
    'prx-cogent.ukrtelcdn.net': 'prx-cogent.ukrtelcdn.net',
    'prx2-cogent.ukrtelcdn.net': 'prx2-cogent.ukrtelcdn.net',
    'prx3-cogent.ukrtelcdn.net': 'prx3-cogent.ukrtelcdn.net',
    'prx4-cogent.ukrtelcdn.net': 'prx4-cogent.ukrtelcdn.net',
    'prx-ams.ukrtelcdn.net': 'prx-ams.ukrtelcdn.net',
    'prx2-ams.ukrtelcdn.net': 'prx2-ams.ukrtelcdn.net'
  }, 'prx.ukrtelcdn.net');
  Lampa.Params.select('online_mod_fancdn_name', '', '');
  Lampa.Params.select('online_mod_fancdn_password', '', '');
  Lampa.Params.select('online_mod_fancdn_cookie', '', '');
  Lampa.Params.select('online_mod_fancdn_token', '', '');
  Lampa.Params.select('online_mod_proxy_other_url', '', '');
  Lampa.Params.select('online_mod_secret_password', '', '');

  if (window.location.protocol === 'https:') {
    Lampa.Storage.set('online_mod_prefer_http', 'false');
  }

  if (Lampa.Storage.get('online_mod_proxy_reset', '') != 7) {
    Lampa.Storage.set('online_mod_proxy_lumex', 'true');
    Lampa.Storage.set('online_mod_proxy_reset', '7');
  }
}
