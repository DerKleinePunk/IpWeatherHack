# Wetterdaten-API

Die Wetterdaten-API ermöglicht es, Wetterinformationen basierend auf IP-Adressen abzurufen und zu speichern.

## `all_weather_data` Objekt

Beim Aufruf der Route `/api/weather_data` wird ein JSON-Array zurückgegeben, das alle gespeicherten Wetterdaten für verschiedene IP-Adressen enthält. Das Format des `all_weather_data`-Objekts ist wie folgt:

```json
[
    {
        "ip": "EXAMPLE_IP",
        "latitude": 52.52,
        "longitude": 13.41,
        "temperature": 23.5,
        "precipitation": 0.0,
        "cloud_cover": 0.4,
        "wind_speed": 7.2,
        "is_day": true,
        "sunshine_duration": 5.3
    },
    {
        "ip": "EXAMPLE_IP",
        "latitude": 52.52,
        "longitude": 13.41,
        "temperature": 22.1,
        "precipitation": 0.1,
        "cloud_cover": 0.7,
        "wind_speed": 6.5,
        "is_day": true,
        "sunshine_duration": 3.8
    }
]
```

## Setzen der `.env`

Um die Anwendung mit einer Datenbank zu verbinden, muss eine `.env`-Datei erstellt werden:

1. Kopiere `example.env` und benenne die Kopie in `.env` um:

    ```bash
    cp example.env .env
    ```

2. Bearbeite die `.env`-Datei und setze die erforderlichen Credentials für die Datenbankverbindung und andere Einstellungen:

    ```dotenv
    DB_HOST=localhost
    DB_USER=your_database_username
    DB_PASSWORD=your_database_password
    DB_DATABASE=weather_db
    HOST=127.0.0.1
    PORT=57080
    ```

    Stelle sicher, dass du die Werte für `DB_HOST`, `DB_USER`, `DB_PASSWORD` und `DB_DATABASE` entsprechend deiner Umgebung und Konfiguration änderst.
    HOST Ip auf dem der flask Server hört
    PORT auf dem der flask Server hört


## Setzen der `environment.js`

Um die Anwendung mit dem Backend zu verbinden, muss eine `environment.js-Datei erstellt werden:

1. Kopiere `example-environment.js` und benenne die Kopie in `environment.js` um:

    ```bash
    cp example-enviroment.js enviroment.js
    ```

2. Bearbeite die `environment.js`-Datei und setze die erforderliche URL:

    ```dotenv
    API_URL = 'https://api.example.com/weather'
    ```