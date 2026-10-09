const test = require('node:test');
const assert = require('node:assert/strict');
const { harness, providers } = require('./helpers/plugin.cjs');

for (const name of providers) {
  test(`${name}: construct, search failure, destroy`, () => {
    const h = harness();
    const provider = new h.plugin[name](h.component, h.object);
    provider.wait_similars = true;
    assert.equal(typeof provider.search, 'function');
    assert.equal(typeof provider.destroy, 'function');
    provider.search(h.object, 1, []);
    let processed = 0;
    while (h.requests.length) {
      assert.ok(++processed <= 20, 'Search retries must terminate');
      const request = h.requests.shift();
      request.error({ status: 500, responseText: '' }, 'error');
    }
    assert.ok(h.events.some(([event]) => event === 'empty' || event === 'emptyQuery'), 'Search must report failure or no result');
    const before = h.clears;
    provider.destroy();
    assert.ok(h.clears > before, 'Destroy must cancel requests');
  });

  test(`${name}: empty search response`, () => {
    const h = harness();
    const provider = new h.plugin[name](h.component, h.object);
    provider.wait_similars = true;
    provider.search(h.object, 1, []);
    let processed = 0;
    while (h.requests.length) {
      assert.ok(++processed <= 20, 'Search retries must terminate');
      const request = h.requests.shift();
      request.success(request.options.dataType === 'text' ? '' : {});
    }
    assert.ok(h.events.some(([event]) => event === 'empty' || event === 'emptyQuery'), 'Empty results must be reported');
    provider.destroy();
  });
}
