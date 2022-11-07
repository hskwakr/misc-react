import { useState } from "react";
import Letter2 from "./Letter2";
import { letters } from "./MailClient2.data";

export default function MailClient2() {
  const [selectedIds, setSelectedIds] = useState(new Set());

  // TODO: allow multiple selection
  const selectedCount = selectedIds.size;

  function handleToggle(toggledId) {
    // TODO: allow multiple selection
    const nextIds = new Set(selectedIds);
    if (nextIds.has(toggledId)) {
      nextIds.delete(toggledId);
    } else {
      nextIds.add(toggledId);
    }
    setSelectedIds(nextIds);
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map((letter) => (
          <Letter2
            key={letter.id}
            letter={letter}
            isSelected={
              // TODO: allow multiple selection
              selectedIds.has(letter.id)
            }
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>You selected {selectedCount} letters</b>
        </p>
      </ul>
    </>
  );
}
