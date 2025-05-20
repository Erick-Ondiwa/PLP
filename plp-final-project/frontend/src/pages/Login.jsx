// src/pages/Login.jsx
import React, { useState } from 'react';
import styles from './Login.module.css';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 🔐 You will connect this to Django backend later
    console.log('Login submitted:', formData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h2 className={styles.title}>Crop Monitoring Login</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className={styles.input}
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className={styles.input}
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className={styles.button}>
            Log In
          </button>
        </form>
        <div className={styles.extra}>
          Don't have an account?
          <a href="/register" className={styles.link}>Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
