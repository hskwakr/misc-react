import FeedbackForm1 from "./components/FeedbackForm1";
import FeedbackForm2 from "./components/FeedbackForm2";
import Form from "./components/Form";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="App">
      <Gallery />
      <Form />
      <FeedbackForm1 />
      <FeedbackForm2 />
    </div>
  );
}

export default App;
