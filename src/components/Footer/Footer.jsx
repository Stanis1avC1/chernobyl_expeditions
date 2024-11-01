import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLogo}>
        <img src={logo} alt="Chernobyl Expeditions Logo" />
      </div>
      <nav className={styles.footerNav}>
        <Link to="/about-zone" className={styles.navLink}>Про зону</Link>
        <Link to="/about-us" className={styles.navLink}>Про нас</Link>
        <Link to="/tours" className={styles.navLink}>Тури</Link>
        <Link to="/contacts" className={styles.navLink}>Контакти</Link>
      </nav>
    </footer>
  );
}

export default Footer;
