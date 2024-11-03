import React, { useState } from 'react';
import { useLogin } from './hooks/useLogin'; 
import styles from './LoginForm.module.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, loading } = useLogin(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password); 
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.title}>Вхід</div>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Електронна адреса" 
            className={styles.inputField}
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Пароль"
            className={styles.inputField}
            required
          />
          <button
            type="submit"
            disabled={loading}
            className={styles.button}
          >
            {loading ? 'Завантаження...' : 'Увійти'}
          </button>
          {error && <div className={styles.errorMessage}>{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
