import React from 'react';
import styles from './WelcomeBanner.module.css';

const WelcomeBanner = () => {
  const userName = "Erick"; // Replace with dynamic value when auth is done
  const farmName = "Green Horizon Farm"; // Replace with dynamic value too

  return (
    <div className={styles.banner}>
      <div>
        <h2 className={styles.greeting}>Welcome back, {userName} 👋</h2>
        <p className={styles.subText}>Monitoring status for <strong>{farmName}</strong></p>
      </div>
    </div>
  );
};

export default WelcomeBanner;
