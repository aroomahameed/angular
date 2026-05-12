$ErrorActionPreference = "Stop"

$python = "C:\Users\HP\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe"
if (-not (Test-Path $python)) {
    $python = "python"
}

& $python "$PSScriptRoot\api_server.py"
