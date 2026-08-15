# Test running the curriculum builder and catch exact error
$html = Get-Content "index.html" -Raw -Encoding UTF8

# Extract everything between <script> and </script>
$pattern = '(?s)<script>(.*?)</script>'
$match = [regex]::Match($html, $pattern)
if ($match.Success) {
    $js = $match.Groups[1].Value
    Set-Content -Path "test_runner.js" -Value $js -Encoding UTF8

    # Wrap in try-catch test file that outputs to console
    $testHtml = @"
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body>
<div id="book-selector-grid"></div>
<div id="unit-selector-list"></div>
<div id="story-content-container"></div>
<div id="matching-container"></div>
<div id="quiz-container"></div>
<canvas id="stroke-canvas"></canvas>
<script>
window.onerror = function(msg, url, line, col, error) {
    var div = document.createElement('div');
    div.id = 'error-log';
    div.innerText = 'JS_ERROR: ' + msg + ' at line ' + line + ':' + col + '\n' + (error ? error.stack : '');
    document.body.appendChild(div);
};
try {
$js
} catch(e) {
    var div = document.createElement('div');
    div.id = 'error-log';
    div.innerText = 'CATCH_ERROR: ' + e.message + '\n' + e.stack;
    document.body.appendChild(div);
}
</script>
</body>
</html>
"@
    Set-Content -Path "test_page.html" -Value $testHtml -Encoding UTF8
    Write-Host "Created test_page.html, running in Edge..."

    $edgePath = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
    if (-not (Test-Path $edgePath)) { $edgePath = "C:\Program Files\Microsoft\Edge\Application\msedge.exe" }

    $testUrl = "file:///" + (Resolve-Path "test_page.html").Path.Replace('\', '/')
    $out = & $edgePath --headless --disable-gpu --dump-dom $testUrl 2>&1
    Write-Host "OUTPUT:"
    Write-Host $out
} else {
    Write-Host "No script found!"
}
