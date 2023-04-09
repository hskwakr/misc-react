import { useEffect, useState } from 'react';

const easeOutQuad = (t: number) => t * (2 - t);
const frameDuration = 1000 / 60;
const duration = 2000;

const Decimal = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frame = 0;
    const totalFrames = Math.round(duration / frameDuration);
    const counter = setInterval(() => {
      frame++;
      const progress = easeOutQuad(frame / totalFrames);
      setCount(value * progress);

      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);
  }, [value]);

  const view = Math.round(count);

  return (
    <div className="m-auto max-w-xs">
      <div className="m-1.5 bg-amber-500">
        <div className="p-4 text-center font-mono text-8xl text-amber-100">
          {view}
        </div>
      </div>
    </div>
  );
};

export default Decimal;
