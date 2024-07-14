document.addEventListener("DOMContentLoaded", () => {
  const map = L.map("map").setView([52.52, 13.41], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  weatherData.forEach((data) => {
    L.circle([data.latitude, data.longitude], {
      color: "red",
      fillColor: "#f03",
      fillOpacity: 0.5,
      radius: 500,
    })
      .addTo(map)
      .bindPopup(`IP: ${data.ip}<br>Timestamp: ${data.timestamp}`);
  });
});
