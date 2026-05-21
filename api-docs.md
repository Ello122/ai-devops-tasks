# API Documentation

## Endpoint: `GET /api/users`

Zwraca listę użytkowników z możliwością paginacji i filtrowania według roli.

---

## 📌 Opis

Endpoint umożliwia pobranie listy użytkowników z systemu.  
Obsługuje paginację oraz opcjonalne filtrowanie po roli użytkownika.

---

## 🔧 Parametry zapytania (Query Parameters)

| Parametr | Typ | Domyślna wartość | Opis |
|----------|-----|------------------|------|
| page     | number | 1 | Numer strony wyników |
| limit    | number | 10 | Liczba wyników na stronę (max: 100) |
| role     | string | brak | Opcjonalny filtr według roli użytkownika |

---

## 📥 Przykładowe żądanie

```http
GET /api/users?page=2&limit=5&role=admin HTTP/1.1
Host: api.example.com


{
  "page": 2,
  "limit": 5,
  "total": 42,
  "users": [
    {
      "id": 1,
      "name": "Jan Kowalski",
      "email": "jan@example.com",
      "role": "admin"
    },
    {
      "id": 2,
      "name": "Anna Nowak",
      "email": "anna@example.com",
      "role": "admin"
    }
  ]
}