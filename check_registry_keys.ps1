# Check keys in CURRICULUM_UNITS_REGISTRY in data-curriculum.js
$content = Get-Content "js\data-curriculum.js" -Raw -Encoding UTF8
$keys = [regex]::Matches($content, '(\d+):\s*\[')
foreach ($k in $keys) {
    Write-Host "Found registry key: $($k.Groups[1].Value)"
}
