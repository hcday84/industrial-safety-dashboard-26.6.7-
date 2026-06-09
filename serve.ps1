param([int]$Port = 3000)

$Root = Split-Path -Parent $MyInvocation.MyCommand.Path

$MimeTypes = @{
    '.html' = 'text/html; charset=utf-8'
    '.css'  = 'text/css; charset=utf-8'
    '.js'   = 'application/javascript; charset=utf-8'
    '.json' = 'application/json; charset=utf-8'
    '.png'  = 'image/png'
    '.jpg'  = 'image/jpeg'
    '.jpeg' = 'image/jpeg'
    '.gif'  = 'image/gif'
    '.svg'  = 'image/svg+xml'
    '.ico'  = 'image/x-icon'
    '.woff' = 'font/woff'
    '.woff2'= 'font/woff2'
    '.ttf'  = 'font/ttf'
    '.txt'  = 'text/plain; charset=utf-8'
}

function Start-Server {
    $listener = New-Object System.Net.HttpListener
    $listener.Prefixes.Add("http://localhost:$Port/")
    try {
        $listener.Start()
    } catch {
        Write-Host "[ERROR] Cannot bind port ${Port}: $_" -ForegroundColor Red
        pause; exit 1
    }

    Write-Host ""
    Write-Host " =================================================" -ForegroundColor Cyan
    Write-Host "  Dashboard Server running" -ForegroundColor Cyan
    Write-Host "  http://localhost:$Port" -ForegroundColor Green
    Write-Host " =================================================" -ForegroundColor Cyan
    Write-Host " Stop: Ctrl+C" -ForegroundColor Gray
    Write-Host ""

    try {
        while ($listener.IsListening) {
            $contextTask = $listener.GetContextAsync()
            while (-not $contextTask.IsCompleted) {
                Start-Sleep -Milliseconds 100
            }
            $ctx  = $contextTask.Result
            $req  = $ctx.Request
            $res  = $ctx.Response
            try {
                $urlPath = $req.Url.LocalPath
                if ($urlPath -eq '/' -or $urlPath -eq '') { $urlPath = '/index.html' }
                $filePath = Join-Path $Root ($urlPath.TrimStart('/').Replace('/', '\'))
                $filePath = [System.IO.Path]::GetFullPath($filePath)
                if (-not $filePath.StartsWith($Root)) {
                    $res.StatusCode = 403; $res.Close(); continue
                }
                if (Test-Path $filePath -PathType Leaf) {
                    $ext  = [System.IO.Path]::GetExtension($filePath).ToLower()
                    $mime = if ($MimeTypes[$ext]) { $MimeTypes[$ext] } else { 'application/octet-stream' }
                    $res.ContentType   = $mime
                    $res.StatusCode    = 200
                    $bytes = [System.IO.File]::ReadAllBytes($filePath)
                    $res.ContentLength64 = $bytes.Length
                    $res.OutputStream.Write($bytes, 0, $bytes.Length)
                    Write-Host " 200  $urlPath" -ForegroundColor Green
                } else {
                    $res.StatusCode = 404
                    $body = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $urlPath")
                    $res.ContentLength64 = $body.Length
                    $res.OutputStream.Write($body, 0, $body.Length)
                    Write-Host " 404  $urlPath" -ForegroundColor Yellow
                }
            } catch {
                try { $res.StatusCode = 500 } catch {}
                Write-Host " [ERR] $($_.Exception.Message)" -ForegroundColor Red
            } finally {
                try { $res.OutputStream.Close() } catch {}
                try { $res.Close() } catch {}
            }
        }
    } finally {
        $listener.Stop()
        $listener.Close()
        Write-Host "Server stopped." -ForegroundColor Gray
    }
}

Start-Server