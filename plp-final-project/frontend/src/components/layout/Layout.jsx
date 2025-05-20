import React from 'react';
import Navbar from '../layout/Navbar';
import Sidebar from '../layout/Sidebar';
import Footer from '../layout/Footer';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.mainContentWrapper}>
        <Sidebar />
        <main className={styles.contentArea}>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

