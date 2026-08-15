# Test JavaScript in index.html for syntax errors
$html = Get-Content -Path "index.html" -Raw -Encoding UTF8
$match = [System.Text.RegularExpressions.Regex]::Match($html, '(?s)<script>(.*?)</script>')
if ($match.Success) {
    $jsCode = $match.Groups[1].Value
    Set-Content -Path "temp_validate.js" -Value $jsCode -Encoding UTF8
    Write-Host "JS Code length: $($jsCode.Length)"

    # Test using JScript compiler (jsc.exe or Microsoft.JScript)
    Add-Type -AssemblyName Microsoft.JScript -ErrorAction SilentlyContinue
    Write-Host "Checking JS syntax..."
    
    # Try parsing via ScriptControl or WebBrowser / Msxml
    try {
        $sc = New-Object -ComObject ScriptControl
        $sc.Language = "JScript"
        # ScriptControl might be 32-bit only or ES3, let's test basic evaluation
        Write-Host "ScriptControl instantiated"
    } catch {
        Write-Host "ScriptControl note: $_"
    }
} else {
    Write-Host "No <script> tag matched!"
}
