Jasne — przejdźmy przez ten skrypt krok po kroku, bardzo prosto.

#!/bin/bash

To mówi systemowi: „ten plik ma być uruchamiany w powłoce bash”. Dzięki temu system wie, jak interpretować komendy w środku.

if ! systemctl is-active --quiet docker; then
systemctl is-active docker sprawdza, czy usługa Docker działa.
--quiet oznacza: „nie pokazuj nic na ekranie, tylko zwróć wynik”.
! oznacza „jeśli NIE działa”.
then oznacza: „jeśli warunek jest spełniony, wykonaj poniższy blok”.

Czyli: jeśli Docker nie działa — zrób coś dalej.

    echo "Docker nie działa. Uruchamiam usługę..."

Wyświetla komunikat w terminalu, żeby użytkownik wiedział, co się dzieje.

    sudo systemctl start docker
sudo = uruchom jako administrator
systemctl start docker = uruchom usługę Docker

Czyli: próba włączenia Dockera.

    if systemctl is-active --quiet docker; then

Ponownie sprawdzamy, czy Docker już działa po próbie uruchomienia.

        echo "Docker został uruchomiony pomyślnie."

Jeśli wszystko się udało — wyświetlamy informację o sukcesie.

    else
        echo "Nie udało się uruchomić Docker."
        exit 1

Jeśli Docker nadal nie działa:

pokazujemy błąd,
exit 1 kończy skrypt z kodem błędu (czyli „coś poszło nie tak”).
    fi

Koniec wewnętrznego if (czyli tego sprawdzającego uruchomienie Dockera).

else
    echo "Docker działa poprawnie."

Jeśli na początku Docker już działał, to po prostu informujemy użytkownika i nic nie robimy.

fi

Koniec głównego if.

Podsumowanie w jednym zdaniu:

Skrypt sprawdza, czy Docker działa, a jeśli nie — próbuje go uruchomić i informuje, czy się udało.