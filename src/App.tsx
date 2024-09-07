import "./App.css";
import Counter from "./components/Counter/Counter";
import Battlefield from "./components/Battlefield/Battlefield";
import StartBtn from "./components/StartBtn/StartBtn";
import { useGameState } from "./hooks/useGameState";
import PlayerField from "./components/PlayerField/PlayerField";
import Header from "./components/Header/Header";
import { FaBoltLightning } from "react-icons/fa6";
import { useCallback, useEffect } from "react";
import { confirmModal } from "./utils/confirmModal";
import ConfettiComponent from "./components/Confetti/ConfettiComponent";

function App() {
  const { turn, start, matrix, fire, won } = useGameState();
  const {
    turn: turn2,
    start: start2,
    matrix: matrix2,
    fire: fire2,
    won: won2,
  } = useGameState();

  const handleStart = useCallback(() => {
    start();
    start2();
  }, [start, start2]);

  useEffect(() => {
    setTimeout(() => {
      if (won) {
        confirmModal("User 1 won!!!", handleStart);
      }
      if (won2) {
        confirmModal("User 2 won!!!", handleStart);
      }
    }, 0);
  }, [won, won2, handleStart]);

  return (
    <div className="app">
      <Header />
      <div className="fields">
        <PlayerField>
          <div className="user">User 1</div>
          <Counter turn={turn}></Counter>
          <Battlefield matrix={matrix} onFire={fire} />
        </PlayerField>
        <FaBoltLightning className="lightning" />
        <PlayerField>
          <div className="user">User 2</div>
          <Counter turn={turn2} />
          <Battlefield matrix={matrix2} onFire={fire2} />
        </PlayerField>
      </div>
      <StartBtn start={handleStart} />
      {(won || won2) && <ConfettiComponent />}
    </div>
  );
}

export default App;
