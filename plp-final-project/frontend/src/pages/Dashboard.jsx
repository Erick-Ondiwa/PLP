import React from 'react';
import styles from './Dashboard.module.css';

import WelcomeBanner from '../components/dashboard/WelcomeBanner';
import QuickLinks from '../components/dashboard/QuickLinks';

import WeatherWidget from '../components/dashboard/widgets/WeatherWidget';
import SensorOverview from '../components/dashboard/widgets/SensorOverview';
import PestAlert from '../components/dashboard/widgets/PestAlert';
import CropHealthSummary from '../components/dashboard/widgets/CropHealthSummary';

// import NotificationsPanel from '../components/dashboard/NotificationsPanel';
// import RecentActivity from '../components/dashboard/RecentActivity';

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <WelcomeBanner />
      <QuickLinks />

      <div className={styles.widgetGrid}>
        <WeatherWidget />
        <SensorOverview />
        <PestAlert />
        <CropHealthSummary />
      </div>

      {/* <NotificationsPanel />
      <RecentActivity /> */}
    </div>
  );
};

export default Dashboard;
