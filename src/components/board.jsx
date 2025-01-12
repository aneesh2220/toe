import Square from "./square.jsx";
import "../App.css";
import { useState } from "react";
import { RiRefreshLine } from "react-icons/ri";
import { GiTicTacToe } from "react-icons/gi";


let Board = ({ winer }) => {
  let [boardState, setBoardState] = useState(Array(9).fill(null));
  let [isX, setisX] = useState(true);
  let [winner, setWinner] = useState(null);
  let handleClick = (index) => {
    if (boardState[index] !== null) {
      return;
    }

    let newBoardState = boardState;
    if (isX) {
      newBoardState[index] = "x";
    } else {
      newBoardState[index] = "o";
    }

    setBoardState(newBoardState);
    setisX(!isX);
    checkWin(newBoardState);
  };

  let checkWin = (state) => {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningLines.length; i++) {
      let [a, b, c] = winningLines[i];

      if (state[a] === state[b] && state[a] === state[c] && state[a] !== null) {
        setWinner(state[a]);
        return;
      }
    }
  };

  return (
    <div className="board"> 
      <div className="dashboard">
      <RiRefreshLine className="reset-i"  onClick={() => window.location.reload()}/> 
        <h2>{winner !== null ? `${winner} wins` : ""} 
         </h2>
      </div>
      <div className="board-row">
        <Square value={boardState[0]} onClick={() => handleClick(0)} />
        <Square value={boardState[1]} onClick={() => handleClick(1)} />
        <Square value={boardState[2]} onClick={() => handleClick(2)} />
      </div>

      <div className="board-row">
        <Square value={boardState[3]} onClick={() => handleClick(3)} />
        <Square value={boardState[4]} onClick={() => handleClick(4)} />
        <Square value={boardState[5]} onClick={() => handleClick(5)} />
      </div>

      <div className="board-row">
        <Square value={boardState[6]} onClick={() => handleClick(6)} />
        <Square value={boardState[7]} onClick={() => handleClick(7)} />
        <Square value={boardState[8]} onClick={() => handleClick(8)} />
      </div>
    </div>
  );
};

export default Board;
