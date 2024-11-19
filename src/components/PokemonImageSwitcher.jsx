export default function PokemonImageSwitcher({
  frontImage,
  backImage,
  show,
  onToggle,
}) {
  return (
    <div className="flex items-center">
      <button
        onClick={onToggle}
        className="flex items-center justify-center w-8 h-8 rounded-full bg-white border border-gray-300 shadow-sm hover:bg-gray-200 transition"
      >
        <span className="text-xs text-center">&#9664;</span>
      </button>
      <img
        className="w-[150px] h-[150px] object-contain mb-5 mx-auto border-2 rounded-lg shadow-lg"
        src={show ? frontImage : backImage}
        alt="Pokemon"
      />
      <button
        onClick={onToggle}
        className="flex items-center justify-center w-8 h-8 rounded-full bg-white border border-gray-300 shadow-sm hover:bg-gray-200 transition"
      >
        <span className="text-xs text-center">&#9654;</span>
      </button>
    </div>
  );
}
