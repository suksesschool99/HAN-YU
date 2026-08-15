# Find all top-level let / const across all JS files
$files = @("js\audio-engine.js", "js\data-curriculum.js", "js\stroke-writer.js", "js\matching-game.js", "js\quiz-yct2.js", "js\app.js")

$seenGlobals = @{}

foreach ($filePath in $files) {
    Write-Host "=== Inspecting $filePath ==="
    $content = Get-Content $filePath -Raw -Encoding UTF8
    $lines = $content -split "`r?`n"
    $lineNum = 0
    foreach ($line in $lines) {
        $lineNum++
        # Look for top-level declaration (no leading whitespace or minimal)
        if ($line -match "^(const|let|var|class|function)\s+([a-zA-Z0-9_]+)") {
            $kind = $matches[1]
            $varName = $matches[2]
            if ($seenGlobals.ContainsKey($varName)) {
                Write-Host "ERROR: Global identifier '$varName' declared in $filePath (line $lineNum), already declared in $($seenGlobals[$varName])"
            } else {
                $seenGlobals[$varName] = "$filePath (line $lineNum)"
            }
        }
    }
}
