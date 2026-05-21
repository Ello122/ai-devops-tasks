+-----------+        +-------------------+        +--------------+
|  Klient   | -----> | Serwer aplikacji | -----> | Baza danych |
+-----------+        +-------------------+        +--------------+

                 (żądanie HTTP / API request)
+-----------+  --------------------------------->  +------------------------+
|  Klient   |                                     |  Serwer aplikacji     |
| (np. UI)  |  <---------------------------------  | (logika biznesowa)    |
+-----------+        (odpowiedź / response)        +------------------------+
                                                         |
                                                         | (zapytania SQL)
                                                         v
                                               +------------------------+
                                               |     Baza danych       |
                                               | (przechowywanie danych)|
                                               +------------------------+
                                                         ^
                                                         |
                                           (wyniki zapytań / data result)