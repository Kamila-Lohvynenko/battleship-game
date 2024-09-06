import "./App.css";
import Counter from "./components/Counter/Counter";
import Battlefield from "./components/Battlefield/Battlefield";
import StartBtn from "./components/StartBtn/StartBtn";

function App() {
  const turn = 0;
  const start = () => {
    console.log("start");
  };
  return (
    <div className="App">
      <Counter turn={turn} />
      <Battlefield />
      <StartBtn start={start} />
    </div>
  );
}

export default App;
