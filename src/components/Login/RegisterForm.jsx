import React, { useState } from 'react';
import { useRegister } from './hooks/useRegister';
import styles from './RegisterForm.module.css';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { register, error, loading } = useRegister();

  const handleCheckboxChange = () => setShowPassword(!showPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      register(email, password);
    } else {
      alert('Паролі не збігаються');
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Реєстрація</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Пошта"
          className={styles.input}
          required
        />
        <input
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Пароль"
          className={styles.input}
          required
        />
        <input
          type={showPassword ? 'text' : 'password'}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Повторити пароль"
          className={styles.input}
          required
        />
        <div className={styles.checkboxContainer}>
          <input type="checkbox" id="showPassword" onChange={handleCheckboxChange} />
          <label htmlFor="showPassword">Показати пароль</label>
        </div>
        <button type="submit" disabled={loading} className={styles.button}>
          {loading ? 'Завантаження...' : 'Зареєструватися'}
        </button>
        {error && <div className={styles.errorMessage}>{error}</div>}
      </form>
    </div>
  );
};

export default RegisterForm;
