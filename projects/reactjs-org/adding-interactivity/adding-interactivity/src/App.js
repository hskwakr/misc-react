import BucketList from "./components/BucketList";
import Counter from "./components/Counter";
import Form1 from "./components/Form1";
import Form2 from "./components/Form2";
import Gallery from "./components/Gallery";
import Toolbar from "./components/Toolbar";

function App() {
  return (
    <div className="App">
      <Toolbar
        onPlayMovie={() => alert("Playing!")}
        onUploadImage={() => alert("Uploading!")}
      />
      <Gallery />
      <Form1 />
      <Counter />
      <Form2 />
      <BucketList />
    </div>
  );
}

export default App;
