# Zadanie 23 – Analiza i optymalizacja algorytmu znajdowania par

## 1. Cel zadania

Celem zadania było przeanalizowanie algorytmu znajdującego pary liczb o zadanej sumie oraz jego optymalizacja pod kątem wydajności.

---

## 2. Oryginalny algorytm

Funkcja:

```javascript
function findPairs(arr, targetSum) {
  const pairs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === targetSum) {
        pairs.push([arr[i], arr[j]]);
      }
    }
  }
}