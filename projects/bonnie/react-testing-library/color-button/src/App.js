import { useState } from "react";
import "./App.css";

function App() {
  const [isButtonDisable, setIsButtonDisable] = useState(false);
  const [buttonColor, setButtonColor] = useState("red");
  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  return (
    <div className="App">
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={() => {
          setButtonColor(newButtonColor);
        }}
        disabled={isButtonDisable}
      >
        Change to {newButtonColor}
      </button>
      <input type="checkbox" onClick={(e) => {setIsButtonDisable(e.target.checked)}} />
    </div>
  );
}

export default App;
