document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("weatherData_loaded", () => {
    const map = L.map("map").setView([52.52, 13.41], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    const ipCountsByLocation = {};

    weatherData.forEach((data) => {
      const key = `${data.latitude.toFixed(3)}_${data.longitude.toFixed(3)}`;
      if (ipCountsByLocation[key]) {
        ipCountsByLocation[key].count++;
      } else {
        ipCountsByLocation[key] = {
          latitude: data.latitude,
          longitude: data.longitude,
          count: 1,
        };
      }
    });

    const maxCount = Math.max(
      ...Object.values(ipCountsByLocation).map((loc) => loc.count)
    );
    const radiusScaleFactor = 1000;

    Object.values(ipCountsByLocation).forEach((location) => {
      const radius = Math.sqrt(location.count / maxCount) * radiusScaleFactor;

      L.circle([location.latitude, location.longitude], {
        color: "red",
        fillColor: "#f03",
        fillOpacity: 0.5,
        radius: radius,
      })
        .addTo(map)
        .bindPopup(`Anzahl der IPs: ${location.count}`);
    });
  });
});
