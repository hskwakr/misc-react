import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "../App";

test("order phases for happy path", async () => {
  const user = userEvent.setup();

  // render app
  render(<App />);

  // add ice cream scoops and toppings
  // update vanilla scoops to 1
  const vanillaInput = await screen.findByRole("spinbutton", {
    name: "Vanilla",
  });
  await user.clear(vanillaInput);
  await user.type(vanillaInput, "1");

  // add cherries
  const cherriesCheckbox = await screen.findByRole("checkbox", {
    name: "Cherries",
  });
  await user.click(cherriesCheckbox);

  // find and click order button
  const orderButton = screen.getByRole("button", { name: /order sundoe/i });
  await user.click(orderButton);

  // check summary information based on order
  const scoopsTotal = screen.getByRole("heading", { name: /scoops: \$/i });
  expect(scoopsTotal).toHaveTextContent("2.00");

  const toppingsTotal = screen.getByRole("heading", { name: /toppings: \$/i });
  expect(toppingsTotal).toHaveTextContent("1.50");

  // accept terms and conditions and click button to confirm order
  const termsAndConditions = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  await user.click(termsAndConditions);

  const confirmOrderButton = screen.getByRole("button", {
    name: /confirm order/i,
  });
  await user.click(confirmOrderButton);

  // confirm order number on confirmation page
  const orderNumber = screen.getByText("Your order number is ", {
    exact: false,
  });
  await waitFor(() => {
    expect(orderNumber).toHaveTextContent("3402589230");
  });

  // click "new order" button on confirmation page
  const newOrderButton = screen.getByRole("button", {
    name: /new order/i,
  });
  await user.click(newOrderButton);

  // check that scoops and toppings subtotals have been reset
  const scoopSubtotal = screen.getByText("Scoops total: $", {
    exact: false,
  });
  expect(scoopSubtotal).toHaveTextContent("0.00");
  const toppingSubtotal = screen.getByText("Toppings total: $", {
    exact: false,
  });
  expect(toppingSubtotal).toHaveTextContent("0.00");

  // do we need to awai anything to avoid test errors?
});
