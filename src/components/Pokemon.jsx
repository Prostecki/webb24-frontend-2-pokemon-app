export default function Pokemon({ item }) {
  return (
    <div className="w-48 border-2 m-10 text-center p-5 rounded-xl">
      <p>{item.name}</p>
    </div>
  );
}
