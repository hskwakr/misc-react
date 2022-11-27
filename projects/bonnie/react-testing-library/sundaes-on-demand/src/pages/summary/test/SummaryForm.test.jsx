import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SummaryForm from "../SummaryForm";

test("initial condition", async () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const button = screen.getByRole("button", {
    name: /confirm order/i,
  });

  expect(checkbox).not.toBeChecked();
  expect(button).toBeDisabled();
});

test("checkbox handles button", async () => {
  const user = userEvent.setup();

  render(<SummaryForm />);

  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const button = screen.getByRole("button", {
    name: /confirm order/i,
  });

  await user.click(checkbox);

  expect(checkbox).toBeChecked();
  expect(button).toBeEnabled();

  await user.click(checkbox);

  expect(checkbox).not.toBeChecked();
  expect(button).toBeDisabled();
});

test("popover responds to hover", async () => {
  const user = userEvent.setup();

  // popover starts out hidden

  // popover appears on mousover of checkbox label

  // popover disappears when we mouse out
});
