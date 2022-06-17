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

  useEffect(() => {
    onValue(rankingRef, (snapshot) => {
      const data = snapshot.val();
      setRanking(data.ranking);
    });
  }, [rankingRef]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeDone((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [ranking]);

  const handleClick = () => {
    const data = { userName: 'Player ' + ranking.length, timeDone: timeDone };
    set(rankingRef, {
      ranking: [...ranking, data],
    });
  };

  return (
    <div className='App'>
      <h1>Sudoku</h1>
      <Ranking ranking={ranking} />
      <Table />
      <button disabled={!ranking.length} onClick={handleClick}>
        add record to ranking
      </button>
    </div>
  );
};

export default App;
