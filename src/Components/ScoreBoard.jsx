export default function ScoreBoard({ userScore, gameOver }) {
  return (
    <div className="ScoreBoard">
      <div className="scoreBoard">
        <div className="score">{userScore}</div>
        <h1>{gameOver ? "GAME OVER" : null}</h1>
      </div>
    </div>
  );
}
