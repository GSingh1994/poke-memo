import { useState, useEffect } from "react";
import Cards from "./Components/Cards";
import ScoreBoard from "./Components/ScoreBoard";
import Footer from "./Components/Footer";
import "../node_modules/nes.css/css/nes.min.css";
import "./App.scss";

function App() {
  const [pokeData, setPokeData] = useState([]);
  const [lastIndex, setLastIndex] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);
  const [userScore, setUserScore] = useState(-1);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const fetchUrl = async () => {
      for (let i = 1; i < 100; i += 3) {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        const data = await response.json();
        setPokeData((preData) => [...preData, data]);
      }
    };
    fetchUrl();
  }, []);

  //save card's id only if it's unique otherwise GAMEOVER
  const saveCard = (id) => {
    clickedCards.includes(id)
      ? setGameOver(true)
      : setClickedCards([...clickedCards, id]);
  };

  const pokeList = pokeData
    .slice(lastIndex, lastIndex + 8) //get a slice of some old and some new data
    .sort(() => Math.random() - 0.5); //Shuffle cards

  useEffect(() => {
    setLastIndex((preIndex) => (preIndex += 1));
    gameOver ? setUserScore(0) : setUserScore((preScore) => (preScore += 1));
  }, [gameOver, clickedCards]);

  return (
    <div className="App">
      <header>
        <h1>PokeCards</h1>
        <h6>Gotta Catch 'Em All</h6>
        <i className="nes-ash"></i>
        <i className="nes-pokeball"></i>
      </header>
      <ScoreBoard userScore={userScore} gameOver={gameOver} />
      <main className="container">
        {pokeList.map((pokemon) => (
          <Cards
            key={pokemon.id}
            id={pokemon.id}
            sprite={pokemon.sprites.front_default}
            name={pokemon.forms[0].name}
            saveCard={saveCard}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;
