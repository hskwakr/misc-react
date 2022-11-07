import { useState } from "react";

export default function FeedbackForm1() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    alert(`Sending: "${message}"`);
    setIsSent(true);
  };
  const onChangeText = (e) => setMessage(e.target.value);

  if (isSent) {
    return <h1>Thank you!</h1>;
  }
  return (
    <form onSubmit={onSubmit}>
      <textarea placeholder="Message" value={message} onChange={onChangeText} />
      <br />
      <button type="submit">Send</button>
    </form>
  );
}
