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
  const [width, setWidth] = useState(innerWidth * 0.75);

  useEffect(() => {
    const listener = () => {
      setInnerHeight(window.innerHeight);
      setInnerWidth(window.innerWidth);

      if (window.innerWidth * 0.75 < width) {
        setWidth(window.innerWidth * 0.75);
      }
    };
    window.addEventListener('resize', listener);

    return () => {
      window.removeEventListener('resize', listener);
    };
  }, [width]);

  if (direction === 'horizontal') {
    resizableProps = {
      className: 'resize-horizontal',
      resizeHandles: ['e'],
      height: Infinity,
      width,
      minConstraints: [innerWidth * 0.2, Infinity],
      maxConstraints: [innerWidth * 0.75, Infinity],
      onResizeStop: (e, data) => {
        setWidth(data.size.width);
      },
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

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <ResizableBox {...resizableProps}>{children}</ResizableBox>;
};

export default Resizable;
