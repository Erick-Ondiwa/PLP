import React, { useState } from 'react';
import styles from './Sidebar.module.css';

const DashboardIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    className={styles.menuIcon}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 6h18M3 18h18" />
  </svg>
);

const CropIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    className={styles.menuIcon}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18" />
  </svg>
);

const WeatherIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    className={styles.menuIcon}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a7 7 0 00-7 7c0 4 7 13 7 13s7-9 7-13a7 7 0 00-7-7z" />
  </svg>
);

const ReportsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    className={styles.menuIcon}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-6h6v6M9 7h6" />
  </svg>
);

const SettingsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    className={styles.menuIcon}
  >
    <circle cx="12" cy="12" r="3" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.4 15a7.962 7.962 0 00.6-3 7.962 7.962 0 00-.6-3l2.1-1.8-2-3.4-2.4 1a8.093 8.093 0 00-2.5-1.5l-.4-2.7H10l-.4 2.7a8.093 8.093 0 00-2.5 1.5l-2.4-1-2 3.4 2.1 1.8a7.962 7.962 0 000 6l-2.1 1.8 2 3.4 2.4-1a8.093 8.093 0 002.5 1.5l.4 2.7h3.2l.4-2.7a8.093 8.093 0 002.5-1.5l2.4 1 2-3.4z" />
  </svg>
);

const Sidebar = () => {
  const [active, setActive] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <DashboardIcon /> },
    { id: 'crop-monitoring', label: 'Crop Monitoring', icon: <CropIcon /> },
    { id: 'weather', label: 'Weather Forecast', icon: <WeatherIcon /> },
    { id: 'reports', label: 'Reports', icon: <ReportsIcon /> },
    { id: 'settings', label: 'Settings', icon: <SettingsIcon /> },
  ];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoSection}>
        <span role="img" aria-label="crop">🌱</span> CropMonitor
      </div>

      <nav className={styles.menu}>
        {menuItems.map(({ id, label, icon }) => (
          <div
            key={id}
            className={`${styles.menuItem} ${active === id ? styles.menuItemActive : ''}`}
            onClick={() => setActive(id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter') setActive(id); }}
          >
            {icon}
            {label}
          </div>
        ))}
      </nav>

      <div className={styles.footer}>
        &copy; {new Date().getFullYear()} CropMonitor. All rights reserved.
      </div>
    </aside>
  );
};

export default Sidebar;

