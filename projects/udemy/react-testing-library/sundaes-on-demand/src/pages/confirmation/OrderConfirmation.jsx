import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useOrderDetails } from "../../contexts/OrderDetails";

export default function OrderConfirmation({ setOrderPhase }) {
  const [orderNumber, setOrderNumber] = useState(null);
  const { resetOrder } = useOrderDetails();

  useEffect(() => {
    async function fetch(req) {
      try {
        const res = await axios.post(req);
        setOrderNumber(res.data.orderNumber);
      } catch (error) {}
    }

    fetch(`http://localhost:3030/order`);
  }, []);

  const handleClick = () => {
    resetOrder();
    setOrderPhase("inProgress");
  };

  return orderNumber ? (
    <div style={{ textAlign: "center" }}>
      <h1>Thank you</h1>
      <p>Your order number is {orderNumber}</p>
      <p style={{ fontSize: "25%" }}>
        as per our terms and conditions, nothing will happen now
      </p>

      <Button variant="primary" onClick={handleClick}>
        Create new order
      </Button>
    </div>
  ) : (
    <div>Loading</div>
  );
}
