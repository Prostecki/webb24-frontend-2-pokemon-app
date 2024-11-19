import "./App.css";
import PokemonApplication from "./components/PokemonApplication";
import { useEffect, useState } from "react";
import ButtonStart from "./components/ButtonStart";

function App() {
  const pokedexImg = "https://ik.imagekit.io/hwyksvj4iv/pokedex_N_WgWrJK0s.png";
  const [start, setStart] = useState(false);
  useEffect(() => {
    if (start) {
      console.log("App started...");
    }
    return () => {
      if (start) {
        console.log("App is shutting down...");
      }
    };
  }, [start]);

  const handleStart = () => {
    setStart(!start);
  };
  return (
    <div
      className={`py-10 h-full flex flex-col items-center ${
        start
          ? "bg-white transition-all duration-[500ms]"
          : "bg-black transition-all duration-[500ms]"
      }`}
    >
      <img className="w-60" src={pokedexImg} alt="" />
      <ButtonStart start={start} handleStart={handleStart} />
      {start && <PokemonApplication />}
    </div>
  );
}

export default App;
