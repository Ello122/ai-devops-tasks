Ignorowanie plików w .gitignore jest ważne, bo chroni repozytorium przed śmieciowymi, wrażliwymi i generowanymi automatycznie danymi, które nie powinny być wersjonowane w Git.

1. Ochrona danych wrażliwych

Pliki typu .env często zawierają hasła, tokeny API czy connection stringi do bazy MongoDB.
Gdyby trafiły do repozytorium, każdy z dostępem do kodu mógłby je odczytać — to poważne ryzyko bezpieczeństwa.

2. Unikanie „zaśmiecania” repozytorium

Foldery jak node_modules/ w Node.js mogą mieć tysiące plików.
Dodanie ich do Git:

spowalnia operacje (git status, commit)
zwiększa rozmiar repozytorium
utrudnia przeglądanie kodu
3. Pliki generowane automatycznie nie są potrzebne

Foldery typu:

dist/
build/
logi

powstają w trakcie działania lub builda Docker albo aplikacji i zawsze można je odtworzyć.

4. Unikanie konfliktów między środowiskami

Różni programiści mogą mieć inne:

systemy operacyjne
konfiguracje IDE
lokalne dane

Ignorowanie takich plików zapobiega konfliktom i „losowym zmianom” w repo.

5. Bezpieczna współpraca zespołowa

Dzięki .gitignore wszyscy pracują na tym samym „czystym” kodzie, bez przypadkowych plików lokalnych.

Podsumowanie

.gitignore zapewnia, że do Git trafia tylko kod źródłowy i potrzebne pliki projektu, a nie:

sekrety
dane lokalne
zależności
pliki tymczasowe

Jeśli chcesz, mogę pokazać Ci też typowe błędy w .gitignore, które robią juniorzy (i które potem powodują problemy na produkcji).