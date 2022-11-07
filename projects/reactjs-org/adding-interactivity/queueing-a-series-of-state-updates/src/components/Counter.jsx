import { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);

  const increase = (n) => n + 1;

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(increase);
          setNumber(increase);
          setNumber(increase);
        }}
      >
        +3
      </button>
    </>
  );
}
