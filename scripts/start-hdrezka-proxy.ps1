param([int]$Port = 8787)
$ErrorActionPreference = 'Stop'
$projectDirectory = Split-Path -Parent $PSScriptRoot
$stateDirectory = Join-Path $projectDirectory '.hdrezka-relay'
$stateFile = Join-Path $stateDirectory 'running.json'
$tokenFile = Join-Path $stateDirectory 'token'
$composeFile = Join-Path $projectDirectory 'compose.hdrezka.yml'
Get-Command docker -ErrorAction Stop | Out-Null
New-Item -ItemType Directory -Path $stateDirectory -Force | Out-Null
if (-not (Test-Path -LiteralPath $tokenFile)) {
    $tokenBytes = New-Object byte[] 24
    [System.Security.Cryptography.RandomNumberGenerator]::Fill($tokenBytes)
    $privateToken = [Convert]::ToBase64String($tokenBytes).TrimEnd('=').Replace('+', '-').Replace('/', '_')
    Set-Content -LiteralPath $tokenFile -Value $privateToken -Encoding utf8
} else { $privateToken = (Get-Content -LiteralPath $tokenFile -Raw).Trim() }

function Test-ProxyHealth([string]$Url) {
    try { return (Invoke-RestMethod -Uri ($Url.TrimEnd('/') + '/health') -TimeoutSec 5).status -eq 'ready' }
    catch { return $false }
}

$previousPort = $env:HDREZKA_RELAY_PORT
try {
    $env:HDREZKA_RELAY_PORT = $Port.ToString()
    & docker compose -f $composeFile up -d --build
    if ($LASTEXITCODE -ne 0) { throw 'Docker Compose could not start the HDRezka proxy.' }
} finally { $env:HDREZKA_RELAY_PORT = $previousPort }

$tunnelUrl = $null
for ($attempt = 0; $attempt -lt 60; $attempt++) {
    $logText = (& docker compose -f $composeFile logs --no-color --tail 120 tunnel 2>&1) -join "`n"
    $matchesForUrl = [regex]::Matches($logText, 'https://[a-z0-9-]+\.trycloudflare\.com')
    if ($matchesForUrl.Count -gt 0) { $tunnelUrl = $matchesForUrl[$matchesForUrl.Count - 1].Value; break }
    Start-Sleep -Seconds 1
}
if (-not $tunnelUrl) { throw 'The Docker tunnel did not return an HTTPS URL. Inspect docker compose logs tunnel.' }
$proxyUrl = $tunnelUrl + '/' + $privateToken + '/'
@{ proxyUrl = $proxyUrl; composeFile = $composeFile; port = $Port } | ConvertTo-Json | Set-Content -LiteralPath $stateFile -Encoding utf8
$instructions = @"
Настройки → Online Mod → Свой прокси для HDrezka:
$proxyUrl

Зеркало HDrezka: https://kvk.zone
Проксировать HDrezka: включено
Проксировать зеркало HDrezka: включено
Затем Выйти → Войти в HDrezka.

Во время просмотра должны работать компьютер и Docker Desktop.
Запуск: pwsh -File scripts/start-hdrezka-proxy.ps1
Остановка: docker compose -f compose.hdrezka.yml down
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
