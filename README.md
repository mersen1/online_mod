# Online Mod — mersen1 fork

A fork of [nb557/plugins](https://github.com/nb557/plugins) for Lampa, including HDRezka and Kinogo support. The upstream starting point is `67bd818ed22702b3089aaf98ef5053c2a1a724a5` (2026-09-20). Git history is preserved and the original repository is available as `upstream`.

## Installation

Add this URL in Lampa's extension settings, including Lampa MX launched through Media Station X:

```text
https://mersen1.github.io/online_mod/online_mod.js
```

Repository mirror:

```text
https://raw.githubusercontent.com/mersen1/online_mod/main/online_mod.js
```

Current plugin version: `09.10.2026-mersen1.3`. The Pages URL stays the same across releases. Restart Lampa after an update and check the version in Online Mod settings. Disable the original extension when switching: both register the `online_mod` component.

## HDRezka and Kinogo on TVs

HDRezka is the default source for a fresh installation; a saved source choice is preserved. Kinogo is available next to it. HDRezka defaults to `https://kvk.zone`; Kinogo defaults to `https://kinogo.is`. Both have ordinary mirror and proxy settings. Kinogo can retry the configured mirror and `.is`, `.online`, `.ec`, `.no` after challenges or connection/server errors; these mirrors do not necessarily have identical catalogs or players.

Fresh non-Android installations enable metadata proxies for HDRezka, Kinogo and Filmix. Explicit user choices survive restarts. HDRezka login and cookie controls are available outside debug mode. With a proxy enabled, login collects a cookie through that proxy instead of relying on cross-origin browser cookies. Use a proxy you trust: login requests and account cookies pass through it.

For HDRezka in Media Station X, enable both the HDRezka proxy and mirror-proxy switches. Earlier versions could silently disable the HDRezka proxy after HTTP 403; re-enable it if affected. HDRezka now preserves that setting and retries the other built-in worker after connection errors, proxy refusals or server errors. A configured custom proxy remains the only route. Unrelated live-search results trigger a full-page search, and login pages are reported as authorization errors even when the server returns HTTP 404. External proxy or mirror restrictions can still require a compatible custom proxy and an HDRezka account.

External access is not guaranteed. The latest workstation checks found:

- HDRezka's configured mirror requires authorization for the tested movie. Public proxy search did not produce the requested title.
- Public upstream proxies reject Kinogo metadata requests. A compatible custom proxy is needed for TV/browser access; direct Kinogo HTML does not allow Lampa's browser Origin through CORS.
- Kinogo's supported NextEmbed player resolves HLS and subtitles. The stream returned HTTP 200 without Origin and HTTP 423 with `Origin: https://lampa.mx`. The existing stream-proxy option now also applies to Kinogo/Collaps, but relay availability is an external dependency.
- Filmix returned an accessible MP4 prefix in the tested TV profile. CDNVideoHub media was accessible without Origin but rejected the browser-Origin request.

Challenges produce a clear message and a remote-focusable source-switch action. The plugin does not solve interactive CAPTCHAs. See [review results](docs/REVIEW.md) for evidence and limitations. No physical Samsung Q7 or LG playback has been verified by the automated checks.

## Development

Development uses Node.js 24 and pnpm 11.25.0. Lampa devices need only the built plugin file.

```sh
pnpm install --frozen-lockfile --ignore-scripts
pnpm build
pnpm check
pnpm test
```

Edit `src/`, then run `pnpm build`. Commit the generated root `online_mod.js` with its sources. CI checks exact bundle reproducibility, ES5 client syntax and the test suite.

| Path | Purpose |
| --- | --- |
| `src/providers/` | 22 provider implementations |
| `src/utils.js` | Mirrors, proxies, request cancellation, challenge and player-data parsing |
| `src/vendor/json5.js` | Bundled JSON5 2.2.3, with its MIT license |
| `src/component.js` | Lampa source list, filters and playlists |
| `src/hdrezka-auth.js` | HDRezka login, logout and cookie collection |
| `src/storage.js`, `src/lang.js`, `src/settings.js` | Settings, defaults and localization |
| `src/kinopoisk.js`, `src/main.js`, `src/start.js` | Metadata, registration and startup |
| `src/manifest.json` | Module order inside one shared closure |
| `test/` | Provider tests and jQuery/jsdom playback fixtures |
| `docs/` | Review and bounded live-probe reports |

[JSON5](https://json5.org/) handles JavaScript-style player data without executing optional P2P callbacks. Its ES5 browser build is bundled; no runtime package download is required. [jsdom](https://github.com/jsdom/jsdom) and jQuery are development-only dependencies for realistic DOM tests. Upstream provider modules still share the original closure; they are not ES modules. Other upstream plugins and worker files remain in the repository.

## Live probes and publication

```sh
pnpm probe
pnpm probe:playback
```

`probe` checks the first metadata request for all providers directly and with initialized MSX/Tizen defaults. `probe:playback` follows real parsers for selected sources and reads up to 4 KiB of a media prefix or manifest. Reports omit tokens, account credentials and signed URLs. The `own-worker` profile executes `cloudflare_worker.js` locally; it does not deploy or validate a hosted worker. Neither probe decodes video or emulates TV hardware.

The `Check and publish plugin` workflow validates pushes to `main`, packages static files in `dist/` and deploys them to GitHub Pages. Failed checks stop publication. Sources and development dependencies are excluded from the Pages artifact. The Surge workflow runs only in upstream.

No upstream LICENSE file was found. This fork does not assign a new license to upstream code; bundled JSON5 retains its own MIT notice.
