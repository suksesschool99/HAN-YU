# Run Edge headless to test index.html and print any console error
$edgePath = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if (-not (Test-Path $edgePath)) {
    $edgePath = "C:\Program Files\Microsoft\Edge\Application\msedge.exe"
}

if (Test-Path $edgePath) {
    Write-Host "Found Edge at: $edgePath"
    $indexPath = (Resolve-Path "index.html").Path
    $fileUrl = "file:///" + $indexPath.Replace('\', '/')
    Write-Host "Opening: $fileUrl"

    $output = & $edgePath --headless --disable-gpu --dump-dom $fileUrl 2>&1
    Write-Host "DOM Dump length: $($output.Length)"
    
    # Check if book cards were rendered in DOM dump
    if ($output -match "book-card-btn") {
        Write-Host "SUCCESS: book-card-btn rendered in DOM!"
    } else {
        Write-Host "WARNING: book-card-btn not found in DOM dump!"
    }
} else {
    Write-Host "Edge not found at standard paths."
}
