import React, { useState } from "react";
import { calculateWinner } from "../calculate_win";
import Board from "./Board";

const Game = () => {

  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([['', '', '', '', '', '', '', '', '']]);

  var currentWinner = calculateWinner(history[stepNumber]);
  var nextMove = xIsNext ? 'X' : 'O';
  console.log(history);

  let handleClick = (index) => {
    if (currentWinner === null) {
      var oldBoard = ['', '', '', '', '', '', '', '', ''];
      for (var i = 0; i < history[stepNumber].length; i++) {
        oldBoard[i] = history[stepNumber][i];
      }
      oldBoard[index] = nextMove;
      history.push(oldBoard);
      setHistory(history);
      setXIsNext(!xIsNext);
      setStepNumber(stepNumber + 1);

    }
  }

  let jumpTo = (step) => {
    if (step === 0) {
      setHistory([['', '', '', '', '', '', '', '', '']]);
      setXIsNext(true);
      setStepNumber(0);
    }
    else {
      var newHistory = history.slice(0, step + 1);
      console.log(newHistory);
      setHistory(newHistory)
      if (step % 2 === 0) {
        setXIsNext(true);
      } 
      else {
        setXIsNext(false);
      }
      setStepNumber(step);
    }
  }

  let renderMoves = () => {
    const historyButtons = history.map((result, i) => {

      if (i !== 0) {
        return (<>
          <button className="start" onClick={() => jumpTo(i)}>Go to move #{i}</button>
          <br />
          <br />
           </>);
      }
      else {
        return (<>
        <button className="start" onClick={() => jumpTo(0)}>Go to Start</button>
        <br />
        <br />
        </>)
      }});
    return historyButtons;
    
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
      <Board squares={history[stepNumber]} onClick={handleClick}/>
      <div className='info-wrapper'>
          <div>
          <h3>History</h3>
          <br />
          {renderMoves()}
          </div>
          <h3>{result()}</h3>
      </div>
  </>
  );
};

export default Game;
