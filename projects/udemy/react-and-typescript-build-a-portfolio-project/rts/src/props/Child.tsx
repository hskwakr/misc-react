interface ChildProps {
  color: string;
  onClick: () => void;
}

const Child = ({
  color,
  onClick,
  children,
}: React.PropsWithChildren<ChildProps>) => (
  <div>
    {color}
    <button type="button" onClick={onClick}>
      {children}
    </button>
  </div>
);

export default Child;
