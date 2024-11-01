import React, { useState } from 'react';

import styles from './RegisterForm.module.css';

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleCheckboxChange = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Реєстрація</h2>
      <input
        type="email"
        placeholder="Пошта"
        className={styles.input}
      />
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Пароль"
        className={styles.input}
      />
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Повторити пароль"
        className={styles.input}
      />
      <div className={styles.checkboxContainer}>
        <input
          type="checkbox"
          id="showPassword"
          onChange={handleCheckboxChange}
        />
        <label htmlFor="showPassword">показати пароль</label>
      </div>
      <button className={styles.button}>Зареєструватися</button>
    </div>
  );
};

export default RegisterForm;
