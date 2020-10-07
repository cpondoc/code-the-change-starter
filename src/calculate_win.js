export function calculateWinner(squares) {

  // Check all top areas
  if (squares[0] !== "" && squares[0] === squares[1] && squares[1] === squares[2]) {
    return squares[0];
  }

  // Check all middle horizontal areas
  else if (squares[3] !== "" && squares[3] === squares[4] && squares[4] === squares[5]) {
    return squares[3];
  }

  // Check all bottom areas
  else if (squares[6] !== "" && squares[6] === squares[7] && squares[7] === squares[8]) {
    return squares[6];
  }

  // Check all left areas
  else if (squares[0] !== "" && squares[0] === squares[3] && squares[3] === squares[6]) {
    return squares[0];
  }

  // Check all middle vertical areas
  else if (squares[1] !== "" && squares[1] === squares[4] && squares[4] === squares[7]) {
    return squares[1];
  }

  // Check all right areas
  else if (squares[2] !== "" && squares[2] === squares[5] && squares[5] === squares[8]) {
    return squares[2];
  }

  // Check left diagonal
  else if (squares[0] !== "" && squares[0] === squares[4] && squares[4] === squares[8]) {
    return squares[0];
  }

  // Check right diagonal
  else if (squares[2] !== "" && squares[2] === squares[4] && squares[4] === squares[6]) {
    return squares[2];
  }

  return null;
}