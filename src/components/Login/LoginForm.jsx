import React from 'react';

import styles from './LoginForm.module.css';

function LoginForm() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Вхід</h2>
      <form className={styles.form}>
        <input
          type="email"
          placeholder="Пошта"
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Пароль"
          className={styles.input}
        />
        <div className={styles.checkboxContainer}>
          <input type="checkbox" id="rememberMe" className={styles.checkbox} />
          <label htmlFor="rememberMe" className={styles.label}>
            запамятати пароль
          </label>
        </div>
        <button type="submit" className={styles.button}>Війти</button>
      </form>
    </div>
  );
}

export default LoginForm;
