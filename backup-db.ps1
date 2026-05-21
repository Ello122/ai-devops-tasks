# Prosty skrypt do backupu bazy danych (Windows / PowerShell)

$DB_NAME = "app_database"
$BACKUP_DIR = "C:\backups\db"
$DATE = Get-Date -Format "yyyyMMdd_HHmmss"
$TEMP_FILE = "$BACKUP_DIR\temp.sql"
$FINAL_FILE = "$BACKUP_DIR\$DB_NAME`_$DATE.sql.zip"

# Sprawdź czy katalog istnieje
if (!(Test-Path $BACKUP_DIR)) {
    New-Item -ItemType Directory -Path $BACKUP_DIR | Out-Null
    Write-Host "Utworzono katalog $BACKUP_DIR"
}

# Wykonaj backup
Write-Host "Rozpoczynam backup bazy $DB_NAME..."

try {
    $process = Start-Process -FilePath "mysqldump" `
        -ArgumentList "-u root -p $DB_NAME" `
        -NoNewWindow `
        -RedirectStandardOutput $TEMP_FILE `
        -Wait `
        -PassThru

    if ($process.ExitCode -eq 0) {
        Compress-Archive -Path $TEMP_FILE -DestinationPath $FINAL_FILE
        Remove-Item $TEMP_FILE

        Write-Host "Backup zakończony sukcesem: $FINAL_FILE"
    }
    else {
        Write-Host "Błąd podczas wykonywania backupu!"
        exit 1
    }
}
catch {
    Write-Host "Wystąpił błąd: $_"
    exit 1
}