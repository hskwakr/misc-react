import { useState } from "react";

let nextId = 0;

export default function List1() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState([]);

  const TextOnChanged = (e) => setName(e.target.value);
  const AddOnClicked = () => {
    setName("");
    setArtists([
      ...artists,
      { id: nextId++, name: name }
    ]);
  };
  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input value={name} onChange={TextOnChanged} />
      <button onClick={AddOnClicked}>Add</button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}
