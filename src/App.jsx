import { useState, useEffect } from "react";
import Cards from "./Components/Cards";
import ScoreBoard from "./Components/ScoreBoard";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import "../node_modules/nes.css/css/nes.min.css";
import "./App.scss";
import loaderGif from "./assets/pika.gif";
import { CSSTransition } from "react-transition-group";

export default function App() {
  const [pokeData, setPokeData] = useState([]);
  const [lastIndex, setLastIndex] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);
  const [userScore, setUserScore] = useState(-1);
  const [gameOver, setGameOver] = useState(false);
  const [cardGrid, setCardGrid] = useState([]);
  const [loader, setLoader] = useState(true);

  const [inProp, setInProp] = useState(false); //inprop for cssTransition

  useEffect(() => {
    const fetchUrl = async () => {
      for (let i = 1; i < 100; i += 1) {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        const data = await response.json();
        setPokeData((preData) => [...preData, data]);
      }
    };
    fetchUrl();
  }, []);

  //taking a slice of pokeData
  useEffect(
    () => setCardGrid(pokeData.slice(lastIndex, lastIndex + 10)),

    [pokeData, clickedCards]
  );
  useEffect(() => {
    const loaderTimer = setTimeout(() => setLoader(false), 1500); //Pikachu gif timer
    return () => clearTimeout(loaderTimer);
  }, []);

  const saveCard = (id) => {
    clickedCards.includes(id)
      ? setGameOver(true)
      : setClickedCards([...clickedCards, id]); //save card's id only if it's unique otherwise GAMEOVER
  };

  useEffect(() => {
    setLastIndex((preIndex) => (preIndex += 1));
    setCardGrid((preCards) => preCards.sort(() => Math.random() - 0.5)); //shuffle gridCard array

    setInProp(!inProp);
    gameOver ? setUserScore(0) : setUserScore((preScore) => (preScore += 1));
  }, [clickedCards]);

  return !loader ? (
    <div className="App">
      <Header gameOver={gameOver} />
      <ScoreBoard userScore={userScore} gameOver={gameOver} />

      <CSSTransition in={inProp} timeout={100} classNames="my-node">
        <main className="container">
          {cardGrid.map((pokemon) => (
            <Cards
              key={pokemon.id}
              id={pokemon.id}
              sprite={pokemon.sprites.front_default}
              name={pokemon.forms[0].name}
              saveCard={saveCard}
              gameOver={gameOver}
            />
          ))}
        </main>
      </CSSTransition>

      <Footer />
    </div>
  ) : (
    <div className="loader">
      <img src={loaderGif} alt="happy-pikachu" />
    </div>
  );
}
