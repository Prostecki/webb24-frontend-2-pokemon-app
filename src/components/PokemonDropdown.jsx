function PokemonDropdown({ data, onSelect }) {
  const capitalize = (str) => {
    if (!str) return "";
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
  };
  return (
    <select
      className="border-2 p-2 rounded-md mb-4"
      onChange={(e) => {
        const selected = data.find(
          (pokemon) => pokemon.name === e.target.value
        );
        onSelect(selected);
      }}
    >
      <option value="">--- Select a Pokemon ---</option>
      {data.map((pokemon) => (
        <option key={pokemon.name} value={pokemon.name}>
          {capitalize(pokemon.name)}
        </option>
      ))}
    </select>
  );
}

export default PokemonDropdown;
