import Child from './Child';

const Parent = () => (
  <Child color="red" onClick={() => console.log('Clicked')}>
    Click me
  </Child>
);

export default Parent;
