export default function PokemonInfo({ name, height, weight }) {
  const capitalize = (str) =>
    str ? str[0].toUpperCase() + str.slice(1).toLowerCase() : "";

  return (
    <div className="text-gray-600">
      <h2 className="text-2xl font-semibold text-gray-800">
        {capitalize(name)}
      </h2>
      <p className="text-lg font-medium">Height: {height} decimetres</p>
      <p className="text-lg font-medium">Weight: {weight} hectograms</p>
    </div>
  );
}
