interface ChildProps {
  color: string;
}

const Child = ({ color }: ChildProps) => <div>{color}</div>;

export default Child;
