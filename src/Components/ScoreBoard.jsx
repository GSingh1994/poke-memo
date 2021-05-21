import { useEffect, useRef, useState } from "react";

export default function ScoreBoard({ userScore, gameOver }) {
  const [localScore, setLocalScore] = useState(0);
  useEffect(() => {
    const localStorageTuNum = parseInt(localStorage.getItem("highScore"));
    setLocalScore(localStorageTuNum || 0); //Setting highScore from localStorage if possible

    setHighScore(localScore);
  }, []);

  const [highScore, setHighScore] = useState(0);
  useEffect(() => {
    if (userScore > localScore) {
      setHighScore(userScore);
      localStorage.setItem("highScore", userScore); //set new highScore on gameOver
    }
  }, [gameOver]);

  return (
    <div className="ScoreBoard">
      <button type="button" className="nes-btn is-primary">
        {!gameOver ? (
          <h2 className="userScore">Score:{userScore}</h2>
        ) : (
          <h2 className="gameOver">{gameOver ? "GAME OVER" : null}</h2>
        )}
        <h2>
          HighScore:
          {highScore > localScore ? highScore : localScore || 0}
        </h2>
      </button>
    </div>
  );
}
