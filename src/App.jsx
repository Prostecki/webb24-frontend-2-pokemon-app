import "./App.css";
import PokemonApplication from "./components/PokemonApplication";
import { useEffect, useState } from "react";

function App() {
  const [start, setStart] = useState(false);
  useEffect(() => {
    if (start) {
      console.log("App started...");
    }
  }, [start]);

  const handleStart = () => {
    setStart(true);
  };
  return (
    <div>
      <h1>Pokemon App</h1>
      <button onClick={handleStart} disabled={start}>
        {start ? "App running..." : "Start App"}
      </button>
      {start && <PokemonApplication />}
    </div>
  );
}

export default App;
