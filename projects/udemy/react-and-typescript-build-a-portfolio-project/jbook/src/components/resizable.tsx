import { ResizableBox } from 'react-resizable';
import './resizable.css';

interface ResizableProps {
  direction: 'horizontal' | 'vertical';
}

const Resizable = ({
  direction,
  children,
}: React.PropsWithChildren<ResizableProps>) => {
  console.log(direction);

  return (
    <ResizableBox
      height={300}
      width={Infinity}
      resizeHandles={['s']}
      minConstraints={[Infinity, 24]}
      maxConstraints={[Infinity, window.innerHeight * 0.9]}
    >
      {children}
    </ResizableBox>
  );
};

export default Resizable;
