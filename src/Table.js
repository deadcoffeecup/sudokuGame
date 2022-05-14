import React from 'react';
import Square from './Square';

class Table extends React.Component {
  constructor() {
    super();
    this.state = {
      squares: Array(81).fill(0),
    };
    this.handleChange = this.handleChange.bind(this);
    this.solve = this.solve.bind(this);
  }
  solve() {
    let board = [
      // [3, 1, 6, 5, 7, 8, 4, 9, 2],
      // [5, 2, 9, 1, 3, 4, 7, 6, 8],
      // [4, 8, 7, 6, 2, 9, 5, 3, 1],
      // [2, 6, 3, 4, 1, 5, 9, 8, 7],
      // [9, 7, 4, 8, 6, 3, 1, 2, 5],
      // [8, 5, 1, 7, 9, 2, 6, 4, 3],
      // [1, 3, 8, 9, 4, 7, 2, 5, 6],
      // [6, 9, 2, 3, 5, 1, 8, 7, 4],
      // [7, 4, 5, 2, 8, 6, 3, 1, 9],
    ];
    for (let i = 0; i < 9; i++) {
      board[i] = [];
      board[i] = [...this.state.squares.slice(9 * i, 9 + 9 * i)];
    }
    let isRowsValid = 0;
    let isColsValid = 0;
    for (let i = 0; i < 9; i++) {
      if (board[i].reduce((a, b) => a + b) === 45) isRowsValid = 1;
    }
    let valueCols = 0;
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        valueCols = valueCols + board[j][i];
      }
      if (valueCols === 45) isColsValid++;
      valueCols = 0;
    }
    isColsValid = !isColsValid ? 0 : 1;
    if (isRowsValid === 1 && isColsValid === 1) {
      alert('Udało się!');
    } else {
      alert('Próbuj dalej!');
    }
  }

  handleChange(i, event) {
    this.setState((prev) => ({
      squares: [
        ...prev.squares.slice(0, i),
        (prev.squares[i] = +event.target.value),
        ...prev.squares.slice(i + 1, prev.squares.length),
      ],
    }));
  }
  renderSquares(i) {
    let all = [];
    for (let i = 0; i < 81; i++) {
      all.push(
        <Square key={i} onChange={(event) => this.handleChange(i, event)} />
      );
    }
    return all.map((el) => el);
  }

  render() {
    return (
      <div className='row'>
        {this.renderSquares(81)}

        <button onClick={this.solve}>Check!</button>
      </div>
    );
  }
}
export default Table;
