export default function Cards({ sprite, name, id, saveCard }) {
  return (
    <div className="Cards" onClick={() => saveCard(id)}>
      <img className="sprites" src={sprite} alt="" />
      <h3>{name}</h3>
    </div>
  );
}
