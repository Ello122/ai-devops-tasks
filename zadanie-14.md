🧾 Co się dzieje krok po kroku?
1. Kontener staje się zdrowy
Container 78a2b3c4 health status changed from starting to healthy

👉 Aplikacja wystartowała poprawnie i przeszła healthcheck.

2. Problem z połączeniem do bazy
failed to connect to 172.17.0.3:5432: connection refused

👉 Kontener próbował połączyć się z:

172.17.0.3 → inny kontener (prawdopodobnie baza danych)
5432 → port PostgreSQL

❌ „connection refused” oznacza:

port jest niedostępny
usługa nie działa
albo nie nasłuchuje na tym interfejsie
3. Healthcheck zmienia stan na unhealthy
health status changed from healthy to unhealthy

👉 System wykrył, że aplikacja nie spełnia warunków zdrowia (np. brak połączenia z DB).

🚨 Jakie problemy tu widać?
1. ❌ Baza danych nie działa lub się restartuje

Najczęstsze przyczyny:

kontener DB się wyłączył
crash PostgreSQL
brak inicjalizacji
2. ❌ Baza nie jest jeszcze gotowa (race condition)

Bardzo częste w Docker Compose:

app startuje szybciej niż DB
depends_on nie czeka na „ready state”
tylko na „started”
3. ❌ Zły adres / networking

Możliwe:

użycie IP zamiast nazwy serwisu (db)
błędna sieć Dockera
zmiana IP kontenera (dynamiczne)
4. ❌ PostgreSQL nie nasłuchuje na porcie 5432

Możliwe:

postgres nie wystartował poprawnie
błędna konfiguracja listen_addresses
brak volume / uszkodzona baza
🔍 Jak to zdebugować?
1. Sprawdź kontenery
docker ps
2. Logi bazy
docker logs <db_container>
3. Sprawdź sieć
docker network inspect bridge
4. Test połączenia z app
docker exec -it <app> sh
nc -zv db 5432
🛠️ Najczęstsze rozwiązanie
✔ dodanie retry w aplikacji

Aplikacja powinna próbować ponownie połączenia do DB.

✔ healthcheck dla DB
healthcheck:
  test: ["CMD-SHELL", "pg_isready -U postgres"]
  interval: 5s
  retries: 10
✔ lepsze depends_on (Compose v2)
depends_on:
  db:
    condition: service_healthy
📌 Podsumowanie

Masz klasyczny problem:

🧠 aplikacja działa, ale traci połączenie z bazą PostgreSQL, przez co healthcheck przechodzi z healthy → unhealthy.