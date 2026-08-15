# Run a complete test of buildFullCurriculumDatabase() using Windows JScript/WScript or Node if available
$jsCode = Get-Content "temp_validate.js" -Raw -Encoding UTF8

# Let's inspect test_runner.js
$testScript = @"
var errDiv = null;
try {
    $jsCode
    var status = 'SUCCESS: HAN_YU_CURRICULUM generated with ' + HAN_YU_CURRICULUM.books.length + ' books!';
    for (var i = 0; i < HAN_YU_CURRICULUM.books.length; i++) {
        var b = HAN_YU_CURRICULUM.books[i];
        status += '\nBook ' + b.id + ': ' + b.units.length + ' units';
    }
    var div = document.createElement('div');
    div.id = 'status-output';
    div.innerText = status;
    document.body.appendChild(div);
} catch(e) {
    var div = document.createElement('div');
    div.id = 'status-output';
    div.innerText = 'ERROR: ' + e.message + '\n' + e.stack;
    document.body.appendChild(div);
}
"@

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
$testScript
</script>
</body>
</html>
"@

Set-Content -Path "test_exec.html" -Value $testHtml -Encoding UTF8

# Run msedge and take screenshot or dump DOM
$edgePath = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if (-not (Test-Path $edgePath)) { $edgePath = "C:\Program Files\Microsoft\Edge\Application\msedge.exe" }

$url = "file:///" + (Resolve-Path "test_exec.html").Path.Replace('\', '/')
$res = & $edgePath --headless --disable-gpu --screenshot="test_out.png" --window-size=1280,800 $url 2>&1
Write-Host "Edge run completed."
if (Test-Path "test_out.png") {
    Write-Host "Screenshot captured successfully! Size: $((Get-Item test_out.png).Length) bytes"
}
