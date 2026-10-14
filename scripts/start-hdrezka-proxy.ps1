param([int]$Port = 8787, [string]$Mirror = '', [switch]$Rebuild, [switch]$ShortenKey, [switch]$ReloadClearance)
$ErrorActionPreference = 'Stop'
$projectDirectory = Split-Path -Parent $PSScriptRoot
$stateDirectory = Join-Path $projectDirectory '.hdrezka-relay'
$stateFile = Join-Path $stateDirectory 'running.json'
$tokenFile = Join-Path $stateDirectory 'token'
$clearanceFile = Join-Path $stateDirectory 'clearance.json'
$composeFile = Join-Path $projectDirectory 'compose.hdrezka.yml'
Get-Command docker -ErrorAction Stop | Out-Null
New-Item -ItemType Directory -Path $stateDirectory -Force | Out-Null
if (-not (Test-Path -LiteralPath $clearanceFile)) { Set-Content -LiteralPath $clearanceFile -Value '{}' -Encoding utf8 }
if (-not $Mirror) {
    $savedState = if (Test-Path -LiteralPath $stateFile) { Get-Content -LiteralPath $stateFile -Raw | ConvertFrom-Json } else { $null }
    $Mirror = if ($savedState -and $savedState.mirror) { $savedState.mirror } else { 'https://kvk.zone' }
}
$mirrorUri = $null
if (-not [Uri]::TryCreate($Mirror, [UriKind]::Absolute, [ref]$mirrorUri) -or $mirrorUri.Scheme -ne 'https' -or $mirrorUri.UserInfo -or -not $mirrorUri.IsDefaultPort -or $mirrorUri.AbsolutePath -ne '/' -or $mirrorUri.Query -or $mirrorUri.Fragment) {
    throw 'Mirror must be an HTTPS origin without credentials, a custom port or a path.'
}
$Mirror = $mirrorUri.GetLeftPart([UriPartial]::Authority)
$clearanceEnabled = $false
try {
    $clearanceConfig = Get-Content -LiteralPath $clearanceFile -Raw | ConvertFrom-Json
    $clearanceEnabled = [bool]$clearanceConfig.cookie
    if ($clearanceEnabled -and ($clearanceConfig.origin.TrimEnd('/') -ne $Mirror -or -not $clearanceConfig.userAgent)) { throw 'mismatch' }
} catch { throw 'Browser clearance file is invalid or does not match the mirror and browser User-Agent.' }
if ($ShortenKey -or -not (Test-Path -LiteralPath $tokenFile)) {
    $privateToken = [System.Security.Cryptography.RandomNumberGenerator]::GetInt32(10000000, 100000000).ToString()
    Set-Content -LiteralPath $tokenFile -Value $privateToken -Encoding utf8
} else { $privateToken = (Get-Content -LiteralPath $tokenFile -Raw).Trim() }

function Test-ProxyHealth([string]$Url) {
    try {
        $health = Invoke-RestMethod -Uri ($Url.TrimEnd('/') + '/health') -TimeoutSec 5
        return $health.status -eq 'ready' -and $health.mirror -eq $Mirror -and [bool]$health.browserClearance -eq $clearanceEnabled
    }
    catch { return $false }
}

$previousPort = $env:HDREZKA_RELAY_PORT
$previousMirror = $env:HDREZKA_RELAY_MIRROR
try {
    $env:HDREZKA_RELAY_PORT = $Port.ToString()
    $env:HDREZKA_RELAY_MIRROR = $Mirror
    & docker image inspect online-mod-hdrezka-proxy:latest 2>$null | Out-Null
    $imageExists = $LASTEXITCODE -eq 0
    if ($ShortenKey -or $ReloadClearance) {
        # Access codes and clearance are read at startup. Recreate only the
        # proxy so the tunnel keeps its current HTTPS hostname.
        if ($Rebuild -or -not $imageExists) { & docker compose -f $composeFile up -d --build --force-recreate --no-deps proxy }
        else { & docker compose -f $composeFile up -d --no-build --force-recreate --no-deps proxy }
        if ($LASTEXITCODE -ne 0) { throw 'Docker could not activate the updated proxy settings.' }
        & docker compose -f $composeFile up -d --no-build
    } elseif ($Rebuild -or -not $imageExists) { & docker compose -f $composeFile up -d --build }
    else { & docker compose -f $composeFile up -d --no-build }
    if ($LASTEXITCODE -ne 0) { throw 'Docker Compose could not start the HDRezka proxy.' }
} finally { $env:HDREZKA_RELAY_PORT = $previousPort; $env:HDREZKA_RELAY_MIRROR = $previousMirror }

$tunnelId = (& docker compose -f $composeFile ps -q tunnel) -join ''
if ($LASTEXITCODE -ne 0 -or -not $tunnelId) { throw 'Docker tunnel container is unavailable.' }
$tunnelStartedAt = (& docker inspect --format '{{.State.StartedAt}}' $tunnelId) -join ''
if ($LASTEXITCODE -ne 0 -or -not $tunnelStartedAt) { throw 'Docker tunnel start time is unavailable.' }
$tunnelUrl = $null
for ($attempt = 0; $attempt -lt 60; $attempt++) {
    # Ignore hostnames from earlier starts of this same container.
    $logText = (& docker compose -f $composeFile logs --no-color --since $tunnelStartedAt --tail 120 tunnel 2>&1) -join "`n"
    $matchesForUrl = [regex]::Matches($logText, 'https://[a-z0-9-]+\.trycloudflare\.com')
    if ($matchesForUrl.Count -gt 0) { $tunnelUrl = $matchesForUrl[$matchesForUrl.Count - 1].Value; break }
    Start-Sleep -Seconds 1
}
if (-not $tunnelUrl) { throw 'The Docker tunnel did not return an HTTPS URL. Inspect docker compose logs tunnel.' }
$proxyUrl = $tunnelUrl + '/' + $privateToken + '/'
@{ proxyUrl = $proxyUrl; composeFile = $composeFile; port = $Port; mirror = $Mirror; browserClearance = $clearanceEnabled } | ConvertTo-Json | Set-Content -LiteralPath $stateFile -Encoding utf8
$authInstructions = if ($clearanceEnabled) { 'Без входа в HDrezka: очистите поле «Куки для HDrezka», затем заново откройте фильм. Кука проверки хранится в Docker-прокси; вводить её на телевизоре не нужно.' } else { 'Затем Выйти → Войти в HDrezka.' }
$instructions = @"
Настройки → Online Mod → Свой прокси для HDrezka:
$proxyUrl

Зеркало HDrezka: $Mirror
Проксировать HDrezka: включено
Проксировать зеркало HDrezka: включено
$authInstructions

Во время просмотра должны работать компьютер и Docker Desktop.
Контейнеры online-mod-hdrezka-proxy-1 и online-mod-hdrezka-tunnel-1 запускаются автоматически при старте Docker.
Запуск: pwsh -File scripts/start-hdrezka-proxy.ps1
Остановка: docker compose -f compose.hdrezka.yml down
После обновления куки проверки: pwsh -File scripts/start-hdrezka-proxy.ps1 -ReloadClearance
После перезапуска контейнера tunnel адрес может измениться; повторный запуск скрипта покажет текущий URL.
"@
Set-Content -LiteralPath (Join-Path $stateDirectory 'TV-settings.txt') -Value $instructions -Encoding utf8
for ($attempt = 0; $attempt -lt 18; $attempt++) {
    if (Test-ProxyHealth $proxyUrl) {
        Write-Output ('Docker HDRezka HTTPS proxy ready. URL: ' + $proxyUrl)
        Write-Output 'TV instructions saved to .hdrezka-relay/TV-settings.txt.'
        exit 0
    }
    Start-Sleep -Seconds 2
}
throw 'The Docker containers are running and the URL is saved, but DNS/HTTPS is not ready yet. Re-run the launcher shortly.'
