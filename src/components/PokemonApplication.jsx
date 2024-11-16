import { useEffect, useState } from "react";
import Pokemon from "./Pokemon";

export default function PokemonApplication() {
  const [data, setData] = useState(null);
  const [pokemons, setPokemons] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151"
        );
        if (!response.ok) {
          throw new Error("Response status", response.status);
        }
        const json = await response.json();
        console.log(json);
        setData(json.results);
      } catch (error) {
        console.error(error.message);
      }
    };
    getData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {data.map((item, i) => (
        <Pokemon key={i} item={item} />
      ))}
    </div>
  );
}
