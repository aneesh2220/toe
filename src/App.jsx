import Board from "./components/board.jsx";
import { GiTicTacToe } from "react-icons/gi";

function App() {
  return (
<div className="App">
  <header>
    <h2>Tic Tac Toe </h2>
    <GiTicTacToe className="h-icon"/> 
  </header>
  <div className="Body">
  <Board/>


  </div>

</div>
  );
}

export default App;
