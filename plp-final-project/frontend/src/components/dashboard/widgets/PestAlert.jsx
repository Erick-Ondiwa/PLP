import React from 'react';
import styles from './PestAlert.module.css';

const pestAlerts = [
  {
    id: 1,
    pest: 'Armyworms',
    location: 'Zone A',
    severity: 'High',
    reported: '2 hours ago',
  },
  {
    id: 2,
    pest: 'Aphids',
    location: 'Zone B',
    severity: 'Moderate',
    reported: 'Yesterday',
  },
  {
    id: 3,
    pest: 'Whiteflies',
    location: 'Greenhouse 1',
    severity: 'Low',
    reported: '3 days ago',
  },
];

const getSeverityClass = (level) => {
  switch (level) {
    case 'High':
      return styles.high;
    case 'Moderate':
      return styles.moderate;
    case 'Low':
      return styles.low;
    default:
      return '';
  }
};

const PestAlertWidget = () => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>🐛 Pest Alerts</h3>
      <div className={styles.alertList}>
        {pestAlerts.map((alert) => (
          <div key={alert.id} className={`${styles.alertCard} ${getSeverityClass(alert.severity)}`}>
            <div className={styles.cardHeader}>
              <span className={styles.pestName}>{alert.pest}</span>
              <span className={styles.severity}>{alert.severity}</span>
            </div>
            <p className={styles.location}>📍 {alert.location}</p>
            <p className={styles.reported}>🕒 {alert.reported}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PestAlertWidget;
