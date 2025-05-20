// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heroSection}>
        <h1 className={styles.header}>Welcome to the Crop Monitoring Dashboard</h1>
        <p className={styles.subHeader}>
          Gain real-time insights into your farm — from crop health to weather trends and pest alerts.
        </p>

        <Link to="/login" className={styles.loginButton}>
          Login to Continue
        </Link>
      </div>

      <div className={styles.cardGrid}>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Real-Time Monitoring</h3>
          <p className={styles.cardText}>
            View live sensor data and keep track of temperature, humidity, soil moisture, and more.
          </p>
        </div>

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Weather Forecast</h3>
          <p className={styles.cardText}>
            Access detailed weather predictions to plan irrigation, planting, and harvesting.
          </p>
        </div>

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Pest Detection</h3>
          <p className={styles.cardText}>
            Use intelligent pest detection systems to catch early signs of infestations.
          </p>
        </div>

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Crop Analytics</h3>
          <p className={styles.cardText}>
            Analyze crop performance over time with health metrics and productivity trends.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
