# Projektbeschreibung: Visualisierung von Wetterdaten im zusammenhang mit "Cyber-Angriffen" und "Security-Scannern"

## Einleitung
Das Ziel dieses Projekts ist die Visualisierung von Wetterdaten in Echtzeit und die Darstellung der Anzahl der Angriffe in Bezug auf verschiedene Wetterbedingungen. Dies wird durch die Verwendung von HTML, JavaScript, der Chart.js-Bibliothek und Leaflet.js erreicht. Die interaktiven Diagramme und Karten bieten eine umfassende Ansicht der Daten und helfen, Zusammenhänge zwischen Wetterbedingungen und Nutzeraktivitäten zu erkennen.

## Technologien und Werkzeuge
- **HTML/CSS:** Strukturierung und Gestaltung der Webanwendung.
- **JavaScript:** Implementierung der Logik und Interaktivität.
- **Chart.js:** Bibliothek zur Erstellung von interaktiven Diagrammen.
- **Leaflet.js:** Bibliothek zur Erstellung von interaktiven Karten.
- **OpenStreetMap:** Bereitstellung der Kartenkacheln.

## Projektstruktur
Das Projekt besteht aus den folgenden Hauptkomponenten:

1. **HTML-Seite:**
   - Definiert die Struktur der Webanwendung und enthält Platzhalter für die Diagramme und die Karte.

2. **JavaScript-Logik:**
   - **charts.js:** Enthält den Code zur Erstellung der Diagramme mit Chart.js.
   - **map.js:** Enthält den Code zur Erstellung der interaktiven Karte mit Leaflet.js.

3. **Datenquelle:**
   - **Wetterdaten:** Diese werden aus der https://open-meteo.com/ API gezogen
   - **IP-Adressen:** Diese kommen von **wormaus** eigener scanbuster API

