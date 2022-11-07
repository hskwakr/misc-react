import BucketList from "./components/BucketList";
import CounterList from "./components/CounterList";
import List1 from "./components/List1";
import List2 from "./components/List2";
import List3 from "./components/List3";
import List4 from "./components/List4";
import ShapeEditor from "./components/ShapeEditor";
import ShoppingCart1 from "./components/ShoppingCart1";
import ShoppingCart2 from "./components/ShoppingCart2";
import TaskApp from "./components/TaskApp";

function App() {
  return (
    <div className="App">
      <List1 />
      <List2 />
      <ShapeEditor />
      <CounterList />
      <List3 />
      <List4 />
      <BucketList />
      <ShoppingCart1 />
      <ShoppingCart2 />
      <TaskApp />
    </div>
  );
}

export default App;
