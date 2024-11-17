export default function ButtonStart({ handleStart, start }) {
  return (
    <button
      className={`transition-all duration-300 transform px-6 py-3 my-5 text-white rounded-xl border-2 ${
        start
          ? "bg-green-500 hover:bg-green-400"
          : "bg-purple-600 hover:bg-purple-500"
      } border-transparent hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50`}
      onClick={handleStart}
    >
      {start ? "App running..." : "Start App"}
    </button>
  );
}
