// Runs real provider parsers with bounded HTTP reads; never logs signed URLs.
const fs = require('node:fs');
const path = require('node:path');
const { harness } = require('../test/helpers/plugin.cjs');
const origin = 'https://lampa.mx';
const movie = { id: 157336, title: 'Интерстеллар', original_title: 'Interstellar', imdb_id: 'tt0816692', release_date: '2014-11-05' };

async function read(response, limit = 256 * 1024) {
  const reader = response.body?.getReader();
  const parts = [];
  let bytes = 0;
  try {
    while (reader && bytes < limit) {
      const { done, value } = await reader.read();
      if (done) break;
      parts.push(Buffer.from(value));
      bytes += value.length;
    }
  } finally { await reader?.cancel(); }
  return Buffer.concat(parts).subarray(0, limit);
}

async function flow(name, profile, worker) {
  const ownProxy = profile === 'own-worker';
  const h = harness({ dom: true, initialized: profile !== 'direct', msx: true, platform: 'tizen', storage: ownProxy ? {
    online_mod_proxy_other: true, online_mod_proxy_other_url: 'https://local-worker.test/', online_mod_proxy_rezka2: true, online_mod_proxy_kinogo: true
  } : {} });
  Object.assign(h.object.movie, movie);
  const provider = new h.plugin[name](h.component, h.object);
  const result = { provider: name, profile, requests: [] };
  let selectedSimilar = false;
  try {
    provider.search(h.object, 258687, []);
    for (let step = 0; step < 12 && h.requests.length; step++) {
      const request = h.requests.shift();
      const url = new URL(request.url);
      if (/\.(mp4|m3u8|mpd)(?:[?#]|$)/i.test(url.pathname)) break;
      const params = { method: request.data ? 'POST' : 'GET', body: request.data || undefined, headers: {
        Origin: origin, 'User-Agent': h.plugin.Utils.baseUserAgent(), ...(request.data ? { 'Content-Type': 'application/x-www-form-urlencoded' } : {})
      }, signal: AbortSignal.timeout(12000) };
      const response = ownProxy && url.hostname === 'local-worker.test' ? await worker.fetch(new Request(url, params)) : await fetch(url, params);
      const text = (await read(response)).toString('utf8');
      result.requests.push({ host: url.hostname, status: response.status, cors: response.headers.get('access-control-allow-origin') || '', challenge: h.plugin.Utils.isChallenge(text) });
      if (response.ok) {
        let data = text;
        if (request.options.dataType !== 'text') { try { data = JSON.parse(text); } catch {} }
        request.success(data);
      } else request.error({ status: response.status, responseText: text }, 'error');
      if (h.events.some(([event]) => event === 'empty' || event === 'emptyQuery')) break;
      const similar = h.events.filter(([event]) => event === 'similars').at(-1);
      if (!selectedSimilar && !h.requests.length && similar && !h.events.some(([event]) => event === 'append')) {
        const matches = similar[1].filter((item) => h.component.equalAnyTitle([item.title, item.ru_title, item.en_title, item.orig_title], [movie.title, movie.original_title]));
        if (matches.length === 1) { selectedSimilar = true; provider.search(h.object, 258687, [matches[0]]); }
      }
      const item = h.events.find(([event]) => event === 'append')?.[1];
      if (item && !result.selected) { result.selected = true; item.trigger('hover:enter'); }
      if (h.events.some(([event]) => event === 'play')) break;
    }
    const played = h.events.find(([event]) => event === 'play')?.[1];
    if (played?.url) {
      result.result = 'player-url-resolved';
      result.streamHost = new URL(played.url).hostname;
      result.subtitles = Array.isArray(played.subtitles) ? played.subtitles.length : 0;
      // Native players may omit Origin. Probe both transports explicitly;
      // neither check proves that a physical TV can decode the video.
      result.media = [];
      for (const transport of ['browser-origin', 'native-no-origin']) {
        try {
          const headers = { 'User-Agent': h.plugin.Utils.baseUserAgent(), ...(transport === 'browser-origin' ? { Origin: origin } : {}), ...(played.headers || {}) };
          const response = await fetch(played.url, { headers, signal: AbortSignal.timeout(12000) });
          const data = await read(response, 4096);
          const hlsManifest = data.toString('utf8').startsWith('#EXTM3U');
          const cors = response.headers.get('access-control-allow-origin') || '';
          result.media.push({ transport, status: response.status, cors, hlsManifest,
            prefixAvailable: response.ok && (hlsManifest || data.includes(Buffer.from('ftyp')) || data.includes(Buffer.from('moof'))),
            ...(transport === 'browser-origin' ? { browserCorsAllowed: cors === '*' || cors === origin } : {}) });
        } catch (error) { result.media.push({ transport, error: error.cause?.code || error.name }); }
      }
    } else {
      const error = h.events.filter(([event]) => event === 'empty' || event === 'emptyQuery' || event === 'notice').at(-1);
      result.result = error ? 'source-error' : 'no-player-url';
      result.reason = error && typeof error[1] === 'string' && /^online_mod_/.test(error[1]) ? error[1] : 'No playable result for the selected title';
    }
  } catch (error) {
    result.result = 'network-or-parser-error';
    result.error = error.cause?.code || error.name;
  } finally { provider.destroy(); h.close(); }
  return result;
}

async function main() {
  const workerSource = fs.readFileSync(path.join(__dirname, '../cloudflare_worker.js'), 'utf8');
  // Execute the repository's own worker locally; no hosted deployment is implied.
  const worker = (await import('data:text/javascript;base64,' + Buffer.from(workerSource).toString('base64'))).default;
  const jobs = [
    ['rezka2', 'direct'], ['rezka2', 'tv'], ['kinogo', 'direct'], ['kinogo', 'tv'],
    ['kinogo', 'own-worker'], ['rezka2', 'own-worker'], ['filmix', 'tv'], ['cdnvideohub', 'tv']
  ];
  const results = [];
  for (let i = 0; i < jobs.length; i += 2) {
    const batch = await Promise.all(jobs.slice(i, i + 2).map(([name, profile]) => flow(name, profile, worker)));
    results.push(...batch);
    for (const item of batch) console.log(`${item.profile}/${item.provider}: ${item.result}, media ${(item.media || []).map((entry) => `${entry.transport}:${entry.status || entry.error}`).join(', ') || 'not resolved'}`);
  }
  fs.writeFileSync(path.join(__dirname, '../docs/playback-probe.json'), JSON.stringify({ checkedAt: new Date().toISOString(), scope: 'Real search, movie-page and stream parsing for Interstellar from this workstation. Up to 4 KiB of media/manifest read; no video decoding, account authentication or physical TV playback. own-worker runs the repository worker locally and is not a deployed endpoint.', results }, null, 2) + '\n');
}
main().catch((error) => { console.error(error.name); process.exitCode = 1; });
