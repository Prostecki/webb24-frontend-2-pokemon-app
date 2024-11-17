import { useEffect, useState } from "react";

import PokemonDropdown from "./PokemonDropdown";
import PokemonDetails from "./PokemonDetails";
import Loading from "./Loading";

export default function PokemonApplication() {
  const [data, setData] = useState(null); //pokemons list
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [pokemonDetails, setPokemonDetails] = useState(null); // details of choosen pokemon
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
        setData(json.results.sort((a, b) => (a.name > b.name ? 1 : -1)));
      } catch (error) {
        console.error(error.message);
      }
    };
    setTimeout(() => {
      getData();
    }, 1500);
  }, []);

  useEffect(() => {
    if (selectedPokemon) {
      const fetchDetails = async () => {
        try {
          const response = await fetch(selectedPokemon.url);
          const details = await response.json();
          setPokemonDetails(details);
        } catch (error) {
          console.error(error.message);
        }
      };
      fetchDetails();
    }
  }, [selectedPokemon]);

  if (!data) {
    return <Loading />;
  }
  return (
    <div className=" flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Select a Pokemon</h1>
      <PokemonDropdown data={data} onSelect={setSelectedPokemon} />
      {pokemonDetails && <PokemonDetails details={pokemonDetails} />}
    </div>
  );
}
