import React from 'react';
import Square from './Square';
class Table extends React.Component {
  constructor() {
    super();
    this.state = {
      squares: [
        // 3, 1, 6, 5, 7, 8, 4, 9, 2, 5, 2, 9, 1, 3, 4, 7, 6, 8, 4, 8, 7, 6, 2, 9,
        // 5, 3, 1, 2, 6, 3, 4, 1, 5, 9, 8, 7, 9, 7, 4, 8, 6, 3, 1, 2, 5, 8, 5, 1,
        // 7, 9, 2, 6, 4, 3, 1, 3, 8, 9, 4, 7, 2, 5, 6, 6, 9, 2, 3, 5, 1, 8, 7, 4,
        // 7, 4, 5, 2, 8, 6, 3, 1, 9,
        //solved one
        3,
        0, 0, 5, 7, 8, 4, 0, 2, 0, 2, 0, 1, 0, 0, 7, 6, 8, 4, 0, 7, 6, 0, 9, 5,
        0, 0, 2, 6, 3, 4, 0, 0, 0, 8, 0, 9, 0, 0, 8, 6, 3, 1, 0, 0, 8, 0, 1, 7,
        0, 0, 6, 0, 0, 1, 0, 8, 0, 4, 0, 2, 0, 0, 6, 9, 2, 3, 0, 1, 8, 0, 4, 7,
        0, 0, 2, 8, 6, 3, 0, 9,
      ],
      message: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.isValid = this.isValid.bind(this);
  }

  isValid() {
    const board = [];

    for (let i = 0; i < 9; i++) {
      board[i] = [];
      board[i] = [...this.state.squares.slice(9 * i, 9 * (i + 1))];
    }
    let isRowsValid = true;
    for (let i = 0; i < 9; i++) {
      isRowsValid = isRowsValid && board[i].length === new Set(board[i]).size;
    }

    for (let i = 0; i < 9; i++) {
      board[i] = [];
      for (let j = 0; j < 9; j++) {
        board[i].push(this.state.squares[i + 9 * j]);
      }
    }
    let isColsValid = true;
    for (let i = 0; i < 9; i++) {
      isColsValid = isColsValid && board[i].length === new Set(board[i]).size;
    }

    if (isRowsValid && isColsValid) {
      this.setState({ message: 'You won!' });
    } else {
      this.setState({ message: 'Keep trying' });
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
        <Square
          key={i}
          value={this.state.squares[i]}
          onChange={(event) => this.handleChange(i, event)}
        />
      );
    }
    return all.map((el) => el);
  }

  render() {
    return (
      <>
        {this.state.message}
        <div className='row'>
          {this.renderSquares(81)}
          <button onClick={this.isValid}>Check!</button>
        </div>
      </>
    );
  }
}
export default Table;
