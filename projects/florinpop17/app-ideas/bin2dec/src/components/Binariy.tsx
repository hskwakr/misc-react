import { useState } from 'react';

type Binary = 0 | 1;
const init8BitBinary: Binary[] = [0, 0, 0, 0, 0, 0, 0, 0];

const Binary = () => {
  const items = init8BitBinary.map(bin => (
    <div className="mx-auto my-2 bg-amber-300">
      <BinaryCounter value={bin} />
    </div>
  ));

  return <div className="mx-auto grid max-w-xs grid-cols-4">{items}</div>;
};

export default Binary;

const BinaryCounter = ({ value }: { value: Binary }) => {
  const [binary, setBinary] = useState(value);

  const updateBinary = () => {
    setBinary(binary ? 0 : 1);
  };

  return (
    <div
      onClick={updateBinary}
      aria-hidden="true"
      className="rounded-lg bg-amber-100 px-2"
    >
      <div className="font-mono text-8xl">{binary}</div>
    </div>
  );
};
