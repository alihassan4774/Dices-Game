import { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";

function App() {
  const [IsGameStart, setIsGameStart] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStart((prev) => !prev);
  };

  return (
    <>{IsGameStart ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}</>
  );
}

export default App;
