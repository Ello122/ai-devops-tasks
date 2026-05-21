services:
  web:
    image: nginx
    ports:
      - "80:80"
  app:
    build: .
    ports
      - "3000:3000"
    depends_on:
      - db
  db:
    image: postgres
    environment:
      POSTGRES_PASSWORD=password



❌ Co jest nie tak?
1. Błąd składni w ports (app)

Masz:

ports
  - "3000:3000"

Brakuje dwukropka : po ports.

2. Brak hasła w db (logicznie OK, ale mało bezpieczne)

To:

POSTGRES_PASSWORD=password

działa, ale w praktyce powinno być lepsze hasło lub zmienna z .env.

3. Brak wersji pliku (zalecane)

Nowoczesny Compose zwykle ma np.:

version: "3.8"
✅ Poprawna wersja
version: "3.8"

services:
  web:
    image: nginx
    ports:
      - "80:80"

  app:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      - db

  db:
    image: postgres
    environment:
      POSTGRES_PASSWORD: password