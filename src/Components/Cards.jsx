export default function Cards({ sprite, name, id, saveCard, gameOver }) {
  return (
    <div
      style={gameOver ? { pointerEvents: "none" } : null} //Stop card selection on gameover
      id="Cards"
      className="nes-pointer nes-container with-title is-centered "
      onClick={() => saveCard(id)}
    >
      <p className="title">{name}</p>
      <img className="sprite" src={sprite} alt="" />
    </div>
  );
}
