# Zadanie 13 – Dokumentacja JSDoc

## 1. Cel zadania

Celem zadania było stworzenie funkcji `fetchUserData`, która pobiera dane użytkownika z API, a następnie dodanie do niej dokumentacji w formacie **JSDoc**.

Dodatkowo przygotowano dwie wersje pliku:
- `fetch-user.js` – wersja podstawowa funkcji
- `fetch-user-documented.js` – wersja z dokumentacją JSDoc

---

## 2. Czym jest JSDoc?

:contentReference[oaicite:0]{index=0} to standard dokumentowania kodu JavaScript za pomocą specjalnych komentarzy.

Umożliwia:
- opisywanie funkcji, parametrów i zwracanych wartości
- lepsze podpowiedzi w edytorach kodu (IntelliSense)
- automatyczne generowanie dokumentacji
- poprawę czytelności kodu

---

## 3. Plik: fetch-user.js (wersja podstawowa)

```javascript
function fetchUserData(userId) {
  return fetch(`https://api.example.com/users/${userId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      return {
        name: data.name,
        email: data.email,
        lastLogin: new Date(data.lastLoginTimestamp)
      };
    })
    .catch(error => {
      console.error('Fetch error:', error);
      return null;
    });
}

module.exports = fetchUserData;