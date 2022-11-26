import { render, fireEvent, screen } from "@testing-library/react";
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
  render(<SummaryForm />);

  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const button = screen.getByRole("button", {
    name: /confirm order/i,
  });

  fireEvent.click(checkbox);

  expect(checkbox).toBeChecked();
  expect(button).toBeEnabled();

  fireEvent.click(checkbox);

  expect(checkbox).not.toBeChecked();
  expect(button).toBeDisabled();
});
