const test = require('node:test');
const assert = require('node:assert/strict');
const { harness } = require('./helpers/plugin.cjs');

test('New English messages remain readable with Lampa Russian language fallback', () => {
  const h = harness();
  let data;
  h.context.Lampa.Lang.add = (value) => { data = value; };
  h.plugin.initLang();
  for (const key of ['online_mod_source_challenge', 'online_mod_source_response_error', 'online_mod_change_source', 'online_mod_kinogo_mirror', 'online_mod_kinogo_unsupported', 'online_mod_proxy_source_unavailable']) {
    assert.equal(data[key].ru, data[key].en, key);
    assert.ok(data[key].en.length > 0);
  }
});

test('HDRezka and Kinogo transport controls are available in ordinary MSX settings', () => {
  const h = harness({ dom: true, platform: 'tizen', msx: true, initialized: true });
  try {
    h.plugin.initSettings();
    const markup = h.events.find(([event, name]) => event === 'template' && name === 'settings_online_mod')[2];
    const page = h.$('<div></div>').append(h.$.parseHTML(markup));
    for (const name of ['online_mod_proxy_rezka2', 'online_mod_proxy_rezka2_mirror', 'online_mod_rezka2_cookie', 'online_mod_rezka2_fill_cookie', 'online_mod_proxy_kinogo', 'online_mod_kinogo_mirror']) {
      assert.equal(page.find(`[data-name="${name}"]`).length, 1, name);
    }
  } finally { h.close(); }
});

test('The empty-result action opens source selection and clears the loader', () => {
  const h = harness({ dom: true });
  try {
    const component = new h.plugin.component(h.object);
    component.activity = { loader: (value) => h.events.push(['loader', value]) };
    component.empty('Source challenge');
    // The Scroll fixture owns the detached list.
    const list = h.context.Lampa.Scroll().render();
    assert.equal(list.find('.online-mod-change-source').length, 1);
    list.find('.online-mod-change-source').trigger('hover:enter');
    assert.ok(h.events.some(([event, value]) => event === 'loader' && value === false));
    assert.ok(h.events.some(([event, type]) => event === 'show-filter' && type === 'sort'));
    component.destroy();
  } finally { h.close(); }
});

test('Proxy login obtains a session cookie instead of sending a credentialed cross-origin browser request', () => {
  const h = harness({ initialized: true, storage: { online_mod_rezka2_name: 'test-account', online_mod_rezka2_password: 'fixture-only' } });
  let succeeded = false;
  h.plugin.rezka2Login(() => { succeeded = true; }, assert.fail);
  const login = h.requests.shift();
  assert.match(login.url, /\/enc2\//);
  assert.equal(login.options.withCredentials, undefined);
  login.success({ headers: { 'set-cookie': ['PHPSESSID=fixture-session; Path=/', 'dle_user_id=fixture-user; Path=/'] }, body: JSON.stringify({ success: true }) });
  const check = h.requests.shift();
  assert.ok(check);
  check.success({ body: '<div>Account</div>', cookie: [] });
  assert.equal(succeeded, true);
  assert.ok(h.storage.online_mod_rezka2_cookie.includes('dle_user_id=fixture-user'));
  assert.ok(h.storage.online_mod_rezka2_cookie.includes('PHPSESSID=fixture-session'));
  assert.equal(h.storage.online_mod_rezka2_cookie_host, 'https://kvk.zone');
  assert.equal(h.storage.online_mod_rezka2_cookie_proxy, new URL(login.url).origin + '/');
  assert.equal(h.context.Lampa.Storage.field('online_mod_rezka2_status'), true);
});

test('Logout clears the stored proxy cookie even when the service is unavailable', () => {
  const h = harness({ initialized: true, storage: { online_mod_rezka2_cookie: 'PHPSESSID=fixture-session', online_mod_rezka2_status: true } });
  h.plugin.rezka2Logout(() => {}, () => {});
  assert.equal(h.storage.online_mod_rezka2_cookie, '');
  assert.equal(h.context.Lampa.Storage.field('online_mod_rezka2_status'), false);
  const request = h.requests.shift();
  assert.equal(request.options.withCredentials, false);
  request.error({ status: 0, responseText: '' }, 'error');
  assert.equal(h.storage.online_mod_rezka2_cookie, '');
});

test('A challenge during proxy login verification does not mark the account as authenticated', () => {
  const h = harness({ initialized: true });
  let succeeded = false;
  let failed = false;
  h.plugin.rezka2Login(() => { succeeded = true; }, () => { failed = true; });
  h.requests.shift().success({ headers: { 'set-cookie': ['dle_user_id=fixture-user; Path=/'] }, body: JSON.stringify({ success: true }) });
  h.requests.shift().success({ body: '<title>Just a moment...</title>' });
  assert.equal(succeeded, false);
  assert.equal(failed, true);
  assert.equal(h.context.Lampa.Storage.field('online_mod_rezka2_status'), false);
  assert.ok(h.events.some(([event, message]) => event === 'notice' && message === 'online_mod_source_challenge'));
});

test('Proxy login preserves rotated session IDs and equals signs in cookie values', () => {
  const h = harness({ initialized: true });
  let succeeded = false;
  h.plugin.rezka2Login(() => { succeeded = true; }, assert.fail);
  h.requests.shift().success({ headers: { 'set-cookie': ['PHPSESSID=first-session; Path=/', 'dle_password=encoded=value==; Path=/'] }, body: '{"success":true}' });
  const check = h.requests.shift();
  const target = atob(decodeURIComponent(check.url.split('/enc2/')[1].split('/')[0]));
  assert.ok(target.includes('param/Cookie=' + encodeURIComponent('PHPSESSID=first-session; dle_password=encoded=value==')));
  check.success({ headers: { 'set-cookie': ['PHPSESSID=verified-session; Path=/'] }, body: '<div>Account</div>' });
  assert.equal(succeeded, true);
  assert.equal(h.storage.online_mod_rezka2_cookie, 'PHPSESSID=verified-session; dle_password=encoded=value==');
});

test('A deleted verification session cannot leave a green login indicator', () => {
  const h = harness({ initialized: true });
  let succeeded = false;
  let failed = false;
  h.plugin.rezka2Login(() => { succeeded = true; }, () => { failed = true; });
  h.requests.shift().success({ headers: { 'set-cookie': ['PHPSESSID=fixture-session; Path=/'] }, body: '{"success":true}' });
  const verification = h.requests.shift();
  assert.ok(verification, 'A session-only login must be verified');
  verification.success({ headers: { 'set-cookie': ['PHPSESSID=deleted; Max-Age=0; Path=/'] }, body: '<div>Account</div>' });
  assert.equal(succeeded, false);
  assert.equal(failed, true);
  assert.equal(h.context.Lampa.Storage.field('online_mod_rezka2_status'), false);
});

test('Mirror confirmation preserves the complete session through its extra request', () => {
  const h = harness({ initialized: true });
  let succeeded = false;
  h.plugin.rezka2Login(() => { succeeded = true; }, assert.fail);
  h.requests.shift().success({ headers: { 'set-cookie': ['PHPSESSID=fixture-session; Path=/'] }, body: '{"success":true}' });
  h.requests.shift().success({ body: '<span>MIRROR</span><button type="submit" onclick="$.cookie(\'mirror\', \'verified==\')">Continue</button>' });
  const check = h.requests.shift();
  const target = atob(decodeURIComponent(check.url.split('/enc2/')[1].split('/')[0]));
  assert.ok(target.includes(encodeURIComponent('PHPSESSID=fixture-session; mirror=verified==')));
  check.success({ headers: { 'set-cookie': ['PHPSESSID=final-session; Path=/'] }, body: '<div>Account</div>' });
  assert.equal(succeeded, true);
  assert.equal(h.storage.online_mod_rezka2_cookie, 'PHPSESSID=final-session; mirror=verified==');
});

test('A login form after proxy login success never produces a green indicator', () => {
  const h = harness({ initialized: true, storage: { online_mod_rezka2_status: true } });
  let succeeded = false;
  let failed = false;
  h.plugin.rezka2Login(() => { succeeded = true; }, () => { failed = true; });
  h.requests.shift().success({ headers: { 'set-cookie': ['PHPSESSID=fixture-session; Path=/'] }, body: '{"success":true}' });
  h.requests.shift().success({ body: "<form class='check-form' id='check-form'></form>" });
  assert.equal(succeeded, false);
  assert.equal(failed, true);
  assert.equal(h.context.Lampa.Storage.field('online_mod_rezka2_status'), false);
  assert.ok(h.events.some(([event, message]) => event === 'notice' && message === 'online_mod_authorization_required HDrezka'));
});

test('Direct login also verifies the page before marking authentication successful', () => {
  const h = harness({ storage: { online_mod_proxy_rezka2: false } });
  let succeeded = false;
  let failed = false;
  h.plugin.rezka2Login(() => { succeeded = true; }, () => { failed = true; });
  h.requests.shift().success({ success: true });
  assert.equal(h.context.Lampa.Storage.field('online_mod_rezka2_status'), false);
  h.requests.shift().success('<form id="check-form"></form>');
  assert.equal(succeeded, false);
  assert.equal(failed, true);
  assert.equal(h.context.Lampa.Storage.field('online_mod_rezka2_status'), false);
});

test('Logout targets the authenticated main host and clears the session scope', () => {
  const h = harness({ initialized: true, storage: {
    online_mod_proxy_rezka2_mirror: false, online_mod_rezka2_cookie: 'PHPSESSID=fixture-session',
    online_mod_rezka2_cookie_host: 'https://rezka.ag', online_mod_rezka2_cookie_proxy: 'https://cors.nb557.workers.dev/'
  } });
  h.plugin.rezka2Logout(() => {}, () => {});
  const request = h.requests.shift();
  const target = atob(decodeURIComponent(request.url.split('/enc2/')[1].split('/')[0]));
  assert.ok(target.endsWith('https://rezka.ag/logout/'));
  assert.equal(new URL(request.url).hostname, 'cors.nb557.workers.dev');
  assert.equal(h.storage.online_mod_rezka2_cookie_host, '');
  assert.equal(h.storage.online_mod_rezka2_cookie_proxy, '');
});
