import { ResizableBox } from 'react-resizable';

interface ResizableProps {
  direction: 'horizontal' | 'vertical';
}

const Resizable = ({
  direction,
  children,
}: React.PropsWithChildren<ResizableProps>) => {
  const axis = direction === 'horizontal' ? 'x' : 'y';
  return (
    <ResizableBox height={200} width={200} axis={axis}>
      {children}
    </ResizableBox>
  );
};

export default Resizable;
