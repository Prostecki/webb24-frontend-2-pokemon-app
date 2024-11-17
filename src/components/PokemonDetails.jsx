function PokemonDetails({ details }) {
  console.log(details.sprites.other.dream_world.front_default);
  return (
    <div className="text-center">
      <h2 className="text-xl font-semibold">{details.name}</h2>
      <img
        className="w-48"
        src={details.sprites.other.dream_world.front_default}
        alt={details.name}
      />
      <p>Height: {details.height}</p>
      <p>Weight: {details.weight}</p>
      <div>
        Types:
        {details.types.map((type, i) => (
          <p key={i}>{type.type.name}</p>
        ))}
      </div>
    </div>
  );
}

export default PokemonDetails;
