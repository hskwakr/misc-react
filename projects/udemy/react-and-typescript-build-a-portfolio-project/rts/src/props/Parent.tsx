import { Child, ChildAsFC } from './Child';

const Parent = () => (
  <>
    <Child color="red" />
    <ChildAsFC color="blue" />
  </>
);

export default Parent;
