import React from 'react';

import contactImage from '../../assets/Contacts.jpg';
import facebookIcon from '../../assets/facebook.png';
import gmailIcon from '../../assets/gmail.png';
import instagramIcon from '../../assets/instagram.png';
import telegramIcon from '../../assets/telegram.png';
import whatsappIcon from '../../assets/whatsapp.png';
import styles from './Contacts.module.css';

const Contacts = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactInfo}>
        <div className={styles.contactItem}>
          <img src={whatsappIcon} alt="WhatsApp" className={styles.contactIcon} />
          +380995210251
        </div>
        <div className={styles.contactItem}>
          <img src={instagramIcon} alt="Instagram" className={styles.contactIcon} />
          @Chernobyl Expeditions
        </div>
        <div className={styles.contactItem}>
          <img src={telegramIcon} alt="Telegram" className={styles.contactIcon} />
          @Chernobyl Expeditions
        </div>
        <div className={styles.contactItem}>
          <img src={facebookIcon} alt="Facebook" className={styles.contactIcon} />
          Chernobyl Expeditions
        </div>
        <div className={styles.contactItem}>
          <img src={gmailIcon} alt="Gmail" className={styles.contactIcon} />
          ChernobylExpeditions@gmail.com
        </div>
      </div>
      <img src={contactImage} alt="Chernobyl Expedition" className={styles.contactImage} />
    </div>
  );
};

export default Contacts;
