export default function ButtonStart({ handleStart, start }) {
  return (
    <button
      className="border-2 px-4 py-2 my-5 bg-purple-600 text-white rounded-xl border-hidden hover:bg-slate-600"
      onClick={handleStart}
    >
      {start ? "App running..." : "Start App"}
    </button>
  );
}
