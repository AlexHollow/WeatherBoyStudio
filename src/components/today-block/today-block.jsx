import styles from './today-block.module.css';
import { memo } from 'react';
import close from '../../images/icons/close.svg'
import more from '../../images/icons/more.svg'
 
function TodayBlock({ handleActive, weekBlockState, data }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.city}>{data.location.name}</h2>
      <h2 className={styles.country}>{data.location.country}</h2>

      <div className={styles.weather}>
        <img className={styles.icon} src={data.current.condition.icon} alt="icon" />
        <p className={styles.date}>{data.current.last_updated.split(' ')[0]}</p>
        <p className={styles.temperature}>{data.current.temp_c}&deg;C</p>
      </div>

      <button
        onClick={() => handleActive(!weekBlockState)}
        disabled={!data}
        className={data ? styles.button : styles.buttonDisabled}
      >{weekBlockState ?
        <img className={styles.buttonIcon} src={close} alt='icon' />
        : <img className={styles.buttonIcon} src={more} alt='icon' />}
      </button>
    </div>
  );
}

export default memo(TodayBlock);