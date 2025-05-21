import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './LoginForm.module.css';

const LoginForm = ({ onLogin }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      setError('Both email and password are required');
      return;
    }

    setError('');
    onLogin(formData);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Login to Your Account</h2>

      {error && <p className={styles.error}>{error}</p>}

      <div className={styles.formGroup}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />
      </div>

      <button type="submit" className={styles.loginButton}>Login</button>

      <p style={{ textAlign: 'center', marginTop: '1rem' }}>
        Don&apos;t have an account?{' '}
        <Link to="/register" style={{ color: '#2980b9', textDecoration: 'none', fontWeight: '600' }}>
          Register
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;


// import React, { useState } from 'react';
// import styles from './LoginForm.module.css';

// const LoginForm = ({ onLogin }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = e => {
//     e.preventDefault();
//     onLogin({ email, password });
//   };

//   return (
//     <form className={styles.form} onSubmit={handleSubmit}>
//       <h2 className={styles.title}>Login</h2>

//       <div className={styles.formGroup}>
//         <label>Email</label>
//         <input
//           type="email"
//           required
//           value={email}
//           onChange={e => setEmail(e.target.value)}
//           placeholder="your@email.com"
//         />
//       </div>

//       <div className={styles.formGroup}>
//         <label>Password</label>
//         <input
//           type="password"
//           required
//           value={password}
//           onChange={e => setPassword(e.target.value)}
//           placeholder="••••••••"
//         />
//       </div>

//       <button type="submit" className={styles.loginButton}>Log In</button>
//     </form>
//   );
// };

// export default LoginForm;
