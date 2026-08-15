# PowerShell Script to bundle all JS and CSS into self-contained HTML files
$ErrorActionPreference = "Stop"

$htmlTemplate = Get-Content "index.html" -Raw -Encoding UTF8

$jsAudio = Get-Content "js\audio-engine.js" -Raw -Encoding UTF8
$jsData = Get-Content "js\data-curriculum.js" -Raw -Encoding UTF8
$jsStroke = Get-Content "js\stroke-writer.js" -Raw -Encoding UTF8
$jsMatch = Get-Content "js\matching-game.js" -Raw -Encoding UTF8
$jsQuiz = Get-Content "js\quiz-yct2.js" -Raw -Encoding UTF8
$jsApp = Get-Content "js\app.js" -Raw -Encoding UTF8

$allScripts = @"
  <script>
    // ==========================================
    // 1. AUDIO ENGINE
    // ==========================================
    $jsAudio

    // ==========================================
    // 2. CURRICULUM DATA (180 UNITS)
    // ==========================================
    $jsData

    // ==========================================
    // 3. STROKE WRITER & CANVAS
    // ==========================================
    $jsStroke

    // ==========================================
    // 4. MATCHING GAME
    // ==========================================
    $jsMatch

    // ==========================================
    // 5. YCT 2 QUIZ ENGINE
    // ==========================================
    $jsQuiz

    // ==========================================
    // 6. MASTER APP CONTROLLER
    // ==========================================
    $jsApp
  </script>
"@

# Replace the separate <script src=...> tags with the inline bundle
$pattern = '(?s)<script src="js/audio-engine.js"></script>.*?<script src="js/app.js"></script>'
$newIndexHtml = [System.Text.RegularExpressions.Regex]::Replace($htmlTemplate, $pattern, $allScripts)

# Write out self-contained index.html
[System.IO.File]::WriteAllText("$PSScriptRoot\index.html", $newIndexHtml, [System.Text.Encoding]::UTF8)

# Now do the same for student.html
$studentTemplate = Get-Content "student.html" -Raw -Encoding UTF8
$newStudentHtml = [System.Text.RegularExpressions.Regex]::Replace($studentTemplate, $pattern, $allScripts)
[System.IO.File]::WriteAllText("$PSScriptRoot\student.html", $newStudentHtml, [System.Text.Encoding]::UTF8)

Write-Host "SUCCESS: index.html and student.html are now 100% self-contained single-file apps!"
