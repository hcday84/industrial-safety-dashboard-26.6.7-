@echo off
chcp 65001 > nul
title 산업안전 대시보드 서버 (localhost:3000)
cd /d "%~dp0"
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0serve.ps1"
pause
