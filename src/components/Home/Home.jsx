import React from 'react';

import homeImage from '../../assets/home.jpg';
import phoneIcon from '../../assets/phoneIcon.jpg';
import pripyatImage from '../../assets/pripyatImage.jpg';
import member1 from '../../assets/teamMember1.jpg';
import member2 from '../../assets/teamMember2.jpg';
import member3 from '../../assets/teamMember3.jpg';
import member4 from '../../assets/teamMember4.jpg';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      {/* Банер */}
      <div className={styles.banner}>
        <img src={homeImage} alt="Home" className={styles.bannerImage} />
        <div className={styles.bannerOverlay}>
          <div className={styles.tourOption}>
            <p className={styles.tourText}>Одноденні</p>
          </div>
          <div className={styles.tourOption}>
            <p className={styles.tourText}>Приватні</p>
          </div>
          <div className={styles.tourOption}>
            <p className={styles.tourText}>Групові</p>
          </div>
        </div>
      </div>

      {/* Статистика */}
      <div className={styles.statistics}>
        <div className={styles.statItem}>
          <p className={styles.statNumber}>99999</p>
          <p>туристів в рік</p>
        </div>
        <div className={styles.statImageContainer}>
          <img src={phoneIcon} alt="Phone Icon" className={styles.statImage} />
          <p className={styles.statNumber}>1</p>
          <p>з екстремальних місць планети</p>
        </div>
        <div className={styles.statItem}>
          <p className={styles.statNumber}>100</p>
          <p>% безпечно та легально</p>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src={pripyatImage} alt="Pripyat" className={styles.pripyatImage} />
      </div>

      {/*Команда*/}
      <div className={styles.team}>
        <h2>Наша Команда</h2>
        <div className={styles.teamMembers}>
          <div className={styles.teamMember}>
            <img src={member1} alt="Команда 1" className={styles.teamImage} />
          </div>
          <div className={styles.teamMember}>
            <img src={member2} alt="Команда 2" className={styles.teamImage} />
          </div>
          <div className={styles.teamMember}>
            <img src={member3} alt="Команда 3" className={styles.teamImage} />
          </div>
          <div className={styles.teamMember}>
            <img src={member4} alt="Команда 4" className={styles.teamImage} />
          </div>
        </div>
        <button className={styles.moreButton}>Більше про нас</button>
      </div>
    </div>
  );
};

export default Home;
