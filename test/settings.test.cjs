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
