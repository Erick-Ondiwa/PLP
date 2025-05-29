import React from 'react';
import styles from './SensorOverview.module.css';

// Dummy sensor data (replace with real-time API or websocket data)
const sensorData = [
  { name: 'Soil Moisture', value: '48%', unit: '', icon: '💧' },
  { name: 'Temperature', value: '26°C', unit: '', icon: '🌡️' },
  { name: 'Humidity', value: '60%', unit: '', icon: '💨' },
  { name: 'pH Level', value: '6.5', unit: '', icon: '🧪' },
];

const SensorOverview = () => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>📡 Sensor Overview</h3>
      <div className={styles.grid}>
        {sensorData.map((sensor, idx) => (
          <div key={idx} className={styles.card}>
            <div className={styles.icon}>{sensor.icon}</div>
            <h4 className={styles.name}>{sensor.name}</h4>
            <p className={styles.value}>{sensor.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SensorOverview;
