export default function Loading() {
  const loading =
    "https://www.freeiconspng.com/thumbs/pokeball-png/file-pokeball-png-0.png";
  return (
    <div className="flex justify-center gap-1 items-center">
      <img className="w-10 animate-bounce" src={loading} alt="" />
      <p>Loading...</p>
    </div>
  );
}
