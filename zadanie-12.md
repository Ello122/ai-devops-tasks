Tak — ten kod można znacząco zoptymalizować.

🔴 Problem obecnej wersji

Twoje rozwiązanie działa w czasie O(n²), ponieważ:

masz dwie zagnieżdżone pętle
dla każdego elementu porównujesz go z każdym innym
dodatkowo in duplicates też jest operacją O(n)

Czyli w praktyce robi się dość wolne przy dużych listach.

🟢 Lepsze rozwiązanie (O(n)) – użycie słownika / set

Najprostsza i dużo szybsza wersja:

def find_duplicates(list_of_items):
    seen = set()
    duplicates = set()

    for item in list_of_items:
        if item in seen:
            duplicates.add(item)
        else:
            seen.add(item)

    return list(duplicates)
🚀 Dlaczego to jest lepsze?
✔ Złożoność czasowa:
poprzednio: O(n²)
teraz: O(n)
✔ Jak działa:
seen → przechowuje elementy, które już widzieliśmy
duplicates → przechowuje powtórki
każdy element sprawdzamy tylko raz
🟡 Alternatywa (jeszcze krótsza)

Jeśli nie zależy Ci na kolejności:

from collections import Counter

def find_duplicates(list_of_items):
    return [item for item, count in Counter(list_of_items).items() if count > 1]