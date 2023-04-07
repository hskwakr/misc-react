import { useState } from 'react';
import { Bin } from '../lib/Bin';
import { Bin2Dec } from '../lib/Bin2Dec';

const init8BitBinary: Bin[] = [0, 0, 0, 0, 0, 0, 0, 0];

export const useBin2Dec = () => {
  const [binary, setBinary] = useState(init8BitBinary);

  const updateBin = (idx: number) => {
    setBinary(prev => {
      const newState = prev.map((v, i) => {
        return i === idx ? (v ? 0 : 1) : v;
      });

      return newState;
    });
  };

  const binStr = binary.map(String).join('');
  const decimal = Number(Bin2Dec(binStr));

  return [binary, decimal, updateBin] as const;
};
