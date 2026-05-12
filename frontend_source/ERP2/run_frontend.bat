@echo off
setlocal

set "PYTHON=C:\Users\HP\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe"
if not exist "%PYTHON%" set "PYTHON=python"

"%PYTHON%" "%~dp0frontend_server.py"
