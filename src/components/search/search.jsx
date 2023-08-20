import styles from './search.module.css';
import { memo } from 'react';
import search_button from '../../images/icons/search_button.svg';

function Search({ inputValue, handleInputValue, handleSubmit }) {

  const handleInputChange = (e) => {
    handleInputValue(e.target.value);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label} htmlFor="city">Введите название населенного пункта</label>
      <div className={styles.container}>
        <input value={inputValue} name='city' className={styles.input}  type="text" onChange={handleInputChange}/>
        <button
        type='submit'
        disabled={!inputValue}
        className={inputValue ? styles.button : styles.buttonDisabled}>
          <img className={styles.buttonIcon} src={search_button} alt="search-button" />
        </button>
      </div>
    </form>
  );
}

export default memo(Search);