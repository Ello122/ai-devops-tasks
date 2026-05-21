# Zadanie 15 – Refaktoryzacja funkcji konfiguracyjnej

## 1. Cel zadania

Celem zadania było zrefaktoryzowanie funkcji `getEnvironmentConfig`, która zwraca konfigurację aplikacji w zależności od środowiska (development, testing, staging, production).

---

## 2. Oryginalna wersja

Oryginalna funkcja używała wielu instrukcji `if / else if`, co powodowało:

- niską czytelność kodu
- trudności w rozbudowie
- powtarzające się struktury danych
- większe ryzyko błędów przy modyfikacji

---

## 3. Zrefaktoryzowana wersja

W refaktoryzacji zastosowano obiekt mapujący środowiska:

- `CONFIGS` – obiekt przechowujący wszystkie konfiguracje
- szybki dostęp przez klucz `env`
- domyślna konfiguracja dla nieznanego środowiska

---

## 4. Zalety refaktoryzacji

### ✔ Lepsza czytelność
Kod jest krótszy i łatwiejszy do zrozumienia.

### ✔ Łatwiejsze utrzymanie
Dodanie nowego środowiska wymaga tylko dopisania jednego wpisu w obiekcie.

### ✔ Mniejsza ilość logiki warunkowej
Zamiast wielu `if/else`, używany jest prosty lookup w obiekcie.

### ✔ Skalowalność
Kod łatwo rozbudować bez modyfikowania istniejącej logiki.

---

## 5. Podsumowanie

Refaktoryzacja poprawiła strukturę kodu poprzez zastąpienie warunków `if/else` centralnym obiektem konfiguracji, co zwiększyło czytelność i łatwość utrzymania.