import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const getRandomNums = (num) => Math.floor(Math.random() * num);
  const [pokeData, setPokeData] = useState([]);
  const [totalPokemons, setTotalPokemons] = useState(40);
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

  return (
    <div className="App">
      <main className="container">
        {pokeData.map((poke, i) => (
          <img key={i} src={poke.sprites.front_default} alt="#" />
        ))}
      </main>
    </div>
  );
}

export default App;
