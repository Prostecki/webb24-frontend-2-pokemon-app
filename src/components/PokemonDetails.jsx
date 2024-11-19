import { useState } from "react";
import PokemonImageSwitcher from "./PokemonImageSwitcher";
import PokemonInfo from "./Pokemoninfo";
import PokemonTypes from "./Pokemontypes";

function PokemonDetails({ details }) {
  const [show, setShow] = useState(false);
  const typeColors = {
    fire: "bg-red-500",
    water: "bg-blue-500",
    grass: "bg-green-500",
    electric: "bg-yellow-500",
    bug: "bg-green-700",
    fairy: "bg-pink-500",
    dragon: "bg-purple-500",
    poison: "bg-purple-700",
    ghost: "bg-indigo-500",
    normal: "bg-gray-500",
    fighting: "bg-orange-500",
    psychic: "bg-pink-700",
    rock: "bg-gray-600",
    ice: "bg-sky-300",
    dark: "bg-gray-800",
    steel: "bg-gray-400",
    flying: "bg-sky-500",
    ground: "bg-yellow-900",
  };

  const mainType = details.types[0]?.type?.name || "normal";
  const containerColor = typeColors[mainType] || "bg-gray-200";
  return (
    <div
      className={`relative flex flex-col justify-end rounded-xl border-2 shadow-lg bg-gray-200 text-center p-5 w-[400px] mx-auto ${containerColor}`}
    >
      <PokemonImageSwitcher
        frontImage={details.sprites.other.showdown.front_default}
        backImage={details.sprites.other.showdown.back_default}
        show={show}
        onToggle={() => setShow(!show)}
      />
      <div className="flex flex-col gap-4 bg-white rounded-lg p-4 shadow-lg">
        <PokemonInfo
          name={details.name}
          height={details.height}
          weight={details.weight}
        />
        <PokemonTypes types={details.types} typeColors={typeColors} />
      </div>
    </div>
  );
}

export default PokemonDetails;
