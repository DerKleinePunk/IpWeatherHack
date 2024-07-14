Dies ist das all_weather_data Objekt welches beim /api/weather_data aufruf zurück kommt.

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


#Setzen der .env

Kopieren example.env
umbenennen in .env
credentials ändern