import { useState, useEffect } from "react";
import Cards from "./Components/Cards";
import ScoreBoard from "./Components/ScoreBoard";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import "../node_modules/nes.css/css/nes.min.css";
import "./App.scss";
import loaderGif from "./assets/pika.gif";

function App() {
  const [pokeData, setPokeData] = useState([]);
  const [lastIndex, setLastIndex] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);
  const [userScore, setUserScore] = useState(-1);
  const [gameOver, setGameOver] = useState(false);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const fetchUrl = async () => {
      for (let i = 1; i < 100; i += 3) {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        const data = await response.json();
        setPokeData((preData) => [...preData, data]);
      }
    };
    fetchUrl();
    const loaderTimer = setTimeout(() => setLoader(false), 1000);
    return () => clearTimeout(loaderTimer);
  }, []);

  //save card's id only if it's unique otherwise GAMEOVER
  const saveCard = (id) => {
    clickedCards.includes(id)
      ? setGameOver(true)
      : setClickedCards([...clickedCards, id]);
  };

  let pokeList = pokeData
    .slice(lastIndex, lastIndex + 8) //get a slice of some old and some new data
    .sort(() => Math.random() - 0.5); //Shuffle cards

  useEffect(() => {
    pokeList = pokeData
      .slice(lastIndex, lastIndex + 8) //get a slice of some old and some new data
      .sort(() => Math.random() - 0.5);
    setLastIndex((preIndex) => (preIndex += 1));
    gameOver ? setUserScore(0) : setUserScore((preScore) => (preScore += 1));
  }, [gameOver, clickedCards]);

  return !loader ? (
    <div className="App">
      <Header gameOver={gameOver} />
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
  ) : (
    <div className="loader">
      <img src={loaderGif} alt="" />
    </div>
  );
}

export default App;

// let shuffled = pokeData
//   .slice(lastIndex, lastIndex + 8)
//   .map((a) => ({ sort: Math.random(), value: a }))
//   .sort((a, b) => a.sort - b.sort)
//   .map((a) => a.value);
// function shuffleCards(a) {
//   const pokeList = a.slice(lastIndex, lastIndex + 8);
//   for (let i = pokeList.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [pokeList[i], pokeList[j]] = [pokeList[j], pokeList[i]];
//   }
//   return pokeList;
// }
