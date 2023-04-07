import { useState } from 'react';
import Binary from './components/Binariy';
import Decimal from './components/Decimal';
import Navbar from './components/Navbar';
import { Bin2Dec } from './lib/Bin2Dec';
import { Bin } from './lib/Bin';

import './App.css';

const init8BitBinary: Bin[] = [0, 0, 0, 0, 0, 0, 0, 0];

const App = () => {
  const [binaries, setBinaries] = useState(init8BitBinary);

  const handleBinaries = (idx: number) => {
    setBinaries(prev => {
      const newState = prev.map((v, i) => {
        return i === idx ? (v ? 0 : 1) : v;
      });

      return newState;
    });
  };

  const binStr = binaries.map(String).join('');
  const decimal = Number(Bin2Dec(binStr));

  return (
    <div className="h-screen">
      <Navbar />

      <div className="h-max pt-12">
        <div className="my-auto h-[450px]">
          <div className="h-2/3">
            <Binary value={binaries} update={handleBinaries} />
          </div>

          <div className="h-1/3">
            <Decimal value={decimal} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
