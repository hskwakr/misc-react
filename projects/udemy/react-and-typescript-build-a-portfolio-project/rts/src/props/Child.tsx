interface ChildProps {
  color: string;
}

export const Child = ({ color }: ChildProps) => <div>{color}</div>;

export const ChildAsFC: React.FC<ChildProps> = ({ color }: ChildProps) => (
  <div>{color}</div>
);
