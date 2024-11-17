import "./App.css";
import PokemonApplication from "./components/PokemonApplication";
import { useEffect, useState } from "react";
import ButtonStart from "./components/ButtonStart";

function App() {
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
    <div className="flex flex-col items-center">
      <h1 className="text-5xl font-bold my-10">Pokemon App</h1>
      <ButtonStart start={start} handleStart={handleStart} />
      {start && <PokemonApplication />}
    </div>
  );
}

export default App;
