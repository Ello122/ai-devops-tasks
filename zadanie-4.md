Aby zmniejszyć duże zużycie pamięci przez kontener Docker, można zastosować kilka praktycznych rozwiązań:

Ustaw limit pamięci dla kontenera
Przy uruchamianiu:

docker run -m 512m moja-aplikacja

Kontener nie będzie mógł użyć więcej niż 512 MB RAM.

Sprawdź wycieki pamięci w aplikacji
Problem często wynika z samej aplikacji, np. w Node.js lub Javie. Warto monitorować procesy i profilować pamięć.

Używaj lekkich obrazów
Zamiast pełnych obrazów:

FROM node:18-alpine

obrazy Alpine zużywają mniej zasobów.

Usuń niepotrzebne procesy i zależności
Ogranicz liczbę uruchamianych usług wewnątrz kontenera i instalowanych pakietów.

Monitoruj użycie zasobów
Sprawdzanie:

docker stats

pomaga wykryć, który kontener zużywa najwięcej pamięci.

Restartuj kontenery przy problemach z pamięcią
Można ustawić politykę restartu:

docker run --restart always ...
Optymalizuj konfigurację aplikacji
Np. ogranicz liczbę workerów, cache lub wielkość logów w aplikacji.

Jeśli kontener Docker zużywa zbyt dużo pamięci, najpierw trzeba ustalić, czy problem leży w samej aplikacji, konfiguracji kontenera czy hosta. Typowy proces diagnostyki wygląda tak:

1. Sprawdzenie realnego użycia pamięci

Najpierw sprawdzam metryki:

docker stats

oraz:

docker inspect <container_id>

Na hoście:

htop
free -m

Często okazuje się, że:

aplikacja ma memory leak,
cache rośnie bez limitu,
procesy child nie są zamykane,
logi zajmują RAM przez bufferowanie.
2. Ograniczenie pamięci kontenera

Nigdy nie zostawiam kontenerów bez limitów RAM w środowisku produkcyjnym.

Przykład:

docker run -m 512m --memory-swap=512m myapp

W Kubernetes:

resources:
  requests:
    memory: "256Mi"
  limits:
    memory: "512Mi"

To chroni host przed zjedzeniem całego RAM-u przez jeden kontener.

3. Analiza aplikacji pod kątem memory leaków

Najczęstszy winowajca to aplikacja, nie Docker.

Dla Node.js:

heap snapshots,
node --inspect,
clinic.js,
analiza event loop.

Dla Javy:

heap dump,
VisualVM,
GC logs.

Bardzo często problemem są:

nieskończone cache,
trzymanie obiektów w pamięci,
źle zamykane połączenia,
kolejki async.
4. Używanie lekkich obrazów

Zmniejszam footprint obrazu:

FROM node:18-alpine

albo multi-stage builds:

FROM node:18 AS builder
...
FROM node:18-alpine

Mniejsze obrazy = mniej procesów i bibliotek = mniejsze zużycie RAM.

5. Ograniczenie logów

Docker potrafi zużywać dużo pamięci i dysku przez logi.

Ustawiam rotację:

{
  "log-driver": "json-file",
  "log-opts": {
    "max-size": "10m",
    "max-file": "3"
  }
}
6. Monitoring i alerting

W produkcji obowiązkowo:

Prometheus
Grafana
alerty OOMKilled,
monitoring RSS/cache/heap.

Bez monitoringu problem zwykle wraca.

7. Sprawdzenie OOMKilled

Bardzo ważne:

docker inspect <container_id> | grep OOMKilled

Jeśli:

"OOMKilled": true

to kernel zabił proces przez brak pamięci.

8. Optymalizacja architektury

Jeśli kontener stale potrzebuje ogromnego RAM-u:

rozbijam monolit,
dodaję kolejki,
skaluję horyzontalnie,
ograniczam concurrency/workery.

Często lepiej mieć 3 mniejsze instancje niż jeden ogromny proces.