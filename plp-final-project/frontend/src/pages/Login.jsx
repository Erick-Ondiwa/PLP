import React from 'react';
import LoginForm from '../components/auth/LoginForm';
import styles from './Login.module.css';

const Login = () => {
  const handleLogin = credentials => {
    // Simulate login logic (e.g., API call)
    console.log('Login attempt with:', credentials);
    alert('Login successful!');
  };

  return (
    <div className={styles.container}>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default Login;

