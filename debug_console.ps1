# Launch Edge to inspect console logs and render test
$edgePath = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if (-not (Test-Path $edgePath)) {
    $edgePath = "C:\Program Files\Microsoft\Edge\Application\msedge.exe"
}

$tempProfile = "$env:TEMP\edge_debug_profile"
if (Test-Path $tempProfile) { Remove-Item -Recurse -Force $tempProfile }

$indexPath = (Resolve-Path "index.html").Path
$fileUrl = "file:///" + $indexPath.Replace('\', '/')

# Start Edge with remote debugging and logging
$p = Start-Process -FilePath $edgePath -ArgumentList @(
    "--headless=new",
    "--remote-debugging-port=9222",
    "--user-data-dir=$tempProfile",
    "--enable-logging",
    "--v=1",
    $fileUrl
) -PassThru

Start-Sleep -Seconds 3

# Query CDP for targets
try {
    $targets = Invoke-RestMethod -Uri "http://localhost:9222/json" -TimeoutSec 3
    Write-Host "Targets count:" $targets.Count
    $wsUrl = $targets[0].webSocketDebuggerUrl
    Write-Host "WS URL:" $wsUrl
} catch {
    Write-Host "CDP query error: $_"
}

# Stop edge
if ($p -and -not $p.HasExited) {
    Stop-Process -Id $p.Id -Force
}
