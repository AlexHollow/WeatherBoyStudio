import styles from './week-block.module.css';
import { memo } from 'react';
import Card from '../card/card';

function WeekBlock({ activeState, data }) {
  return (
    activeState && <div className={styles.container}>
      <ul className={styles.list}>
        {
          data.forecast.forecastday.map((day, index) => {
            return (
              <li className={styles.listItem} key={index}>
                <Card info={day} />
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default memo(WeekBlock);