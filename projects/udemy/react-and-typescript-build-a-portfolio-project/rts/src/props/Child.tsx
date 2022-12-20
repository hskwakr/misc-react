interface ChildProps {
  color: string;
}

export const Child = ({ color }: ChildProps) => <div>{color}</div>;

export default Child;
