#!/bin/bash

# Sprawdzenie statusu Docker
if ! systemctl is-active --quiet docker; then
    echo "Docker nie działa. Uruchamiam usługę..."

    # Próba uruchomienia Docker
    sudo systemctl start docker

    # Ponowne sprawdzenie
    if systemctl is-active --quiet docker; then
        echo "Docker został uruchomiony pomyślnie."
    else
        echo "Nie udało się uruchomić Docker."
        exit 1
    fi
else
    echo "Docker działa poprawnie."
fi