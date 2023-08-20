import styles from './app.module.css';
import logo from '../../images/icons/LOGO.svg'
import TodayBlock from '../today-block/today-block';
import WeekBlock from '../week-block/week-block';
import Search from '../search/search';
import { Api } from '../../services/api/api';
import { useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

function App() {

  const api = new Api();

  const initState = {
    isLoading: false,
    data: null,
  };

  const nodeRef = useRef(null);

  const [state, setState] = useState(initState);
  const [value, setValue] = useState('');
  const [error, setError] = useState({
    error: '',
    isActive: false,
  });

  const [isWeekInfoActive, setWeekInfoActive] = useState(false);

  const handleError = (e) => {
    setError({ error: e, isActive: true });

    setTimeout(() => {
      setError({ error: '', isActive: false });
    }, 5000)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    setState({ ...state, isLoading: true })

    api.getData(value)
      // .then(res => console.log(res))
      .then(res => {
        setState({ isLoading: false, data: res });
        setValue('');
      })
      .catch(e => handleError(e))
  }

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1 className={styles.title}>Weather Boy Studio</h1>
        <img className={styles.logo} src={logo} alt="logo" />
        {
          error.isActive && <p className={styles.error}>{error.error}! Возможно, Вы неверно указали название населенного пункта.</p>
        }
      </header>
      <CSSTransition in={Boolean(state.data)} nodeRef={nodeRef} timeout={300} classNames="my-node" unmountOnExit>
        <main ref={nodeRef} className={styles.container}>
          <TodayBlock handleActive={setWeekInfoActive} weekBlockState={isWeekInfoActive} data={state.data}></TodayBlock>
          <WeekBlock activeState={isWeekInfoActive} data={state.data}></WeekBlock>
        </main>
      </CSSTransition>
      <Search inputValue={value} handleInputValue={setValue} handleSubmit={handleSubmit}/>
    </div>
  );
}

export default App;
