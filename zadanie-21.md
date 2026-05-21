# Zadanie 21 – Konwersja JSON do CSV

## 1. Cel zadania

Celem zadania było przekształcenie danych w formacie JSON do formatu CSV oraz analiza problemów wynikających z takiej transformacji.

---

## 2. Dane wejściowe

Dane wejściowe zawierały listę użytkowników w formacie JSON:

- id
- name
- email
- roles (tablica wartości)

---

## 3. Wynik – format CSV

Dane zostały przekształcone do formatu CSV z kolumnami:

- id
- name
- email
- roles

Przykład:

```csv
1,Jan Kowalski,jan@example.com,"admin;user"