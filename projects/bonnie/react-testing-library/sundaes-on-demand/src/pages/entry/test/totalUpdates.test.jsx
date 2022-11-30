import { render, screen } from "../../../test-utils/testing-library-utils";
import userEvent from "@testing-library/user-event";
import Options from "../Options";

test("update scoop subtotal when scoop change", async () => {
  const user = userEvent.setup();

  render(<Options optionType="scoops" />);

  // make sure total starts out $0.00
  const scoopSubtotal = screen.getByText("Scoops total: $", { exact: false });
  expect(scoopSubtotal).toHaveTextContent("0.00");

  // update vanilla scoops to 1 and check the sub total
  const vanillaInput = await screen.findByRole("spinbutton", {
    name: "Vanilla",
  });
  await user.clear(vanillaInput);
  await user.type(vanillaInput, "1");
  expect(scoopSubtotal).toHaveTextContent("2.00");

  // update chocolate scoops to 2 and check subtotal
  const chocolateInput = await screen.findByRole("spinbutton", {
    name: "Chocolate",
  });
  await user.clear(chocolateInput);
  await user.type(chocolateInput, "2");
  expect(scoopSubtotal).toHaveTextContent("6.00");
});

test("update topping subtotal when topping change", async () => {
  const user = userEvent.setup();

  render(<Options optionType="toppings" />);

  // make sure total starts out $0.00
  const toppingSubtotal = screen.getByText("Toppings total: $", {
    exact: false,
  });
  expect(toppingSubtotal).toHaveTextContent("0.00");

  // add cherries and check subtotal
  const cherriesCheckbox = await screen.findByRole("checkbox", {
    name: "Cherries",
  });
  await user.click(cherriesCheckbox);
  expect(toppingSubtotal).toHaveTextContent("1.50");

  // add hot fudge and check subtotal
  const hotfudgeInput = await screen.findByRole("checkbox", {
    name: "Hot fudge",
  });
  await user.click(hotfudgeInput);
  expect(toppingSubtotal).toHaveTextContent("3.00");

  // remove hot fudge and check subtotal
  await user.click(hotfudgeInput);
  expect(toppingSubtotal).toHaveTextContent("1.50");
});
