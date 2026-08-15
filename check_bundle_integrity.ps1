# Test concatenation using .NET String without PowerShell variable interpolation
$html = [System.IO.File]::ReadAllText("$PSScriptRoot\index.html", [System.Text.Encoding]::UTF8)

# Check if $ was corrupted
if ($html -match '\$\{' -or $html -match '`') {
    Write-Host "Found JS template literals"
} else {
    Write-Host "Warning: Template literals might have been evaluated by PowerShell!"
}
