# Find JS errors by testing in Edge or using basic parser checks
$js = Get-Content "temp_validate.js" -Raw -Encoding UTF8
Write-Host "JS length:" $js.Length

# Let's check for duplicate variable declarations or syntax issues
# In data-curriculum.js, did we declare constants twice?
$lines = $js -split "`n"
$declarations = @{}
$lineNum = 0
foreach ($l in $lines) {
    $lineNum++
    if ($l -match "^\s*(const|let|var|class|function)\s+([a-zA-Z0-9_]+)") {
        $type = $matches[1]
        $name = $matches[2]
        if ($declarations.ContainsKey($name)) {
            Write-Host "Warning: Duplicate declaration of '$name' at line $lineNum! Previous at line $($declarations[$name])"
        } else {
            $declarations[$name] = $lineNum
        }
    }
}
