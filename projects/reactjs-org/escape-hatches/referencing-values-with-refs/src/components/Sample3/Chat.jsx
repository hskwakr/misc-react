import { useState, useRef } from "react";

export default function Chat() {
  const [text, setText] = useState("");
  let textRef = useRef(text);

  function handleSend() {
    setTimeout(() => {
      alert("Sending: " + textRef.current);
    }, 3000);
  }
  function handleChange(e) {
    setText(e.target.value);
    textRef.current = e.target.value;
  }

  return (
    <>
      <input value={text} onChange={handleChange} />
      <button onClick={handleSend}>Send</button>
    </>
  );
}
