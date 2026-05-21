Poniżej masz poprawne wyrażenie regularne do walidacji adresu IPv4 (np. 192.168.1.1):

^((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$
🧠 Jak to działa?

Adres IPv4 składa się z 4 oktetów (0–255), np.:
192 . 168 . 1 . 1

Każdy oktet musi być w zakresie:

0–9
10–99
100–199
200–249
250–255
🔍 Rozbicie regexa
1. Oktet:
(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)

Oznacza:

25[0-5] → 250–255
2[0-4]\d → 200–249
1\d\d → 100–199
[1-9]?\d → 0–99
2. Powtórzenie 3 razy z kropką:
(...\.){3}

Czyli:

trzy oktety + kropki
3. Ostatni oktet:
(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)

Bez kropki na końcu.

✅ Przykłady
✔ poprawne:
192.168.1.1
10.0.0.1
255.255.255.255
❌ niepoprawne:
256.1.1.1
192.168.1
192.168.1.999