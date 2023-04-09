import { useEffect, useState } from 'react';

const easeOutQuad = (t: number) => t * (2 - t);
const frameDuration = 1000 / 60;
const duration = 1000;
const totalFrames = Math.round(duration / frameDuration);

export const useCounter = (value: number) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = easeOutQuad(frame / totalFrames);
      setCount(value * progress);

      if (frame === totalFrames) {
        clearInterval(timer);
      }
    }, frameDuration);

    return () => clearInterval(timer);
  }, [value]);

  return Math.round(count);
};
