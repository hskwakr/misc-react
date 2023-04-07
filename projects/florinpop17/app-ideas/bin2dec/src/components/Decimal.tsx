const Decimal = ({ decimal }: { decimal: number }) => {
  return (
    <div className="m-auto max-w-xs">
      <div className="m-1.5 bg-amber-500">
        <div className="p-4 text-center font-mono text-8xl text-amber-100">
          {decimal}
        </div>
      </div>
    </div>
  );
};

export default Decimal;
