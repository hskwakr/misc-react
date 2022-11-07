import { useState } from "react";

const statusType = {
  typing : "typing",
  sending : "sending",
  sent : "sent",
};

export default function FeedbackForm() {
  const [text, setText] = useState("");
  const [status, setStatus] = useState(statusType.typing);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus(statusType.sending);
    await sendMessage(text);
    setStatus(statusType.sent);
  }

  const isSending = status === statusType.sending;
  const isSent = status === statusType.sent;

  if (isSent) {
    return <h1>Thanks for feedback!</h1>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>How was your stay at The Prancing Pony?</p>
      <textarea
        disabled={isSending}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button disabled={isSending} type="submit">
        Send
      </button>
      {isSending && <p>Sending...</p>}
    </form>
  );
}

// Pretend to send a message.
function sendMessage(text) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
}
