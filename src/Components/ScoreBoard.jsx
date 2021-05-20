import { useEffect, useRef } from "react";
export default function ScoreBoard({ userScore, gameOver }) {
  const prevScoreRef = useRef();
  useEffect(() => {
    prevScoreRef.current = userScore;
  });
  const prevScore = prevScoreRef.current;

  return (
    <div className="ScoreBoard">
      <button type="button" className="nes-btn is-primary">
        <h2 className="userScore">Score:{userScore}</h2>
        <h2>HighScore:{gameOver ? prevScore : 0}</h2>
      </button>
      <h2>{gameOver ? "GAME OVER" : null}</h2>
    </div>
  );
}
