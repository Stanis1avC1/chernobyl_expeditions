import React from 'react';

import group1 from '../../assets/group1.jpg';
import group2 from '../../assets/group2.jpg';
import headerImage from '../../assets/header.jpg'; 
import styles from './AboutUs.module.css';

function AboutUs() {
  return (
    <section className={styles.aboutUs}>
      <div className={styles.header}>
        <img src={headerImage} alt="Sculpture of firefighters" className={styles.headerImage} />
        <h1 className={styles.title}>Про нас</h1>
      </div>
      <div className={styles.images}>
        <img src={group1} alt="Group photo 1" className={styles.groupImage} />
        <img src={group2} alt="Group photo 2" className={styles.groupImage} />
      </div>
      <div className={styles.content}>
        <p>
            Ми — команда професіоналів, що спеціалізується на організації безпечних та інформативних турів до Чорнобильської зони відчуження. Нашою метою є не лише познайомити вас із цією унікальною місциною, а й розкрити історію катастрофи, її наслідки та відродження природи.
       </p>
        <p>
        Наші гіди — це люди, які мають багаторічний досвід роботи в зоні, вміють цікаво та доступно розповідати про події, які назавжди змінили хід історії. Ми ретельно стежимо за дотриманням усіх правил безпеки, щоб зробити ваш візит максимально комфортним та безпечним.
        </p>
        <p>
        Наша компанія прагне не просто організувати подорож, а створити незабутній досвід, який надихатиме вас ще довгий час. Ми пропонуємо як індивідуальні, так і групові тури, адаптовані під ваші побажання та потреби.
        </p>
        <p>
        Наші тури — це більше, ніж просто подорожі. Це захоплива розповідь про історію людства, помилки та відновлення. Ми пропонуємо ретельно сплановані маршрути, що включають ключові об’єкти зони: покинуті міста Припять та Чорнобиль, саркофаг над реактором №4, Чорнобиль-2 та інші культові місця.
        </p>
        <p>
        Долучайтеся до нас у подорож, яка змінить ваше уявлення про світ та історію!
        </p>
      </div>
    </section>
  );
}

export default AboutUs;
