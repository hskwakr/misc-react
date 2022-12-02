import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useOrderDetails } from "../../contexts/OrderDetails";

export default function OrderConfirmation({ setOrderPhase }) {
  const [orderNumber, setOrderNumber] = useState(0);
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

  return (
    <div>
      <h2>Your order number is {orderNumber}</h2>

      <Button variant="primary" onClick={handleClick}>
        Create new order
      </Button>
    </div>
  );
}
