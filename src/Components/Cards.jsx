export default function Cards({ sprite, name, id, saveCard }) {
  return (
    <div className="cards">
      <div
        id="Cards"
        className="nes-pointer nes-container with-title is-centered is-rounded"
        onClick={() => saveCard(id)}
      >
        <p className="title">{name}</p>
        <img className="sprite" src={sprite} alt="" />
      </div>
    </div>
  );
}
