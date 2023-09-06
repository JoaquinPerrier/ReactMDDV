import { WINNER_COMBOS } from "../constants";

export const checkWinnerFrom = (boardToCheck) => {
  // Revisamos las combinaciones, para ver si gano X u O
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[b] === boardToCheck[c]
    ) {
      return boardToCheck[a];
    }
  }
  // Si no hay ganador
  return null;
};

export const checkEndGame = (newBoard) => {
  // Revisamos que no haya mas espacios vacios en el tablero
  return newBoard.every((square) => square !== null);
};
