$edgePath = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if (-not (Test-Path $edgePath)) { $edgePath = "C:\Program Files\Microsoft\Edge\Application\msedge.exe" }

$testUrl = "file:///" + (Resolve-Path "test_page.html").Path.Replace('\', '/')
$out = & $edgePath --headless=new --disable-gpu --virtual-time-budget=5000 --dump-dom $testUrl 2>&1
Write-Host "DOM LENGTH:" $out.Length
if ($out -match "JS_ERROR" -or $out -match "CATCH_ERROR") {
    Write-Host "FOUND ERROR:"
    $out | Select-String "ERROR" -Context 3, 5
} else {
    Write-Host "NO ERROR LOGGED in DOM! Looking for book-card-btn:"
    if ($out -match "book-card-btn") {
        Write-Host "SUCCESS! Found book-card-btn"
    } else {
        Write-Host "book-card-btn still missing"
        Write-Host ($out | Select-Object -First 30)
    }
}
