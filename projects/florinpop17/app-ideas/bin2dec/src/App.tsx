import Binary from './components/Binariy';
import Decimal from './components/Decimal';
import Navbar from './components/Navbar';
import { useBin2Dec } from './hooks/useBin2Dec';

import './App.css';

const App = () => {
  const [binary, decimal, updateBin] = useBin2Dec();

  return (
    <div className="h-screen">
      <Navbar />

      <div className="h-max pt-12">
        <div className="my-auto h-[450px]">
          <div className="h-2/3">
            <Binary value={binary} update={updateBin} />
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
