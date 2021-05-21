import { useEffect, useRef } from "react";
export default function ScoreBoard({ userScore, gameOver }) {
  const prevScoreRef = useRef();
  useEffect(() => {
    prevScoreRef.current = userScore;
  });
  const prevScore = prevScoreRef.current;

  const localScore = localStorage.getItem("highScore");

  useEffect(() => {
    localStorage.setItem("highScore", prevScore);
  }, [gameOver]);

  console.log(prevScore, localStorage);
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
          {/* {gameOver ? prevScore : localScore !== "undefined" ? localScore : 0} */}
          {gameOver && prevScore > localScore
            ? prevScore
            : localScore !== "undefined"
            ? localScore
            : 0}
        </h2>
      </button>
    </div>
  );
}
