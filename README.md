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

Current plugin version: `14.10.2026-mersen1.5`. The Pages URL stays the same across releases. Restart Lampa after an update and check the version in Online Mod settings. Disable the original extension when switching: both register the `online_mod` component.

## HDRezka and Kinogo on TVs

HDRezka is the default source for a fresh installation; a saved source choice is preserved. Kinogo is available next to it. HDRezka defaults to `https://kvk.zone`; Kinogo defaults to `https://kinogo.is`. Both have ordinary mirror and proxy settings. Kinogo can retry the configured mirror and `.is`, `.online`, `.ec`, `.no` after challenges or connection/server errors; these mirrors do not necessarily have identical catalogs or players.

Fresh non-Android installations enable metadata proxies for HDRezka, Kinogo and Filmix. Explicit user choices survive restarts. HDRezka login and cookie controls are available outside debug mode. With a proxy enabled, login collects a cookie through that proxy instead of relying on cross-origin browser cookies. Use a proxy you trust: login requests and account cookies pass through it.

For HDRezka in Media Station X, enable both the HDRezka proxy and mirror-proxy switches. Earlier versions could silently disable the HDRezka proxy after HTTP 403; re-enable it if affected. HDRezka now preserves that setting and retries the other built-in worker after connection errors, proxy refusals or server errors. A configured custom proxy remains the only route. Unrelated live-search results trigger a full-page search, and login pages are reported as authorization errors even when the server returns HTTP 404. External proxy or mirror restrictions can still require a compatible custom proxy and an HDRezka account.

Version mersen1.4 preserves the complete login cookie, including `PHPSESSID`, checks that verification did not return another login form, and reads updated cookies even if the source was opened before login. Verified cookies are scoped to the selected mirror, and authenticated requests stay on their login proxy instead of rotating hourly. After upgrading from mersen1.3, log out and log in again in Online Mod settings to replace the incomplete session. The authenticated source does not retry on a different proxy IP; explicit custom-proxy choices remain in effect.

### Private HDRezka proxy in Docker

Version mersen1.5 adds **Свой прокси для HDrezka** to ordinary Online Mod settings. Its URL applies to HDRezka login, logout, search, pages and stream API requests while other sources keep their existing routes. An empty field keeps the existing public-proxy behavior. The **Проксировать HDrezka** toggle must be enabled; explicit proxy URLs are not silently replaced with another service.

The private proxy runs in Docker Compose and listens on the PC's private IPv4 address for the TV's local network. No public tunnel is started. On Windows, start Docker Desktop, then run this from the repository directory with PowerShell 7:

```powershell
pwsh -File scripts/start-hdrezka-proxy.ps1
```

The launcher selects the private IPv4 address of the adapter with a default gateway, creates an eight-digit access code for easy TV entry, builds the proxy if its image is missing, checks its LAN address and writes the URL and TV instructions to `.hdrezka-relay/TV-settings.txt`. Use `-LocalAddress 192.168.1.15` to choose the TV network explicitly when multiple adapters qualify. Existing longer tokens remain supported; use `-ShortenKey` to replace one with a numeric code. Use `-Rebuild` after changing the proxy server code. Enter the complete local URL in **Свой прокси для HDrezka**, set the configured mirror in the mod and enable both HDRezka proxy toggles. Keep the PC and Docker Desktop running during viewing. Only `online-mod-hdrezka-proxy-1` is needed; it uses `restart: always` and starts when Docker starts.

The URL is `http://PC_LAN_IP:8787/ACCESS_CODE/` and stays the same across Docker restarts while the PC keeps its address. Reserve that address for the PC in the router's DHCP settings for a stable LAN URL. The launcher remembers the mirror, removes obsolete Compose containers and does not create an Internet tunnel. Allow TCP 8787 from the local subnet using the helper once in an Administrator PowerShell:

```powershell
pwsh -File scripts/allow-hdrezka-lan.ps1 -LocalAddress 192.168.1.15 -Port 8787
```

The firewall rule is limited to the specified PC address, adapter, TCP port and `LocalSubnet`; it does not change the network's Public/Private category. HTTP access from an HTTPS-hosted Lampa may be blocked by the device before it reaches the relay; check the local endpoint on the physical TV. Stop the proxy with:

```sh
docker compose -f compose.hdrezka.yml down
```

The server only forwards requests to its configured HTTPS mirror and checks followed redirects before forwarding cookies. It exposes the existing worker protocol, including `cookie_plus`; account credentials and cookies are not stored or logged by the proxy. Token/state files are ignored by Git and excluded from Docker build contexts. The launcher binds the host port to the selected private IPv4 address; direct Compose use defaults to loopback. The LAN endpoint requires the private URL code and limits incorrect-code attempts per client. Change the mirror with the launcher's `-Mirror https://your-mirror` argument and set the same mirror in the mod.

For a mirror that works in your browser after verification, the relay can reuse **your own verification cookies** without an HDRezka account. Complete the ordinary verification on the PC using the same Internet connection as Docker, then create the private `.hdrezka-relay/clearance.json` file:

```json
{
  "origin": "https://rezka.ag",
  "cookie": "techaro.lol-anubis-auth-XXXXXXXX=YOUR_COOKIE; techaro.lol-anubis-cookie-verification-XXXXXXXX=YOUR_COOKIE; _vc_id=YOUR_COOKIE",
  "userAgent": "YOUR_BROWSER_USER_AGENT"
}
```

Use the actual cookie names and User-Agent from your browser. Only Anubis verification cookies and `_vc_id`/`_vc_day` are accepted; exclude account cookies such as `dle_user_id`, `dle_password` and `PHPSESSID`. The file stays on the PC and is mounted read-only, never included in the Docker image or Git. The relay adds these cookies and the matching browser User-Agent only to its configured origin; it preserves anonymous session cookies from the mod. Anubis can bind its token to request metadata and expire it, so a working browser cookie does not guarantee it will work from Docker. See the [Anubis implementation](https://github.com/TecharoHQ/anubis/blob/v1.27.0/lib/anubis.go).

```powershell
pwsh -File scripts/start-hdrezka-proxy.ps1 -Mirror https://rezka.ag -Rebuild -ReloadClearance
```

Set the LAN proxy URL on the TV, set **Зеркало для HDrezka** to the same mirror, enable both proxy toggles, clear **Куки для HDrezka**, reopen the film and use HDRezka without pressing login. The long verification cookie belongs in the PC file, not the TV settings. Subsequent launcher runs remember the mirror. After updating the verification cookie or User-Agent, run the launcher with `-ReloadClearance`; it restarts the proxy with the same local URL. To disable browser clearance, replace the file contents with `{}` and reload it. The relay does not solve CAPTCHAs or generate verification tokens. Tests use a mocked upstream; physical TV playback with browser clearance must be verified separately.

The October 14 authenticated probe successfully opened Interstellar, Midsommar and Breaking Bad through the external HTTPS Docker route, including voices, seasons and episodes. Their tested stream responses require Premium and return a 60-second placeholder instead of the selected film. The proxy fixes metadata transport; it does not grant Premium access. See [the probe](docs/hdrezka-proxy-probe.json). Full-film playback on a physical television remains unverified.

External access is not guaranteed. Earlier workstation checks found:

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
| `compose.hdrezka.yml`, `docker/hdrezka-proxy.Dockerfile` | Private HDRezka proxy and HTTPS tunnel in Docker |
| `scripts/start-hdrezka-proxy.ps1` | Start containers and show the URL for the mod setting |
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
