Ten błąd oznacza, że Docker nie może uruchomić kontenera, ponieważ port 3000 na Twoim komputerze (host) jest już zajęty przez inny proces.

Co dokładnie mówi błąd?
listen tcp4 0.0.0.0:3000: bind: address already in use
0.0.0.0:3000 → Docker próbuje nasłuchiwać na porcie 3000 na Twoim komputerze
address already in use → ktoś już używa tego portu (inny program lub inny kontener)
🔍 Jak znaleźć, co blokuje port 3000?
Linux / macOS:
lsof -i :3000
Alternatywnie:
netstat -tulpn | grep 3000
Windows:
netstat -ano | findstr :3000
🛠️ Jak to naprawić?
1. Zatrzymaj proces, który używa portu

Jeśli widzisz PID procesu:

kill -9 <PID>
2. Zatrzymaj inny kontener Docker

Często to inny kontener już używa portu:

docker ps
docker stop <container_id>
3. Zmień port w Dockerze (najprostsze rozwiązanie)

Zamiast:

docker run -p 3000:3000 myapp

użyj:

docker run -p 3001:3000 myapp

👉 wtedy:

aplikacja w kontenerze nadal działa na 3000
Ty wchodzisz przez localhost:3001
4. Sprawdź docker-compose (jeśli używasz)

W Docker Compose:

ports:
  - "3000:3000"

Zmień na:

ports:
  - "3001:3000"
💡 Najczęstszy scenariusz

W 90% przypadków:

masz już uruchomioną aplikację Node.js / React na 3000
albo poprzedni kontener nie został zatrzymany