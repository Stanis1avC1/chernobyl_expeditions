import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png'; 
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Chernobyl Expeditions Logo" />
        <span>Chernobyl Expeditions</span>
      </div>
      <nav className={styles.navMenu}>
        <Link to="/">Головна</Link>
        <Link to="/about-zone">Про зону</Link>
        <Link to="/about-us">Про нас</Link> 
        <Link to="/tours">Тури</Link>
        <Link to="/contacts">Контакти</Link>
      </nav>
      <div className={styles.authButtons}>
        <Link to="/login" className={styles.loginButton}>Вхід</Link>
        <Link to="/register" className={styles.registerButton}>Реєстрація</Link>
      </div>
    </header>
  );
}

export default Header;
