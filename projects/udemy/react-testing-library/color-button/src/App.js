import { useState } from "react";
import "./App.css";

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [isButtonDisable, setIsButtonDisable] = useState(false);
  const [buttonColor, setButtonColor] = useState("MediumVioletRed");
  const [prevButtonColor, setPrevButtonColor] = useState("MediumVioletRed");
  const newButtonColor = buttonColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";

  return (
    <div className="App">
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={() => {
          setButtonColor(newButtonColor);
        }}
        disabled={isButtonDisable}
      >
        Change to {replaceCamelWithSpaces(newButtonColor)}
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
