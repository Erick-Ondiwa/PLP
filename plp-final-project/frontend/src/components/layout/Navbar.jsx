import React from 'react';
import styles from './Navbar.module.css';

// Use your preferred icons, here I use simple SVG inline for demo
const BellIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="20"
    height="20"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
    />
  </svg>
);

const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="24"
    height="24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5.121 17.804A13.937 13.937 0 0112 15c2.485 0 4.807.68 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <span role="img" aria-label="crop">🌾</span> CropMonitor
      </div>

      <div className={styles.navRight}>
        <button className={styles.iconButton} aria-label="Notifications">
          <BellIcon />
          <span className={styles.notificationDot} />
        </button>

        <div className={styles.userProfile} title="User Profile">
          <UserIcon />
          <span className={styles.userName}>Erick</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
