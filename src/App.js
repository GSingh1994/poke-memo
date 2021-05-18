import { useState, useEffect } from "react";
import Cards from "./Components/Cards";
import "./App.scss";

function App() {
  // const getRandomNums = (num) => Math.floor(Math.random() * num);
  const [pokeData, setPokeData] = useState([]);
  const [totalPokemons, setTotalPokemons] = useState(30);
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

  // let shuffled = pokeData.sort(() => Math.random() - 0.5);
  // const clickedCards = [];

  return (
    <div className="App">
      <main className="container">
        {pokeData.map((pokemon) => (
          <Cards
            key={pokemon.id}
            id={pokemon.id}
            sprite={pokemon.sprites.front_default}
            name={pokemon.forms[0].name}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
