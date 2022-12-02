import Options from "./Options";
import { formatCurrency } from "../../utilities";
import { useOrderDetails } from "../../contexts/OrderDetails";
import { Button } from "react-bootstrap";

export default function OrderEntry({ setOrderPhase }) {
  const { totals } = useOrderDetails();
  const grandTotal = totals.scoops + totals.toppings;

  const handleClick = () => {
    setOrderPhase("review");
  };

  return (
    <div>
      <Options optionType="scoops" />
      <Options optionType="toppings" />

      <h2>Grand total: {formatCurrency(grandTotal)}</h2>

      <Button variant="primary" onClick={handleClick}>
        Order Sundoe
      </Button>
    </div>
  );
}
