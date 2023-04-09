import { useCounter } from '../hooks/useCounter';

const Decimal = ({ value }: { value: number }) => {
  const count = useCounter(value);

  return (
    <div className="m-auto max-w-xs">
      <div className="m-1.5 bg-amber-500">
        <div className="p-4 text-center font-mono text-8xl text-amber-100">
          {count}
        </div>
      </div>
    </div>
  );
};

export default Decimal;
