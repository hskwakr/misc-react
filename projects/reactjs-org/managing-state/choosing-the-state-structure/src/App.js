import FeedbackForm from "./components/FeedbackForm";
import Form from "./components/Form";
import MailClient1 from "./components/MailClient1";
import MailClient2 from "./components/MailClient2";
import Menu from "./components/Menu";
import MovingDot from "./components/MovingDot";
import TravelPlan1 from "./components/TravelPlan1";

function App() {
  return (
    <div className="App">
      <MovingDot />
      <FeedbackForm />
      <Form />
      <Menu />
      <TravelPlan1 />
      <MailClient1 />
      <MailClient2 />
    </div>
  );
}

export default App;
