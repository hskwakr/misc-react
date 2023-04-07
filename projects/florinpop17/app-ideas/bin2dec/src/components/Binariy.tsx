import { useState } from 'react';

type Binary = 0 | 1;
const init8BitBinary: Binary[] = [0, 0, 0, 0, 0, 0, 0, 0];

const Binary = () => {
  const [binaries, setBinaries] = useState(init8BitBinary);

  const items = binaries.map((bin, idx) => {
    const updateBinary = () => {
      setBinaries(prev => {
        const newState = prev.map((v, i) => {
          return i === idx ? (v ? 0 : 1) : v;
        });

        return newState;
      });
    };

    return (
      <div className="mx-auto my-2 bg-amber-300">
        <div
          onClick={updateBinary}
          aria-hidden="true"
          className="rounded-lg bg-amber-100 px-2"
        >
          <div className="font-mono text-8xl">{bin}</div>
        </div>
      </div>
    );
  });

  return <div className="mx-auto grid max-w-xs grid-cols-4">{items}</div>;
};

export default Binary;
