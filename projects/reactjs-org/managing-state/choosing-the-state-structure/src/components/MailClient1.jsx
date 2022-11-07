import { useState } from "react";
import Letter1 from "./Letter1";
import { initialLetters } from "./MailClient1.data";

export default function MailClient1() {
  const [letters, setLetters] = useState(initialLetters);
  const [highlightedLetterId, setHighlightedLetterId] = useState(null);

  function handleHover(id) {
    setHighlightedLetterId(id);
  }

  function handleStar(id) {
    setLetters(
      letters.map((letter) => {
        if (letter.id === id) {
          return {
            ...letter,
            isStarred: !letter.isStarred,
          };
        } else {
          return letter;
        }
      })
    );
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map((letter) => (
          <Letter1
            key={letter.id}
            letter={letter}
            isHighlighted={letter.id === highlightedLetterId}
            onHover={handleHover}
            onToggleStar={handleStar}
          />
        ))}
      </ul>
    </>
  );
}
