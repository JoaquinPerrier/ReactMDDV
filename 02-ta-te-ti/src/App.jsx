import { useState } from "react";
import "./App.css";

const TURNS = {
  X: "X",
  O: "O",
};

// Componente de cada cuadro
const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;

  const handleClick = () => {
    updateBoard();
  };

  return (
    <div className={className} key={index} onClick={handleClick}>
      {children}
    </div>
  );
};

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);

  const updateBoard = () => {
    turn === TURNS.X ? setTurn(TURNS.O) : setTurn(TURNS.X);
  };

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <section className=" game">
        {board.map((_, index) => {
          return (
            <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
            ></Square>
          );
        })}
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
    </main>
  );
}

export default App;