$dataJs = Get-Content "js\data-curriculum.js" -Raw -Encoding UTF8

for ($b = 2; $b -le 12; $b++) {
    $pattern = "(?s)${b}:\s*\[(.*?)\],\s*(\d+:|\};)"
    $m = [regex]::Match($dataJs, $pattern)
    if ($m.Success) {
        $body = $m.Groups[1].Value
        $count = ([regex]::Matches($body, '\[\s*\"')).Count
        Write-Host "Book $b has $count units registered"
    } else {
        Write-Host "Book $b REGISTRY NOT FOUND!"
    }
}
