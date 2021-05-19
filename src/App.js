import { useState, useEffect } from "react";
import Cards from "./Components/Cards";
import "./App.scss";

function App() {
  const [pokeData, setPokeData] = useState([]);
  const [totalPokemons, setTotalPokemons] = useState(30);
  const [clickedCards, setClickedCards] = useState([]);
  const [userScore, setUserScore] = useState(-1);
  const [gameOver, setGameOver] = useState(false);
  useEffect(() => {
    const fetchUrl = async () => {
      for (let i = 1; i < totalPokemons; i += 3) {
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
  useEffect(() => {
    gameOver ? setUserScore(0) : setUserScore((preScore) => (preScore += 1));
  }, [gameOver, clickedCards]);

  return (
    <div className="App">
      <div className="scoreBoard">
        <div className="score">{userScore}</div>
      </div>

      <main className="container">
        {pokeData.map((pokemon) => (
          <Cards
            key={pokemon.id}
            id={pokemon.id}
            sprite={pokemon.sprites.front_default}
            name={pokemon.forms[0].name}
            saveCard={saveCard}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
// let shuffled = pokeData.sort(() => Math.random() - 0.5);
// const getRandomNums = (num) => Math.floor(Math.random() * num);
