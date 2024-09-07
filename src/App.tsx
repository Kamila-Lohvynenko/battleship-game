import "./App.css";
import Counter from "./components/Counter/Counter";
import Battlefield from "./components/Battlefield/Battlefield";
import StartBtn from "./components/StartBtn/StartBtn";
import { useGameState } from "./hooks/useGameState";
import PlayerField from "./components/PlayerField/PlayerField";
import Header from "./components/Header/Header";
import { FaBoltLightning } from "react-icons/fa6";
import { useEffect } from "react";

function App() {
  const { turn, start, matrix, fire, won } = useGameState();
  const {
    turn: turn2,
    start: start2,
    matrix: matrix2,
    fire: fire2,
    won: won2,
  } = useGameState();

  useEffect(() => {
    setTimeout(() => {
      if (won) {
        alert("User 1");
      }
      if (won2) {
        alert("User2");
      }
    }, 0);
  }, [won, won2]);

  return (
    <div className="app">
      <Header />
      <div className="fields">
        <PlayerField>
          <Counter turn={turn} />
          <Battlefield matrix={matrix} onFire={fire} />
        </PlayerField>
        <FaBoltLightning className="lightning" />
        <PlayerField>
          <Counter turn={turn2} />
          <Battlefield matrix={matrix2} onFire={fire2} />
        </PlayerField>
      </div>
      <StartBtn start={start} start2={start2} />
    </div>
  );
}

export default App;
