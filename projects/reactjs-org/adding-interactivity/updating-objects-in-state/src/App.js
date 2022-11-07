import Canvas from "./components/Canvas";
import Form1 from "./components/Form1";
import Form2 from "./components/Form2";
import MovingDot from "./components/MovingDot";
import Scoreboard from "./components/Scoreboard";

function App() {
  return (
    <div className="App">
      <MovingDot />
      <Form1 />
      <Form2 />
      <Scoreboard />
      <Canvas />
    </div>
  );
}

export default App;
