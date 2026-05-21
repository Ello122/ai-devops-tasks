dockerfile node

Przykładowy Dockerfile dla aplikacji Node.js:

# Pobranie obrazu Node.js
FROM node:20

# Ustawienie katalogu roboczego
WORKDIR /app

# Kopiowanie package.json
COPY package*.json ./

# Instalacja zależności
RUN npm install

# Kopiowanie plików aplikacji
COPY . .

# Port aplikacji
EXPOSE 3000

# Uruchomienie aplikacji
CMD ["npm", "start"]

Budowanie obrazu:

docker build -t moja-aplikacja .

Uruchomienie kontenera:

docker run -p 3000:3000 moja-aplikacja

Przykładowy Dockerfile dla aplikacji Node.js spełniający podane wymagania:

# Obraz bazowy Node.js 18
FROM node:18

# Katalog roboczy
WORKDIR /app

# Kopiowanie plików package
COPY package.json package-lock.json ./

# Instalacja zależności
RUN npm install

# Kopiowanie reszty aplikacji
COPY . .

# Wystawienie portu 3000
EXPOSE 3000

# Uruchomienie aplikacji
CMD ["npm", "start"]