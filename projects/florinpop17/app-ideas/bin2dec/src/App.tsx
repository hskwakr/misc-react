import { useEffect, useState } from 'react';
import Binary from './components/Binariy';
import Decimal from './components/Decimal';
import Navbar from './components/Navbar';
import { Bin2Dec } from './lib/Bin2Dec';
import './App.css';

const App = () => {
  const [binStr, setBinStr] = useState('00000000');

  const decimal = Number(Bin2Dec(binStr));

  return (
    <div className="h-screen">
      <Navbar />

      <div className="h-max pt-12">
        <div className="my-auto h-[450px]">
          <div className="h-2/3">
            <Binary setBinStr={setBinStr} />
          </div>

          <div className="h-1/3">
            <Decimal decimal={decimal} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
