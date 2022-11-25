import { useState } from "react";
import "./App.css";

function App() {
  const [isButtonDisable, setIsButtonDisable] = useState(false);
  const [buttonColor, setButtonColor] = useState("red");
  const [prevButtonColor, setPrevButtonColor] = useState("red");
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
      <input
        type="checkbox"
        id="button-usable-checkbox"
        defaultChecked={isButtonDisable}
        onClick={(e) => {
          const color = e.target.checked ? "gray" : prevButtonColor;
          setPrevButtonColor(buttonColor);
          setIsButtonDisable(e.target.checked);
          setButtonColor(color);
        }}
      />
      <label htmlFor="button-usable-checkbox">Disable button</label>
    </div>
  );
}

export default App;
