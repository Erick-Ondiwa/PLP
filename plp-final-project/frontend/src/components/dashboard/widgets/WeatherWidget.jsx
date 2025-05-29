import React from 'react';
import styles from './WeatherWidget.module.css';

// Dummy weather data (replace later with real API integration)
const dummyWeather = {
  location: "Kisumu, Kenya",
  temperature: "27°C",
  condition: "Partly Cloudy",
  humidity: "65%",
  wind: "15 km/h",
};

const WeatherWidget = () => {
  return (
    <div className={styles.weatherBox}>
      <h3 className={styles.title}>☀️ Current Weather</h3>
      <div className={styles.content}>
        <div className={styles.details}>
          <p><strong>Location:</strong> {dummyWeather.location}</p>
          <p><strong>Temp:</strong> {dummyWeather.temperature}</p>
          <p><strong>Condition:</strong> {dummyWeather.condition}</p>
        </div>
        <div className={styles.extra}>
          <p><strong>Humidity:</strong> {dummyWeather.humidity}</p>
          <p><strong>Wind:</strong> {dummyWeather.wind}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
