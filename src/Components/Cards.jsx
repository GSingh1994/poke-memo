export default function Cards({ sprite, name, id, saveCard }) {
  return (
    <div
      id="Cards"
      className="nes-pointer nes-container with-title is-centered is-rounded"
      onClick={() => saveCard(id)}
    >
      <p id="title" className="title">
        {name}
      </p>
      <img className="sprite" src={sprite} alt="" />
    </div>
  );
}
