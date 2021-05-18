export default function Cards({ sprite, name, id }) {
  return (
    <div className="Cards" onClick={() => console.log("clickedCards.push(id)")}>
      <img className="sprites" src={sprite} alt="" />
      <h3>{name}</h3>
    </div>
  );
}
