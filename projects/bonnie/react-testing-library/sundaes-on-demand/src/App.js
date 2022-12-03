import { useState } from "react";
import { Container } from "react-bootstrap";
import { OrderDetailsProvider } from "./contexts/OrderDetails";
import OrderConfirmation from "./pages/confirmation/OrderConfirmation";
import OrderEntry from "./pages/entry/OrderEntry";
import OrderSummary from "./pages/summary/OrderSummary";

function App() {
  const [orderPhase, setOrderPhase] = useState("inProgress");

  let Component = OrderEntry;
  switch (orderPhase) {
    case "inProgress":
      Component = OrderEntry;
      break;
    case "review":
      Component = OrderSummary;
      break;
    case "complete":
      Component = OrderConfirmation;
      break;

    default:
  }

  return (
    <Container>
      <OrderDetailsProvider>
        {/** Summary page and entry page need provider */}
        {/** confirmation page does not need provider */}
        <Component setOrderPhase={setOrderPhase} />
      </OrderDetailsProvider>
    </Container>
  );
}

export default App;
