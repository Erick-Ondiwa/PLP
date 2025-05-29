import React from 'react';
import styles from './CropHealthSummary.module.css';

const cropData = [
  {
    name: 'Maize',
    status: 'Healthy',
    healthScore: 85,
  },
  {
    name: 'Beans',
    status: 'Moderate',
    healthScore: 65,
  },
  {
    name: 'Tomatoes',
    status: 'Critical',
    healthScore: 40,
  },
];

const getStatusColor = (score) => {
  if (score >= 80) return styles.healthy;
  if (score >= 60) return styles.moderate;
  return styles.critical;
};

const CropHealthSummary = () => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>🌿 Crop Health Summary</h3>
      <div className={styles.grid}>
        {cropData.map((crop, idx) => (
          <div key={idx} className={styles.card}>
            <h4 className={styles.cropName}>{crop.name}</h4>
            <div className={`${styles.healthBar} ${getStatusColor(crop.healthScore)}`}>
              <div
                className={styles.healthFill}
                style={{ width: `${crop.healthScore}%` }}
              />
            </div>
            <p className={styles.status}>{crop.status} ({crop.healthScore}%)</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CropHealthSummary;
