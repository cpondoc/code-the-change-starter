import React, { useState } from "react";
import { calculateWinner } from "../calculate_win";
import Board from "./Board";

const Game = () => {

  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  var currentWinner = calculateWinner(board);
  var nextMove = xIsNext ? 'X' : 'O';

  let handleClick = (index) => {
    if (currentWinner === null) {
      const newBoard = [];
      for (var i = 0; i < board.length; i++) {
          newBoard.push(board[i]);
      }
      if (newBoard[index] === '') {
          newBoard[index] = nextMove;
          setBoard(newBoard);
          setXIsNext(!xIsNext);
          setStepNumber(stepNumber + 1);
      }
    }
  }

  let jumpToStart = () =>
  {
    const newBoard = ['', '', '', '', '', '', '', '', ''];
    setBoard(newBoard);
    setXIsNext(true);
    setStepNumber(0);
  }

  let result = () => {
    if (currentWinner === 'X' || currentWinner === 'O') {
      return "Winner: " + currentWinner;
    }
    else if (currentWinner === null && stepNumber === 9) {
      return "Tie Game!";
    }
    return "Next Player: " + nextMove;
  }

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <Board squares={board} onClick={handleClick}/>
      <div className='info-wrapper'>
          <div>
            <button id="start" onClick={jumpToStart}>Go to Start</button>
          </div>
          <h3>{result()}</h3>
      </div>
  </>
  );
};

export default Game;
