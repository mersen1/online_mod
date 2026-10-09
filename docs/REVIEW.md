# Provider and TV transport review — 2026-10-09

Target: Lampa MX inside Media Station X, including Samsung/Tizen and LG/WebOS. HDRezka and Kinogo are the user's priority sources. The checks run on a Windows workstation and do not certify hardware decoding or playback on every television.

## Changes

- Added Kinogo search, mirror settings, title/year matching and supported NextEmbed/Collaps movie and series player parsing. The default mirror is `.is`; retries cover the configured mirror and `.is`, `.online`, `.ec`, `.no` after challenges or connection/server errors. Unsupported iframe players produce a message.
- Made HDRezka the fresh-install default source. Previously saved selections remain in effect.
- Preserved explicit proxy preferences instead of resetting them at startup. Fresh TV/browser installations enable proxies for HDRezka, Kinogo and Filmix. Normalized mirror/custom proxy URLs and made the custom proxy apply consistently to configurable providers.
- Exposed HDRezka proxy, mirror-proxy, login and cookie controls in ordinary settings. Proxy login now collects a session cookie; logout clears local authentication state even on network failure. A challenge during login verification reports failure.
- Wrapped provider requests to detect recognizable challenge pages, including HTTP 200 challenge responses, and reject callbacks after cancellation. Changed response formats stop the loader with an error. Added a remote-focusable source-switch action to empty/error screens.
- Fixed signed HLS/MP4 extension detection in additional providers and HDRezka format selection. Kept HTTPS on HTTPS installations.
- Replaced execution of Collaps player data and HDRezka mirror-cookie arguments with bundled JSON5 parsing. Optional P2P functions are discarded. Other upstream uses of dynamic evaluation are outside this change.
- Reused Collaps playback for Kinogo, corrected the `vp` query delimiter and embed stream headers, and honored the existing stream-relay setting for media/subtitles when a metadata stream proxy is not selected.

The preceding fork revision also fixed HDRezka pagination proxy arguments, mirror normalization, per-page restriction state, and repeated-search empty-list errors in ten providers. Those regression tests are retained.

## Automated verification

`pnpm check` verifies that the generated `online_mod.js` exactly matches the sources and that client JavaScript, including bundled JSON5 and `proxy.html`, parses as ES5. Server-side worker files are checked separately as modern JavaScript.

The test suite exercises all 22 provider constructors and basic error/empty paths. jQuery/jsdom fixtures additionally cover HDRezka movie playback, quality/subtitle handoff on Tizen, WebOS, Android and browser profiles; series translation/season changes; Kinogo search through movie page and iframe to HLS; mirror retry; stream-relay use; cancellation; challenge recognition; proxy preference preservation; ordinary settings; and proxy login/logout. New English messages include Lampa's Russian-default fallback so other UI languages do not display raw message keys.

These tests use mocked network replies and Lampa APIs. They validate provider parsing and player handoff, not a complete Lampa application, an actual TV decoder, an authenticated account or every title in each catalog. Lumex Ads requires configured IP before it makes a request, so no-request tests are not challenge-handling proof for that path.

## First-request availability

[provider-probe.json](provider-probe.json) contains 44 probes: all 22 implementations directly and with initialized MSX/Tizen settings, using `Origin: https://lampa.mx`. HTTP 200 means a response, not valid search results or playable media. Disabled upstream sources were probed but were not automatically enabled.

| Provider | Direct request | TV/default transport |
| --- | --- | --- |
| Lumex | Connection timeout | Connection timeout |
| Lumex Ads | No request without IP setup | Same |
| HDRezka | 200, search HTML | 200 through public proxy |
| Kinogo | 200, search HTML; no browser CORS | Public proxy refuses with 404 |
| Kinobase | 200, HTML | 200, no browser CORS by default |
| Collaps / DASH | 200, player HTML | 200; same API for both variants |
| CDNMovies | 403, challenge | 403, challenge |
| Filmix | 200, JSON results | 200 through public proxy |
| Zetflix | DNS ENOTFOUND | Same |
| FanCDN | 200, HTML | 200, HTML |
| FanCDN ID | 200 with API error | Same |
| FanSerials | 200, HTML | 200, HTML |
| VideoSeed | 200 with API error | Same |
| Vibix | 404 | 404 |
| Alloha | 200 with API error | Same |
| RedHeadSound / DASH | 403 | Public proxy refuses with 404 |
| CDNVideoHub | 200, JSON results | 200, JSON results |
| AniLibria old API | 410 | 410 |
| AniLibria.top | 200, empty list for this movie | Same |
| AnimeLib | 200, empty list | Same |
| Kodik | 200, empty list | Same |
| KinoPub | 401, authentication required | Public proxy refuses with 404 |

## Real parser and media probes

[playback-probe.json](playback-probe.json) follows search, result selection, page parsing and player handoff for Interstellar (2014), KP `258687`, IMDb `tt0816692`. Each media probe reads only a bounded prefix and does not decode video. Browser-Origin and native-no-Origin requests are recorded separately.

| Flow | Observed result |
| --- | --- |
| HDRezka direct | Exact movie selected; page requires account authorization |
| HDRezka public TV proxy | Search responds but yields no exact match for the requested title |
| HDRezka repository worker executed locally | Exact movie selected; page requires account authorization |
| Kinogo direct | Search, page and NextEmbed parse successfully; HLS and five subtitles resolved |
| Kinogo public TV proxy | Metadata request rejected as unsupported by the proxy |
| Kinogo repository worker executed locally | Metadata flow succeeds and HLS/subtitles resolve |
| Kinogo media | Valid HLS manifest with no Origin (200); Lampa browser Origin rejected (423) |
| Filmix TV profile | Player URL resolved; accessible MP4 prefix with and without browser Origin (200) |
| CDNVideoHub TV profile | Player URL resolved; accessible media prefix without Origin (200), browser-Origin request rejected (400) |

The local-worker check uses this workstation's network, not Cloudflare's production egress IP. Native-no-Origin success does not prove that MSX or a particular Tizen/WebOS player sends the same headers. The generic stream relay is optional and was not certified by these probes. Account credentials were not provided, so real HDRezka login and authenticated media access remain unverified.

## CAPTCHA and compatibility limits

The plugin recognizes challenge markup and gives a usable failure/source-switch path. It cannot guarantee CAPTCHA-free access, execute every site's interactive challenge inside a TV player, or repair restrictions of third-party public proxies. Kinogo's retry logic can find another accessible mirror, but each mirror may use a different catalog/player and direct TV browser HTML requests still need compatible CORS or a proxy.

Custom proxy/mirror settings are now reviewable in ordinary Online Mod settings. For Kinogo on MSX, a compatible metadata proxy is required under the currently observed public-proxy restriction. For a browser-Origin stream block, the player transport or an available stream relay must resolve that restriction. For HDRezka, the chosen mirror/account must allow the requested title. These are runtime prerequisites, not guarantees made by this release.

An end-to-end physical Samsung Q7/LG check is still needed for remote navigation, actual stream decoding, audio selection, subtitles and account behavior. External-service availability can change after the timestamped probes. This review is a correctness/transport check, not a full security audit.
