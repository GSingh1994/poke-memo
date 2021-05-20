export default function Header({ gameOver }) {
  return (
    <header>
      <div className="nes">
        <i className="nes-ash"></i>
        <div className="nes-balloon from-left">Help me find new pokemons</div>
      </div>

      <div className="title">
        <h1>PokeCards</h1>
        <h6>Gotta Catch 'Em All</h6>
      </div>
      <i
        className={
          gameOver ? "vibrate nes-pointer nes-pokeball" : "nes-pokeball"
        }
        onClick={() => window.location.reload()}
      ></i>
    </header>
  );
}
