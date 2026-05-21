# Zadanie 16 – Porównanie Bash i PowerShell

## 1. Cel zadania

Celem zadania było przygotowanie dwóch wersji skryptu backupu bazy danych:
- `backup-db.sh` (Bash – Linux)
- `backup-db.ps1` (PowerShell – Windows)

oraz porównanie różnic między tymi środowiskami.

---

## 2. Bash vs PowerShell – główne różnice

### 🐧 Bash

- używany głównie w systemach Linux/Unix
- operuje na tekstowych strumieniach danych
- używa prostych zmiennych (`$VAR`)
- brak typów danych
- bardzo lekki i szybki
- popularny w automatyzacji DevOps i serwerach

---

### 🪟 PowerShell

- używany głównie w Windows
- oparty na obiektach (nie tylko tekst)
- bardziej rozbudowany język skryptowy
- używa zmiennych `$Variable`
- posiada wbudowane cmdlety (np. `Get-ChildItem`)
- lepiej integruje się z systemem Windows

---

## 3. Różnice zauważone w przykładzie

### 📁 Obsługa plików i katalogów

- Bash:
  - `mkdir -p`
  - test `-d`

- PowerShell:
  - `New-Item`
  - `Test-Path`

---

### ⏱️ Data i czas

- Bash:
  ```bash
  date +%Y%m%d_%H%M%S