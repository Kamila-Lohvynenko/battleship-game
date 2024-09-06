import "./App.css";
import Counter from "./components/Counter/Counter";
import Battlefield from "./components/Battlefield/Battlefield";
import StartBtn from "./components/StartBtn/StartBtn";
import { useGameState } from "./hooks/useGameState";

function App() {
  const { turn, start, matrix, fire } = useGameState();

  return (
    <div className="App">
      <Counter turn={turn} />
      <Battlefield matrix={matrix} onFire={fire} />
      <StartBtn start={start} />
    </div>
  );
}

export default App;
