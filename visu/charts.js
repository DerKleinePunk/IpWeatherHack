document.addEventListener("DOMContentLoaded", () => {
  const ipCountsByHour = {};
  const temperatureCounts = {};
  const precipitationCounts = {};
  const cloudCoverCounts = {};
  const windSpeedCounts = {};
  const dayNightCounts = { "Tag": 0, "Nacht": 0 };

  document.addEventListener("weatherData_loaded", () => {
    weatherData.forEach((data) => {
      const timestamp = new Date(data.timestamp);
      const hour = timestamp.getHours();
      ipCountsByHour[hour] = (ipCountsByHour[hour] || 0) + 1;

      const temperature = Math.round(data.temperature);
      const precipitation = Math.round(data.precipitation);
      const cloudCover = Math.round(data.cloud_cover);
      const windSpeed = Math.round(data.wind_speed);
      const sunshineDuration = data.sunshine_duration;

      temperatureCounts[temperature] = (temperatureCounts[temperature] || 0) + 1;
      precipitationCounts[precipitation] = (precipitationCounts[precipitation] || 0) + 1;
      cloudCoverCounts[cloudCover] = (cloudCoverCounts[cloudCover] || 0) + 1;
      windSpeedCounts[windSpeed] = (windSpeedCounts[windSpeed] || 0) + 1;
      dayNightCounts[sunshineDuration] = (dayNightCounts[sunshineDuration] || 0) + 1;
    });

    const createChart = (ctx, labels, data, label, backgroundColor, borderColor) => {
      if (ctx) {
        return new Chart(ctx, {
          type: "bar",
          data: {
            labels: labels,
            datasets: [{
              label: label,
              data: data,
              backgroundColor: backgroundColor,
              borderColor: borderColor,
              borderWidth: 1,
            }],
          },
          options: {
            responsive: true,
            scales: {
              x: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: label,
                },
              },
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: "Anzahl der IPs",
                },
              },
            },
            plugins: {
              title: {
                display: true,
                text: label,
              },
            },
          },
        });
      }
    };

    const labelsHour = Object.keys(ipCountsByHour).map((hour) => `${hour}:00`);
    const dataHour = Object.values(ipCountsByHour);

    const labelsTemperature = Object.keys(temperatureCounts).map((temp) => `${temp}°C`);
    const dataTemperature = Object.values(temperatureCounts);

    const labelsPrecipitation = Object.keys(precipitationCounts).map((prec) => `${prec}mm`);
    const dataPrecipitation = Object.values(precipitationCounts);

    const labelsCloudCover = Object.keys(cloudCoverCounts).map((cloud) => `${cloud}%`);
    const dataCloudCover = Object.values(cloudCoverCounts);

    const labelsWindSpeed = Object.keys(windSpeedCounts).map((speed) => `${speed}m/s`);
    const dataWindSpeed = Object.values(windSpeedCounts);

    const labelsDayNight = Object.keys(dayNightCounts);
    const dataDayNight = Object.values(dayNightCounts);

    createChart(
      document.getElementById("ipCountChart").getContext("2d"),
      labelsHour,
      dataHour,
      "Anzahl der IPs pro Stunde",
      "rgba(54, 162, 235, 0.2)",
      "rgba(54, 162, 235, 1)"
    );
    createChart(
      document.getElementById("temperatureIpChart").getContext("2d"),
      labelsTemperature,
      dataTemperature,
      "Anzahl der IPs bei verschiedenen Temperaturen",
      "rgba(255, 99, 132, 0.2)",
      "rgba(255, 99, 132, 1)"
    );
    createChart(
      document.getElementById("precipitationIpChart").getContext("2d"),
      labelsPrecipitation,
      dataPrecipitation,
      "Anzahl der IPs bei verschiedenen Niederschlägen",
      "rgba(75, 192, 192, 0.2)",
      "rgba(75, 192, 192, 1)"
    );
    createChart(
      document.getElementById("cloudCoverIpChart").getContext("2d"),
      labelsCloudCover,
      dataCloudCover,
      "Anzahl der IPs bei verschiedenen Wolkendecken",
      "rgba(153, 102, 255, 0.2)",
      "rgba(153, 102, 255, 1)"
    );
    createChart(
      document.getElementById("windSpeedIpChart").getContext("2d"),
      labelsWindSpeed,
      dataWindSpeed,
      "Anzahl der IPs bei verschiedenen Windgeschwindigkeiten",
      "rgba(255, 159, 64, 0.2)",
      "rgba(255, 159, 64, 1)"
    );
    createChart(
      document.getElementById("dayNightIpChart").getContext("2d"),
      labelsDayNight,
      dataDayNight,
      "Anzahl der IPs bei Tag und Nacht",
      "rgba(255, 206, 86, 0.2)",
      "rgba(255, 206, 86, 1)"
    );
  });
});
