import { Bin } from '../App';

const Binary = ({
  value,
  handleBinaries,
}: {
  value: Bin[];
  handleBinaries: (idx: number) => void;
}) => {
  const items = value.map((bin, i) => {
    const updateBinary = () => {
      handleBinaries(i);
    };

    return (
      <div key={i} className="mx-auto my-2 bg-amber-300">
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
