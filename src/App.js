import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [pokeUrl, setPokeUrl] = useState([]);
  const [pokeData, setPokeData] = useState([]);
  useEffect(() => {
    const fetchUrl = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=5");
      const urls = await response.json();
      setPokeUrl(urls.results.map((poke) => poke.url));
    };
    fetchUrl();
  }, []);

  // useEffect(()=>{
  //   const fetchData=async()=>{
  //     const response=await
  //   }
  // },[])

  return (
    <div className="App">
      <main className="container">
        {/* {data.map((got) => (
          <img key={got.id} src={got.imageUrl} alt={got.title} />
        ))} */}
      </main>
    </div>
  );
}

export default App;
