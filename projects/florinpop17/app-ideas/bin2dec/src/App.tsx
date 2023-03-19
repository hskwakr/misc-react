import './App.css';
import Binary from './components/Binariy';
import Decimal from './components/Decimal';
import Navbar from './components/Navbar';

const App = () => (
  <div className="h-screen">
    <Navbar />

    <div className="h-max pt-12">
      <div className="my-auto h-[450px]">
        <div className="h-2/3">
          <Binary />
        </div>

        <div className="h-1/3">
          <Decimal />
        </div>
      </div>
    </div>
  </div>
);

export default App;
