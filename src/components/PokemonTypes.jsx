export default function PokemonTypes({ types, typeColors }) {
  console.log(typeColors);
  const capitalize = (str) =>
    str ? str[0].toUpperCase() + str.slice(1).toLowerCase() : "";

  return (
    <div className="">
      <h3 className="text-lg font-semibold">Types:</h3>
      <div className="flex flex-wrap gap-2 justify-center">
        {types.map((type, i) => (
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
  );
}
