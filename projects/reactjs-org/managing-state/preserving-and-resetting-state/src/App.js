import ContactList from "./components/ContactList";
import ContactManager from "./components/ContactManager";
import CounterList1 from "./components/CounterList1";
import CounterList2 from "./components/CounterList2";
import CounterList3 from "./components/CounterList3";
import CounterList4 from "./components/CounterList4";
import CounterList5 from "./components/CounterList5";
import Gallery from "./components/Gallery";
import Messenger from "./components/Messenger";
import Name from "./components/Name";
import PersonalQuestion from "./components/PersonalQuestion";

function App() {
  return (
    <div className="App">
      <CounterList1 />
      <CounterList2 />
      <CounterList3 />
      <CounterList4 />
      <CounterList5 />
      <Messenger />
      <PersonalQuestion />
      <Name />
      <ContactManager />
      <Gallery />
      <ContactList />
    </div>
  );
}

export default App;
