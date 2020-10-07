import React from "react";
import Square from "./Square";

const Board = (props) => {
  const squareArray = props.squares.map((character, i) =>
    <Square key={i} value={character} onClick={() => props.onClick(i)} />
  );
  return (
  <div className="board">
    {squareArray}
  </div>
)};

export default Board;