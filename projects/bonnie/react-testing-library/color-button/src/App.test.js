import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("button has correct initial color", () => {
  render(<App />);

  // find an element with a role of button and text of 'Change to blue'
  const button = screen.getByRole("button", { name: "Change to blue" });

  // expect the background color to be red
  expect(button).toHaveStyle({ backgroundColor: "red" });

  // click button
  fireEvent.click(button);

  // expect the background color to be blue
  expect(button).toHaveStyle({ backgroundColor: "blue" });

  // expect the button text to be 'Change to red'
  expect(button.textContent).toBe("Change to red");
});

test("initial conditions", () => {
  render(<App />);

  // check that the button starts out enabled
  const button = screen.getByRole("button", { name: "Change to blue" });
  expect(button).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("checkbox should hundle button enable/disable", () => {
  render(<App />);

  const button = screen.getByRole("button", { name: "Change to blue" });
  const checkbox = screen.getByRole("checkbox");
  
  // click checkbox
  fireEvent.click(checkbox);
  
  // expect the button to be disable
  expect(button).toBeDisabled();
  
  // click checkbox
  fireEvent.click(checkbox);
  
  // expect the button to be enable
  expect(button).toBeEnabled();
});
