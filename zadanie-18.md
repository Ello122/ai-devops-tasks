1. 🔐 Uruchamianie kontenerów bez uprawnień root

Nie uruchamiaj aplikacji jako root wewnątrz kontenera.
Zamiast tego twórz dedykowanego użytkownika w Dockerfile.

👉 Minimalizuje to ryzyko przejęcia całego systemu hosta.

2. 📦 Używanie minimalnych i bezpiecznych obrazów

Korzystaj z lekkich obrazów (np. Alpine) i oficjalnych repozytoriów.

mniej pakietów = mniejsza powierzchnia ataku
mniej zależności = mniej podatności
3. 🛡️ Regularne skanowanie podatności obrazów

Wykrywaj znane luki w obrazach i zależnościach.

Często używa się narzędzi:

Trivy
Snyk
Docker Scout
4. 🔑 Zarządzanie sekretami poza kontenerem

Nigdy nie trzymaj haseł w obrazie ani kodzie.

Zamiast tego używaj:

zmiennych środowiskowych
secret managerów
np. w Kubernetes: Kubernetes Secrets
5. 🌐 Ograniczanie uprawnień sieciowych i zasobów

Kontenery powinny mieć tylko tyle dostępu, ile potrzebują:

ogranicz porty (-p)
używaj izolowanych sieci Docker
ustaw limity CPU i RAM
blokuj niepotrzebny ruch wychodzący
📌 Bonus (praktyka DevSecOps)

W nowoczesnych systemach stosuje się podejście DevSecOps, gdzie bezpieczeństwo jest częścią procesu CI/CD, a nie dodatkiem na końcu.

FROM node:18

# Tworzymy grupę i użytkownika
RUN groupadd -r appuser && useradd -r -g appuser appuser

# Ustawiamy katalog roboczy
WORKDIR /app

# Kopiowanie plików
COPY package*.json ./
RUN npm install

COPY . .

# Zmiana właściciela plików
RUN chown -R appuser:appuser /app

# Przełączenie na użytkownika nie-root
USER appuser

EXPOSE 3000

CMD ["npm", "start"]