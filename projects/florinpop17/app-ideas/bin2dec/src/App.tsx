import './App.css';
import Binary from './components/Binariy';
import Decimal from './components/Decimal';

const App = () => (
  <div className="h-screen">
    <div className="flex h-16 bg-gray-500">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
    <div className="h-fit bg-slate-400 pt-16">
      <Binary />
      <Decimal />
    </div>
  </div>
);

export default App;
