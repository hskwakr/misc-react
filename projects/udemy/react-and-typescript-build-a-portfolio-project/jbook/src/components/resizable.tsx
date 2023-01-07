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
    <ResizableBox height={300} width={300} resizeHandles={['s']}>
      {children}
    </ResizableBox>
  );
};

export default Resizable;
