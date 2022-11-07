import Accordion1 from "./components/Accordion1";
import Accordion2 from "./components/Accordion2";
import FilterableList from "./components/FilterableList";
import SyncedInputs from "./components/SyncedInputs";

function App() {
  return (
    <div className="App">
      <Accordion1 />
      <Accordion2 />
      <SyncedInputs />
      <FilterableList />
    </div>
  );
}

export default App;
