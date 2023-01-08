import { ResizableBox, ResizableBoxProps } from 'react-resizable';
import './resizable.css';
import { useEffect, useState } from 'react';

interface ResizableProps {
  direction: 'horizontal' | 'vertical';
}

const Resizable = ({
  direction,
  children,
}: React.PropsWithChildren<ResizableProps>) => {
  let resizableProps: ResizableBoxProps;
  const [innerHeight, setInnerHeight] = useState(window.innerHeight);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const listener = () => {
      setInnerHeight(window.innerHeight);
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener('resize', listener);

    return () => {
      window.removeEventListener('resize', listener);
    };
  }, []);

  if (direction === 'horizontal') {
    resizableProps = {
      className: 'resize-horizontal',
      resizeHandles: ['e'],
      height: Infinity,
      width: innerWidth * 0.75,
      minConstraints: [innerWidth * 0.2, Infinity],
      maxConstraints: [innerWidth * 0.75, Infinity],
    };
  } else {
    resizableProps = {
      resizeHandles: ['s'],
      height: 300,
      width: Infinity,
      minConstraints: [Infinity, 24],
      maxConstraints: [Infinity, innerHeight * 0.9],
    };
  }

  const {
    height,
    width,
    resizeHandles,
    minConstraints,
    maxConstraints,
    className,
  } = resizableProps;

  return (
    <ResizableBox
      className={className}
      height={height}
      width={width}
      resizeHandles={resizeHandles}
      minConstraints={minConstraints}
      maxConstraints={maxConstraints}
    >
      {children}
    </ResizableBox>
  );
};

export default Resizable;
