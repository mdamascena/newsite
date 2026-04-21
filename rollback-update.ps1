[CmdletBinding(SupportsShouldProcess = $true)]
param(
    [string]$BackupDir
)

$scriptRoot = (Resolve-Path $PSScriptRoot).Path
if ([string]::IsNullOrWhiteSpace($BackupDir)) {
    $BackupDir = Join-Path $scriptRoot "backup-projeto-20260421"
}

$projectRoot = $scriptRoot
$resolvedBackup = (Resolve-Path $BackupDir).Path

if (-not $resolvedBackup.StartsWith($projectRoot, [System.StringComparison]::OrdinalIgnoreCase)) {
    throw "Backup fora da area esperada do projeto: $resolvedBackup"
}

$filesToRestore = @(
    @{ From = "package.json"; To = "package.json" },
    @{ From = "package-lock.json"; To = "package-lock.json" },
    @{ From = "next.config.js"; To = "next.config.js" },
    @{ From = "tailwind.config.js"; To = "tailwind.config.js" },
    @{ From = "postcss.config.js"; To = "postcss.config.js" },
    @{ From = "tsconfig.json"; To = "tsconfig.json" },
    @{ From = "styles.globals.css"; To = "styles\globals.css" },
    @{ From = "pages._app.jsx"; To = "pages\_app.jsx" },
    @{ From = "components.json"; To = "components.json" }
)

foreach ($file in $filesToRestore) {
    $source = Join-Path $resolvedBackup $file.From
    $target = Join-Path $projectRoot $file.To

    if (-not (Test-Path $source)) {
        throw "Arquivo de backup ausente: $source"
    }

    $targetDir = Split-Path -Parent $target
    if (-not (Test-Path $targetDir)) {
        New-Item -ItemType Directory -Path $targetDir | Out-Null
    }

    if ($PSCmdlet.ShouldProcess($target, "Restaurar a partir de $source")) {
        Copy-Item -LiteralPath $source -Destination $target -Force
    }
}

$postcssMjs = Join-Path $projectRoot "postcss.config.mjs"
if (Test-Path $postcssMjs) {
    if ($PSCmdlet.ShouldProcess($postcssMjs, "Remover arquivo pos-migracao")) {
        Remove-Item -LiteralPath $postcssMjs -Force
    }
}

Push-Location $projectRoot
try {
    if ($PSCmdlet.ShouldProcess($projectRoot, "Executar npm install para reidratar dependencias antigas")) {
        npm install
    }
}
finally {
    Pop-Location
}
