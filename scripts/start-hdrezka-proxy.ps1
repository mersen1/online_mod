param([ValidateRange(1024, 65535)][int]$Port = 8787, [string]$LocalAddress = '', [string]$Mirror = '', [switch]$Rebuild, [switch]$ShortenKey, [switch]$ReloadClearance)
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
$savedState = if (Test-Path -LiteralPath $stateFile) { Get-Content -LiteralPath $stateFile -Raw | ConvertFrom-Json } else { $null }

function Test-PrivateIPv4([string]$Address) {
    $parsedAddress = $null
    if (-not [Net.IPAddress]::TryParse($Address, [ref]$parsedAddress) -or $parsedAddress.AddressFamily -ne [Net.Sockets.AddressFamily]::InterNetwork) { return $false }
    $bytes = $parsedAddress.GetAddressBytes()
    return $bytes[0] -eq 10 -or ($bytes[0] -eq 172 -and $bytes[1] -ge 16 -and $bytes[1] -le 31) -or ($bytes[0] -eq 192 -and $bytes[1] -eq 168)
}
if (-not $LocalAddress) {
    $candidates = @(foreach ($configuration in Get-NetIPConfiguration) {
        if ($configuration.IPv4DefaultGateway) {
            foreach ($address in $configuration.IPv4Address) {
                if (Test-PrivateIPv4 $address.IPAddress) { $address.IPAddress }
            }
        }
    })
    if ($savedState -and $savedState.localAddress -and $candidates -contains $savedState.localAddress) { $LocalAddress = $savedState.localAddress }
    elseif ($candidates.Count -eq 1) { $LocalAddress = $candidates[0] }
    else { throw 'Specify -LocalAddress with the private IPv4 address of the PC on the TV network.' }
}
if (-not (Test-PrivateIPv4 $LocalAddress) -or -not (Get-NetIPAddress -AddressFamily IPv4 | Where-Object IPAddress -eq $LocalAddress)) { throw 'LocalAddress must be a private IPv4 address assigned to this PC.' }
if (-not $Mirror) { $Mirror = if ($savedState -and $savedState.mirror) { $savedState.mirror } else { 'https://kvk.zone' } }
$mirrorUri = $null
if (-not [Uri]::TryCreate($Mirror, [UriKind]::Absolute, [ref]$mirrorUri) -or $mirrorUri.Scheme -ne 'https' -or $mirrorUri.UserInfo -or -not $mirrorUri.IsDefaultPort -or $mirrorUri.AbsolutePath -ne '/' -or $mirrorUri.Query -or $mirrorUri.Fragment) { throw 'Mirror must be an HTTPS origin without credentials, a custom port or a path.' }
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
    } catch { return $false }
}
$previousPort = $env:HDREZKA_RELAY_PORT
$previousMirror = $env:HDREZKA_RELAY_MIRROR
$previousHost = $env:HDREZKA_RELAY_HOST
try {
    $env:HDREZKA_RELAY_PORT = $Port.ToString()
    $env:HDREZKA_RELAY_MIRROR = $Mirror
    $env:HDREZKA_RELAY_HOST = $LocalAddress
    & docker image inspect online-mod-hdrezka-proxy:latest 2>$null | Out-Null
    $imageExists = $LASTEXITCODE -eq 0
    # Always select the proxy explicitly; a public tunnel is never started.
    if ($Rebuild -or -not $imageExists) {
        if ($ShortenKey -or $ReloadClearance) { & docker compose -f $composeFile up -d --build --force-recreate --remove-orphans proxy }
        else { & docker compose -f $composeFile up -d --build --remove-orphans proxy }
    } else {
        if ($ShortenKey -or $ReloadClearance) { & docker compose -f $composeFile up -d --no-build --force-recreate --remove-orphans proxy }
        else { & docker compose -f $composeFile up -d --no-build --remove-orphans proxy }
    }
    if ($LASTEXITCODE -ne 0) { throw 'Docker Compose could not start the HDRezka proxy.' }
} finally {
    $env:HDREZKA_RELAY_PORT = $previousPort
    $env:HDREZKA_RELAY_MIRROR = $previousMirror
    $env:HDREZKA_RELAY_HOST = $previousHost
}

$proxyUrl = 'http://' + $LocalAddress + ':' + $Port + '/' + $privateToken + '/'
@{ proxyUrl = $proxyUrl; composeFile = $composeFile; port = $Port; mirror = $Mirror; browserClearance = $clearanceEnabled; localAddress = $LocalAddress; transport = 'lan' } | ConvertTo-Json | Set-Content -LiteralPath $stateFile -Encoding utf8
$authInstructions = if ($clearanceEnabled) { 'Без входа в HDrezka: очистите поле «Куки для HDrezka», затем заново откройте фильм. Кука проверки хранится в Docker-прокси; вводить её на телевизоре не нужно.' } else { 'Затем Выйти → Войти в HDrezka.' }
$instructions = @"
Настройки → Online Mod → Свой прокси для HDrezka:
$proxyUrl

Зеркало HDrezka: $Mirror
Проксировать HDrezka: включено
Проксировать зеркало HDrezka: включено
$authInstructions

Прокси доступен по локальной сети; Cloudflare-туннель не используется.
Во время просмотра должны работать компьютер и Docker Desktop.
Нужен только контейнер online-mod-hdrezka-proxy-1; он запускается автоматически при старте Docker.
Закрепите адрес $LocalAddress за компьютером в DHCP-настройках роутера, чтобы локальный URL не менялся.
Запуск: pwsh -File scripts/start-hdrezka-proxy.ps1
Остановка: docker compose -f compose.hdrezka.yml down
После обновления куки проверки: pwsh -File scripts/start-hdrezka-proxy.ps1 -ReloadClearance
Если телевизор не открывает адрес, запустите PowerShell от администратора и выполните:
pwsh -File scripts/allow-hdrezka-lan.ps1 -LocalAddress $LocalAddress -Port $Port
"@
Set-Content -LiteralPath (Join-Path $stateDirectory 'TV-settings.txt') -Value $instructions -Encoding utf8
for ($attempt = 0; $attempt -lt 18; $attempt++) {
    if (Test-ProxyHealth $proxyUrl) {
        Write-Output ('Docker HDRezka LAN proxy ready. URL: ' + $proxyUrl)
        Write-Output 'TV instructions saved to .hdrezka-relay/TV-settings.txt.'
        exit 0
    }
    Start-Sleep -Seconds 2
}
throw 'The Docker proxy is running, but its local address is not responding. Check the LAN address and Windows firewall.'
