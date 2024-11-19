export default function Loading() {
  return (
    <div className="flex justify-center gap-1 items-center my-5">
      <img
        className="w-10 animate-spin mx-2 rounded-full"
        src="src/assets/loading.svg"
        alt=""
      />
      <p className="text-2xl">Loading...</p>
    </div>
  );
}
