[CmdletBinding()]
param(
    [Parameter(Mandatory = $true)]
    [string]$TargetRepository,

    [switch]$DryRun
)

$ErrorActionPreference = 'Stop'
$SourceRepository = Split-Path -Parent $MyInvocation.MyCommand.Path
$TargetRepository = (Resolve-Path $TargetRepository).Path

if (-not (Test-Path (Join-Path $TargetRepository '.git'))) {
    throw "TargetRepository harus merupakan Git repository yang sudah ada: $TargetRepository"
}

$sourceFull = [System.IO.Path]::GetFullPath($SourceRepository).TrimEnd('\')
$targetFull = [System.IO.Path]::GetFullPath($TargetRepository).TrimEnd('\')
if ($sourceFull -eq $targetFull) {
    throw 'Source dan target tidak boleh menunjuk ke direktori yang sama.'
}

$arguments = @(
    $sourceFull,
    $targetFull,
    '/MIR',
    '/COPY:DAT',
    '/DCOPY:DAT',
    '/R:2',
    '/W:1',
    '/NFL',
    '/NDL',
    '/NP',
    '/XD',
    '.git',
    'node_modules',
    '.next',
    '.quality',
    '/XF',
    '.env',
    '.env.local',
    '.env.development',
    '.env.production',
    '.env.*.local',
    '*.zip',
    '*.sha256',
    'tsconfig.tsbuildinfo'
)

if ($DryRun) {
    $arguments += '/L'
    Write-Host 'DRY RUN: tidak ada file yang akan diubah.' -ForegroundColor Yellow
}

Write-Host "Source : $sourceFull"
Write-Host "Target : $targetFull"
& robocopy @arguments
$robocopyExit = $LASTEXITCODE

if ($robocopyExit -gt 7) {
    throw "Robocopy gagal dengan exit code $robocopyExit"
}

if ($DryRun) {
    Write-Host 'Dry run selesai. Jalankan kembali tanpa -DryRun setelah diff sesuai.' -ForegroundColor Green
} else {
    Write-Host 'Source V36.1 berhasil diterapkan. Lanjutkan dengan npm ci dan npm run verify.' -ForegroundColor Green
}
