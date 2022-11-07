import Accordion from "./components/Accordion";
import Form1 from "./components/Form1";
import Form2 from "./components/Form2";
import Messenger from "./components/Messenger";
import Page from "./components/Page";
import TaskApp from "./components/TaskApp";

function App() {
  return (
    <div className="App">
      <Form1 />
      <Form2 />
      <Accordion />
      <Messenger />
      <Page />
      <TaskApp />
    </div>
  );
}

export default App;
