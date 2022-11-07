import { useState } from "react";

export default function TrafficLight() {
  const [walk, setWalk] = useState(true);
  const walkMsg = "Walk is next";
  const stopMsg = "Stop is next";

  function handleClick() {
    const msg = walk ? stopMsg : walkMsg;

    setWalk(!walk);
    alert(msg);
  }

  return (
    <>
      <button onClick={handleClick}>Change to {walk ? "Stop" : "Walk"}</button>
      <h1
        style={{
          color: walk ? "darkgreen" : "darkred",
        }}
      >
        {walk ? "Walk" : "Stop"}
      </h1>
    </>
  );
}
