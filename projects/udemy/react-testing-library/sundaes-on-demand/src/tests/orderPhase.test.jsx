import { render, screen } from "@testing-library/react";
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
  const orderSummaryButton = screen.getByRole("button", {
    name: /order sundoe/i,
  });
  await user.click(orderSummaryButton);

  // check summary information based on order

  // check summary subtotals
  const scoopsSummaryTotal = screen.getByRole("heading", {
    name: /scoops: \$/i,
  });
  expect(scoopsSummaryTotal).toHaveTextContent("2.00");

  const toppingsSummaryTotal = screen.getByRole("heading", {
    name: /toppings: \$/i,
  });
  expect(toppingsSummaryTotal).toHaveTextContent("1.50");

  // check summary option items
  expect(screen.getByText("1 Vanilla")).toBeInTheDocument();
  expect(screen.getByText("Cherries")).toBeInTheDocument();

  // accept terms and conditions and click button to confirm order
  const tcCheckbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  await user.click(tcCheckbox);

  const confirmOrderButton = screen.getByRole("button", {
    name: /confirm order/i,
  });
  await user.click(confirmOrderButton);

  // check "Loading" appears
  const loading = screen.getByText(/loading/i, { exact: false });
  expect(loading).toBeInTheDocument();

  const thankYouHeading = await screen.findByRole("heading", /thank you/i);
  expect(thankYouHeading).toBeInTheDocument();

  // check "Loading" disappears
  const notloading = screen.queryByText(/loading/i, { exact: false });
  expect(notloading).not.toBeInTheDocument();

  // confirm order number on confirmation page
  const orderNumber = await screen.findByText(/order number/i);
  expect(orderNumber).toHaveTextContent("3402589230");

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

  // wait for items to appear so that Testing Library doesn't get angry about stuff
  // happening after test is over
  await screen.findByRole("spinbutton", { name: "Vanilla" });
  await screen.findByRole("checkbox", { name: "Cherries" });
});

test("Toppings header is not on summary page if no toppings ordered", async () => {
  const user = userEvent.setup();

  // render app
  render(<App />);

  // add ice cream scoops but no toppings
  const vanillaInput = await screen.findByRole("spinbutton", {
    name: "Vanilla",
  });
  await user.clear(vanillaInput);
  await user.type(vanillaInput, "1");

  // find and click order button
  const orderSummaryButton = screen.getByRole("button", {
    name: /order sundoe/i,
  });
  await user.click(orderSummaryButton);

  // check summary information based on order

  // check summary subtotals
  const scoopsSummaryTotal = screen.getByRole("heading", {
    name: /scoops: \$/i,
  });
  expect(scoopsSummaryTotal).toBeInTheDocument();

  const toppingsSummaryTotal = screen.queryByRole("heading", {
    name: /toppings: \$/i,
  });
  expect(toppingsSummaryTotal).not.toBeInTheDocument();

  // check summary option items
  expect(screen.getByText("1 Vanilla")).toBeInTheDocument();
});

test("Toppings header is not on summary page if toppings ordered, then removed", async () => {
  const user = userEvent.setup();

  // render app
  render(<App />);

  // add ice cream scoop
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
  expect(cherriesCheckbox).toBeChecked();

  const toppingsEntryTotal = screen.getByText(/toppings total: \$/i, {
    exact: false,
  });
  expect(toppingsEntryTotal).toHaveTextContent("1.50");

  // remove the topping
  await user.click(cherriesCheckbox);
  expect(cherriesCheckbox).not.toBeChecked();
  expect(toppingsEntryTotal).toHaveTextContent("0.00");

  // find and click order button
  const orderSummaryButton = screen.getByRole("button", {
    name: /order sundoe/i,
  });
  await user.click(orderSummaryButton);

  // check summary information based on order

  // check summary subtotals
  const scoopsSummaryTotal = screen.getByRole("heading", {
    name: /scoops: \$/i,
  });
  expect(scoopsSummaryTotal).toBeInTheDocument();

  const toppingsSummaryTotal = screen.queryByRole("heading", {
    name: /toppings: \$/i,
  });
  expect(toppingsSummaryTotal).not.toBeInTheDocument();

  // check summary option items
  expect(screen.getByText("1 Vanilla")).toBeInTheDocument();
});
