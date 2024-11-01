import React from 'react';

import combinedImage from '../../assets/combined.png';
import styles from './TourInfo.module.css';

const toursData = [
  { title: "Одноденна екскурсія в Чорнобиль", style: { top: '10%', left: '10%' } },
  { title: "Дводенна екскурсія в Чорнобиль", style: { top: '10%', right: '10%' } },
  { title: "Індивідуальна екскурсія в Чорнобиль", style: { bottom: '10%', left: '10%' } },
  { title: "Авіатур в Чорнобильську зону", style: { bottom: '10%', right: '10%' } }
];

const ToursInfo = () => {
  return (
    <div className={styles.tourCard}>
      <img src={combinedImage} alt="Tours" className={styles.tourImage} />
      {toursData.map((tour, index) => (
        <div key={index} className={styles.overlay} style={tour.style}>
          {tour.title}
        </div>
      ))}
    </div>
  );
};

export default ToursInfo;
