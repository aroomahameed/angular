$ErrorActionPreference = "Stop"

$python = "C:\Users\HP\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe"
if (-not (Test-Path $python)) {
    $python = "python"
}

$logDir = Join-Path $PSScriptRoot "logs"
New-Item -ItemType Directory -Force -Path $logDir | Out-Null

$outLog = Join-Path $logDir "api.out.log"
$errLog = Join-Path $logDir "api.err.log"
$api = Join-Path $PSScriptRoot "api_server.py"

$existing = Get-NetTCPConnection -LocalPort 8000 -State Listen -ErrorAction SilentlyContinue | Select-Object -First 1
if ($existing) {
    Write-Host "ERP API is already running on http://127.0.0.1:8000/api/ (PID $($existing.OwningProcess))"
    exit 0
}

$process = Start-Process -FilePath $python `
    -ArgumentList @($api) `
    -WorkingDirectory $PSScriptRoot `
    -RedirectStandardOutput $outLog `
    -RedirectStandardError $errLog `
    -PassThru `
    -WindowStyle Hidden

Start-Sleep -Seconds 1

if ($process.HasExited) {
    Write-Host "ERP API failed to start. Error log:"
    if (Test-Path $errLog) {
        Get-Content $errLog
    }
    exit 1
}

Write-Host "ERP API started on http://127.0.0.1:8000/api/ (PID $($process.Id))"
Write-Host "Logs: $outLog and $errLog"
