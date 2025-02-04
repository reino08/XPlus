Push-Location ./build

# TODO: check validity of certs
$keys = Get-ChildItem *-key.pem

if (($keys | Measure-Object -Line |% Lines) -eq 0) {
    if ((Get-Command mkcert | Measure-Object -Line |% Lines) -eq 0) {
        Write-Output "Install mkcert"
        Write-Output "From scoop (https://scoop.sh/)"
        Write-Output "- scoop bucket add extras"
        Write-Output "- scoop install mkcert"
        Pop-Location
        exit
    }

    mkcert localhost local.host
    mkcert -install
    Start-Sleep 1
}

Pop-Location

$file = $keys | Select-Object -First 1 |% Name
$file -match "(?<base>.*)-key.pem" | Out-Null
$base = $matches["base"]

npx serve -nL public --ssl-cert ("./build/" + $base + ".pem") --ssl-key ("./build/" + $file)
