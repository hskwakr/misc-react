import { useState } from "react";

export default function Name() {
  const [reverse, setReverse] = useState(false);

  const labels = {
    firstname: "First name",
    lastname: "Last name",
  };
  const keys = {
    firstname: "firstname",
    lastname: "lastname",
  };

  let checkbox = (
    <label>
      <input
        type="checkbox"
        checked={reverse}
        onChange={(e) => setReverse(e.target.checked)}
      />
      Reverse order
    </label>
  );
  if (reverse) {
    return (
      <>
        <Field key={keys.lastname} label={labels.lastname} />
        <Field key={keys.firstname} label={labels.firstname} />
        {checkbox}
      </>
    );
  } else {
    return (
      <>
        <Field key={keys.firstname} label={labels.firstname} />
        <Field key={keys.lastname} label={labels.lastname} />
        {checkbox}
      </>
    );
  }
}

function Field({ label }) {
  const [text, setText] = useState("");
  return (
    <label>
      {label}:{" "}
      <input
        type="text"
        value={text}
        placeholder={label}
        onChange={(e) => setText(e.target.value)}
      />
    </label>
  );
}
