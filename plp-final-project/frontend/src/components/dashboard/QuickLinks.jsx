import React from 'react';
import styles from './QuickLinks.module.css';
import { Link } from 'react-router-dom';

const QuickLinks = () => {
  return (
    <div className={styles.linksWrapper}>
      <Link to="/sensors" className={styles.linkCard}>
        <h4>📡 Sensor Data</h4>
        <p>View live sensor updates</p>
      </Link>

      <Link to="/analytics" className={styles.linkCard}>
        <h4>📊 Crop Analytics</h4>
        <p>Analyze trends and performance</p>
      </Link>

      <Link to="/weather" className={styles.linkCard}>
        <h4>☀️ Weather Forecast</h4>
        <p>Plan ahead with detailed weather</p>
      </Link>

      <Link to="/pests" className={styles.linkCard}>
        <h4>🪲 Pest Reports</h4>
        <p>Detect and manage infestations</p>
      </Link>
    </div>
  );
};

export default QuickLinks;
