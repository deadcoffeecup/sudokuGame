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
    const interval = setInterval(() => {
      onValue(rankingRef, (snapshot) => {
        const data = snapshot.val();
        setRanking(data.ranking);
      });
      return () => {
        clearInterval(interval);
      };
    }, 5000);
    // setRanking((prev) => [...prev, newRecord]);
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
    const data = { userName: 'mirek' + timeDone, timeDone: timeDone };
    setRanking((prev) => [...prev, data]);
    set(rankingRef, {
      ranking,
    });
  };

  return (
    <div className='App'>
      <h1>Sudoku</h1>
      <button onClick={handleClick}>Win!</button>
      <Ranking ranking={ranking} />
      <Table />
    </div>
  );
};

export default App;
