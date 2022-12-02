import { useState } from "react";
import { Container } from "react-bootstrap";
import { OrderDetailsProvider } from "./contexts/OrderDetails";
import OrderConfirmation from "./pages/confirmation/OrderConfirmation";
import OrderEntry from "./pages/entry/OrderEntry";
import OrderSummary from "./pages/summary/OrderSummary";

function App() {
  const [orderPhase, setOrderPhase] = useState("inProgress");

  let page = null;
  switch (orderPhase) {
    case "inProgress":
      page = <OrderEntry setOrderPhase={setOrderPhase} />;
      break;
    case "review":
      page = <OrderSummary setOrderPhase={setOrderPhase} />;
      break;
    case "complete":
      page = <OrderConfirmation setOrderPhase={setOrderPhase} />;
      break;

    default:
      page = null;
  }

  return (
    <Container>
      <OrderDetailsProvider>
        {/** Summary page and entry page need provider */}
        {/** confirmation page does not need provider */}
        {page}
      </OrderDetailsProvider>
    </Container>
  );
}

export default App;
