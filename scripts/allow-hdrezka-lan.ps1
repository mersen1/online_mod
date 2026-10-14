param([Parameter(Mandatory)][string]$LocalAddress, [ValidateRange(1024, 65535)][int]$Port = 8787)
$ErrorActionPreference = 'Stop'
$stateDirectory = Join-Path (Split-Path -Parent $PSScriptRoot) '.hdrezka-relay'
$statusFile = Join-Path $stateDirectory 'firewall-status.json'
try {
    $identity = [Security.Principal.WindowsIdentity]::GetCurrent()
    $principal = [Security.Principal.WindowsPrincipal]::new($identity)
    if (-not $principal.IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)) { throw 'Run this script as Administrator.' }
    $parsedAddress = $null
    if (-not [Net.IPAddress]::TryParse($LocalAddress, [ref]$parsedAddress) -or $parsedAddress.AddressFamily -ne [Net.Sockets.AddressFamily]::InterNetwork) { throw 'A private local IPv4 address is required.' }
    $bytes = $parsedAddress.GetAddressBytes()
    if (-not ($bytes[0] -eq 10 -or ($bytes[0] -eq 172 -and $bytes[1] -ge 16 -and $bytes[1] -le 31) -or ($bytes[0] -eq 192 -and $bytes[1] -eq 168))) { throw 'A private local IPv4 address is required.' }
    $interface = Get-NetIPAddress -AddressFamily IPv4 | Where-Object IPAddress -eq $LocalAddress | Select-Object -First 1
    if (-not $interface) { throw 'The address is not assigned to this PC.' }
    $ruleName = 'OnlineMod-HDRezka-LAN-' + $Port
    if (Get-NetFirewallRule -Name $ruleName -ErrorAction SilentlyContinue) { Remove-NetFirewallRule -Name $ruleName }
    New-NetFirewallRule -Name $ruleName -DisplayName 'Online Mod HDRezka (local subnet only)' -Direction Inbound -Action Allow -Enabled True -Protocol TCP -LocalPort $Port -LocalAddress $LocalAddress -RemoteAddress LocalSubnet -InterfaceAlias $interface.InterfaceAlias -Profile Any | Out-Null
    New-Item -ItemType Directory -Path $stateDirectory -Force | Out-Null
    @{ status = 'ready'; localAddress = $LocalAddress; port = $Port; remoteAddress = 'LocalSubnet' } | ConvertTo-Json | Set-Content -LiteralPath $statusFile -Encoding utf8
    Write-Output 'HDRezka firewall rule is enabled for the local subnet only.'
} catch {
    New-Item -ItemType Directory -Path $stateDirectory -Force | Out-Null
    @{ status = 'failed'; message = $_.Exception.Message } | ConvertTo-Json | Set-Content -LiteralPath $statusFile -Encoding utf8
    throw
}
