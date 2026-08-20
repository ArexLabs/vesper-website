# Vesper Client Installer / Updater (Windows PowerShell)
# Usage: irm https://vesper.devflare.de/install.ps1 | iex
# GitHub: https://github.com/ArexLabs/vesper-client

$ErrorActionPreference = "Stop"

$Repo = "ArexLabs/vesper-client"
$InstallDir = if ($env:VESPER_INSTALL_DIR) { $env:VESPER_INSTALL_DIR } else { "$env:LOCALAPPDATA\Vesper" }
$BinaryName = "vesper.exe"

function Write-Info  { param($Msg) Write-Host "▸ $Msg" -ForegroundColor Cyan }
function Write-Ok    { param($Msg) Write-Host "✓ $Msg" -ForegroundColor Green }
function Write-Warn  { param($Msg) Write-Host "⚠ $Msg" -ForegroundColor Yellow }
function Write-Err   { param($Msg) Write-Host "✗ $Msg" -ForegroundColor Red; exit 1 }

# ── Detect Arch ───────────────────────────────────────────────────────
$Arch = if ([Environment]::Is64BitOperatingSystem) { "x86_64" } else { "x86" }

Write-Host ""
Write-Host "  Vesper Client Installer" -ForegroundColor White
Write-Host ""

# ── Fetch Latest Release ──────────────────────────────────────────────
Write-Info "Fetching latest release from GitHub..."
try {
    $release = Invoke-RestMethod -Uri "https://api.github.com/repos/$Repo/releases/latest" -UseBasicParsing
} catch {
    Write-Err "Failed to fetch release info from GitHub"
}

$Tag = $release.tag_name
if (-not $Tag) { Write-Err "Could not determine latest version" }

$Version = $Tag -replace '^v', ''
Write-Info "Latest version: $Version"

# ── Check Installed ───────────────────────────────────────────────────
$InstalledVersion = ""
$BinPath = Join-Path $InstallDir $BinaryName

if (Test-Path $BinPath) {
    try {
        $InstalledVersion = & $BinPath --version 2>$null | Select-Object -First 1
    } catch {}
}

if ($InstalledVersion) {
    Write-Info "Installed version: $InstalledVersion"
    if ($InstalledVersion -eq $Version) {
        Write-Ok "Vesper is already up to date ($Version). Nothing to do."
        exit 0
    }
    Write-Warn "Updating Vesper: $InstalledVersion → $Version"
} else {
    Write-Info "Vesper not found. Installing $Version..."
}

# ── Find Asset ────────────────────────────────────────────────────────
$Asset = $release.assets | Where-Object { $_.name -match '\.exe$' } | Select-Object -First 1
if (-not $Asset) {
    Write-Err "No compatible download found. Visit https://github.com/$Repo/releases/latest"
}

$DownloadUrl = $Asset.browser_download_url
Write-Info "Downloading: $($Asset.name)"

# ── Download & Install ────────────────────────────────────────────────
$TmpDir = Join-Path ([System.IO.Path]::GetTempPath()) "vesper-install-$(Get-Random)"
New-Item -ItemType Directory -Path $TmpDir -Force | Out-Null

try {
    $ArchivePath = Join-Path $TmpDir "vesper-setup.exe"
    Invoke-WebRequest -Uri $DownloadUrl -OutFile $ArchivePath -UseBasicParsing

    New-Item -ItemType Directory -Path $InstallDir -Force | Out-Null

    if ($Asset.name -match '\.exe$') {
        # Silent install
        Write-Info "Running installer..."
        Start-Process -FilePath $ArchivePath -ArgumentList "/S", "/D=$InstallDir" -Wait -NoNewWindow
    } else {
        Copy-Item $ArchivePath $BinPath -Force
    }

    # Verify
    if (Test-Path $BinPath) {
        Write-Ok "Vesper $Version installed to: $BinPath"
    } else {
        Write-Err "Installation failed"
    }
} finally {
    Remove-Item -Recurse -Force $TmpDir -ErrorAction SilentlyContinue
}

# ── PATH Check ────────────────────────────────────────────────────────
$PathParts = $env:PATH -split ';'
if ($PathParts -notcontains $InstallDir) {
    Write-Warn "$InstallDir is not in your PATH."
    Write-Host "  Add it with:" -ForegroundColor White
    Write-Host "    [Environment]::SetEnvironmentVariable('PATH', `$env:PATH + ';$InstallDir', 'User')" -ForegroundColor Cyan
}

Write-Host ""
Write-Ok "Run 'vesper' to get started!"
Write-Host ""
