import { useState, useEffect } from 'react';
import { ref, set, getDatabase, onValue } from 'firebase/database';

import './App.css';
import { app } from './firebaseConfig';

import Table from './Table';
import { Ranking } from './Ranking';

const App = () => {
  const db = getDatabase(app);
  const rankingRef = ref(db);

  const [timeDone, setTimeDone] = useState(0);
  const [ranking, setRanking] = useState([]);

  const getData = () => {
    onValue(rankingRef, (snapshot) => {
      const data = snapshot.val();
      setRanking(data.ranking);
    });
  };

  useEffect(() => {
    getData();
    const interval = setInterval(() => {
      getData();
      return () => {
        clearInterval(interval);
      };
    }, 10000);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeDone((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [ranking]);

  const handleClick = () => {
    const data = { userName: 'Gracz ' + timeDone, timeDone: timeDone };
    set(rankingRef, {
      ranking: [...ranking, data],
    });
  };

  return (
    <div className='App'>
      <h1>Sudoku</h1>
      <button disabled={!ranking.length} onClick={handleClick}>
        Win!
      </button>
      <Ranking ranking={ranking} />
      <Table />
    </div>
  );
};

export default App;
