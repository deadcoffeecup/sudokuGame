import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBqrE-YSq1ZXxub1Zpg7mTf7spHoiRxiTE',
  authDomain: 'sudoku-deadcoffeecup.firebaseapp.com',
  databaseURL:
    'https://sudoku-deadcoffeecup-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'sudoku-deadcoffeecup',
  storageBucket: 'sudoku-deadcoffeecup.appspot.com',
  messagingSenderId: '911380682235',
  appId: '1:911380682235:web:c03d751a61e868ed44e75e',
  measurementId: 'G-19XJQ2YH2K',
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
