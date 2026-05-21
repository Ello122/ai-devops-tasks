# Zadanie 17 – Filtrowanie i sortowanie zadań w JavaScript

## 1. Cel zadania

Celem zadania było stworzenie funkcji, która:
- przyjmuje tablicę obiektów reprezentujących zadania
- filtruje tylko zadania o statusie `"completed"`
- sortuje je według `id` rosnąco
- zwraca tablicę zawierającą tylko tytuły zadań

---

## 2. Struktura obiektu zadania

Każde zadanie ma postać:

```javascript
{
  id: Number,
  title: String,
  status: String
}
 przyklad
const getCompletedTaskTitles = require('./task-filter');

const tasks = [
  { id: 3, title: "Deploy app", status: "completed" },
  { id: 1, title: "Write tests", status: "pending" },
  { id: 2, title: "Fix bugs", status: "completed" }
];

console.log(getCompletedTaskTitles(tasks));