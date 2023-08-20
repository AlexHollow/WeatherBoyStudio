import styles from './card.module.css';
import { memo } from 'react';

function Card({ info }) {
  return (
    <div className={styles.container}>
      <p className={styles.date}>{info.date}</p>
      <img className={styles.icon} src={info.day.condition.icon} alt="icon" />
      <p className={styles.temperature}>{`Max: ${info.day.maxtemp_c}`}&deg;C</p>
      <p className={styles.temperature}>{`Avg: ${info.day.avgtemp_c}`}&deg;C</p>
      <p className={styles.temperature}>{`Min: ${info.day.mintemp_c}`}&deg;C</p>
    </div>
  );
}

export default memo(Card);