import React from "react";
import SummaryForm from "./SummaryForm";
import { useOrderDetails } from "../../contexts/OrderDetails";
import { formatCurrency } from "../../utilities";

export default function OrderSummary({ setOrderPhase }) {
  const { totals, optionCounts } = useOrderDetails();

  const handleClick = () => {
    setOrderPhase("complete");
  };

  const scoopArray = Object.entries(optionCounts.scoops);
  const scoopList = scoopArray.map(([key, value]) => (
    <li key={key}>
      {value} {key}
    </li>
  ));

  const toppingsArray = Object.keys(optionCounts.toppings);
  const toppingsList = toppingsArray.map((key) => <li key={key}>{key}</li>);

  return (
    <div>
      <h1>Order Summary</h1>

      <h2>Scoops: {formatCurrency(totals.scoops)}</h2>
      <ul>{scoopList}</ul>

      <h2>Toppings: {formatCurrency(totals.toppings)}</h2>
      <ul>{toppingsList}</ul>

      <SummaryForm onClick={handleClick} />
    </div>
  );
}
