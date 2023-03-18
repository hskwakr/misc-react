import { useState } from 'react';

type Binary = 0 | 1;
const init8BitBinary: Binary[] = [0, 0, 0, 0, 0, 0, 0, 0];

const Binaries = () => {
  const items = init8BitBinary.map(bin => <BinaryCounter value={bin} />);

  return <div>{items}</div>;
};

export default Binaries;

const BinaryCounter = ({ value }: { value: Binary }) => {
  const [binary, setBinary] = useState(value);

  const updateBinary = () => {
    setBinary(binary ? 0 : 1);
  };

  return (
    <div onClick={updateBinary} aria-hidden="true">
      <div>{binary}</div>
    </div>
  );
};
