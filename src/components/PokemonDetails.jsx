import { useState } from "react";

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
  const backgroundColorClass =
    details.types.map((type) => typeColors[type.type.name]).join(" ") ||
    "bg-gray-200";

  const capitalize = (str) => {
    if (!str) return "";
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
  };
  console.log(details);
  return (
    <div
      className={`relative flex flex-col justify-end rounded-xl border-2 shadow-lg ${backgroundColorClass} text-center p-5 w-[400px] mx-auto`}
    >
      <div className="flex items-center">
        <button
          onClick={() => setShow(!show)}
          className="hover:bg-white animate-bounce shadow-gray-400 flex items-center justify-center w-8 h-8 rounded-full bg-slate-200 transition-all border border-gray-300 shadow-sm"
        >
          <span className="text-xs">&#9664;</span>{" "}
        </button>
        {show ? (
          <img
            className="w-[150px] h-[150px] object-contain mb-5 mx-auto border-2 rounded-lg shadow-lg"
            src={details.sprites.other.showdown.front_default}
            alt={details.name}
          />
        ) : (
          <img
            className="w-[150px] h-[150px] object-contain mb-5 mx-auto border-2 rounded-lg shadow-lg"
            src={details.sprites.other.showdown.back_default}
            alt={details.name}
          />
        )}
        <button
          onClick={() => setShow(!show)}
          className="hover:bg-white animate-bounce shadow-gray-400 flex items-center justify-center w-8 h-8 rounded-full bg-slate-200 transition-all border border-gray-300 shadow-sm"
        >
          <span className="text-xs">&#9654;</span>{" "}
        </button>
      </div>
      <div className="flex flex-col gap-4 bg-white rounded-lg p-4 shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800">
          {capitalize(details.name)}
        </h2>
        <div className="text-gray-600">
          <p className="text-lg font-medium">
            Height: {details.height} decimetres
          </p>
          <p className="text-lg font-medium">
            Weight: {details.weight} hectograms
          </p>
        </div>
        <div className="text-gray-600">
          <h3 className="text-lg font-semibold">Types:</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {details.types.map((type, i) => (
              <span
                key={i}
                className={`text-white py-1 px-4 mt-3 rounded-full ${
                  typeColors[type.type.name]
                }`}
              >
                {capitalize(type.type.name)}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetails;
