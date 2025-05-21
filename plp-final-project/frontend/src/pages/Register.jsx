import React from 'react';
import RegisterForm from '../components/auth/RegisterForm';
import styles from './Register.module.css';

const Register = () => {
  const handleRegister = (formData) => {
    // Future: Send to backend API
    console.log('Registering user:', formData);
  };

  return (
    <div className={styles.container}>
      <RegisterForm onRegister={handleRegister} />
    </div>
  );
};

export default Register;
