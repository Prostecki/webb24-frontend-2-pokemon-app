function PokemonDetails({ details }) {
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
  };
  const backgroundColorClass =
    details.types.map((type) => typeColors[type.type.name]).join(" ") ||
    "bg-gray-200";
  console.log(details);
  return (
    <div
      className={`relative flex flex-col justify-end border-[1px] rounded-md shadow-xl border-black text-center p-0 h-[500px] w-[500px] ${backgroundColorClass}`}
    >
      <img
        className="w-[200px] object-contain mb-4 absolute top-10 left-40"
        src={details.sprites.other["official-artwork"].front_default}
        alt={details.name}
      />
      <div className="h-[350px] rounded-t-3xl box-border flex flex-col justify-end gap-5 bg-white rounded">
        <h2 className="text-xl font-semibold">{details.name}</h2>
        <p>Height: {details.height}</p>
        <p>Weight: {details.weight}</p>
        <div>
          Types:
          {details.types.map((type, i) => (
            <p key={i}>{type.type.name}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PokemonDetails;
