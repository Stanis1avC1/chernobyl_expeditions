import React from 'react';
import { NavLink } from 'react-router-dom';

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
        <NavLink to="/" className={({ isActive }) => isActive ? styles.activeLink : undefined}>Головна</NavLink>
        <NavLink to="/about-zone" className={({ isActive }) => isActive ? styles.activeLink : undefined}>Про зону</NavLink>
        <NavLink to="/about-us" className={({ isActive }) => isActive ? styles.activeLink : undefined}>Про нас</NavLink> 
        <NavLink to="/tours" className={({ isActive }) => isActive ? styles.activeLink : undefined}>Тури</NavLink>
        <NavLink to="/contacts" className={({ isActive }) => isActive ? styles.activeLink : undefined}>Контакти</NavLink>
      </nav>
      <div className={styles.authButtons}>
        <NavLink to="/login" className={styles.loginButton}>Вхід</NavLink>
        <NavLink to="/register" className={styles.registerButton}>Реєстрація</NavLink>
      </div>
    </header>
  );
}

export default Header;
