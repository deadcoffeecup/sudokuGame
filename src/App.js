import { useState, useEffect } from 'react';
import { ref, set, getDatabase, onValue } from 'firebase/database';

import './App.css';
import { app } from './firebaseConfig';

// import { database as db } from './firebaseConfig';
import Table from './Table';
import { Ranking } from './Ranking';

const App = () => {
  const db = getDatabase(app);
  const [newRecord, setNewRecord] = useState();
  const [ranking, setRanking] = useState([
    { id: 1, userName: 'Fenek', timeDone: 'dzisiaj' },
    { id: 2, userName: 'Zuzzi', timeDone: 'wczoraj' },
  ]);
  const rankingRef = ref(db);
  useEffect(() => {
    onValue(rankingRef, (snapshot) => {
      const data = snapshot.val();
      setNewRecord(data);
    });
    // setRanking((prev) => [...prev, newRecord]);
  }, []);

  const handleClick = () => {
    const data = { id: 3, userName: 'mirek', timeDone: 'nigdy' };
    setRanking((prev) => [...prev, data]);
    set(rankingRef, {
      ranking,
    });
    console.log(ranking);
  };

  return (
    <div className='App'>
      <h1>Sudoku</h1>
      <button onClick={() => handleClick(ranking[ranking.length - 1])}>
        Win!
      </button>
      <Ranking ranking={ranking} />
      <Table />
    </div>
  );
};

export default App;
