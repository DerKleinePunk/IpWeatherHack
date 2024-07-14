import { API_URL } from "./config.js";

let weatherData = [];

async function updateWeatherData() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }
    const data = await response.json();
    weatherData = data.map((entry) => ({
      ip: entry.ip,
      latitude: entry.latitude,
      longitude: entry.longitude,
      temperature: entry.temperature,
      precipitation: entry.precipitation,
      cloud_cover: entry.cloud_cover,
      wind_speed: entry.wind_speed,
      is_day: entry.is_day,
      sunshine_duration: entry.sunshine_duration,
    }));
    console.log("Weather data updated:", weatherData);
  } catch (error) {
    console.error("Error fetching weather data:", error.message);
  }
}

updateWeatherData();
setInterval(updateWeatherData, 5 * 60 * 1000);