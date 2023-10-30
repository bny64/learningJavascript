import React, { useState } from "react";
import Board from "./Board";

const Game = () => {
  console.log("game!");
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  let currentSquares = history[currentMove];

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const moves = history.map((square, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <>
        <li key={`${move}`}>
          <button onClick={() => jumpTo(move)}>{description}</button>
        </li>
      </>
    );
  });

  const jumpTo = (nextMove) => {
    setCurrentMove(nextMove);
  };

  return (
    <>
      <div className="game">
        <div className="game-board">
          <Board
            squares={currentSquares}
            onPlay={handlePlay}
            xIsNext={xIsNext}
          />
        </div>
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </>
  );
};

export default Game;
