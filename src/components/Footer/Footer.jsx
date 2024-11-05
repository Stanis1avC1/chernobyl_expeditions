import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/logo.png';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLogo}>
        <img src={logo} alt="Chernobyl Expeditions Logo" />
      </div>
      <nav className={styles.footerNav}>
        <NavLink to="/about-zone" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink}>Про зону</NavLink>
        <NavLink to="/about-us" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink}>Про нас</NavLink>
        <NavLink to="/tours" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink}>Тури</NavLink>
        <NavLink to="/contacts" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink}>Контакти</NavLink>
      </nav>
    </footer>
  );
}

export default Footer;
