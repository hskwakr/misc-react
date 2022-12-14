import { fireEvent, render, screen } from "@testing-library/react";
import App, { replaceCamelWithSpaces } from "./App";

test("button has correct initial color", async () => {
  render(<App />);

  // find an element with a role of button and text of 'Change to blue'
  const button = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });

  // expect the background color to be red
  expect(button).toHaveStyle({ backgroundColor: "MediumVioletRed" });

  // click button
  fireEvent.click(button);

  // expect the background color to be blue
  expect(button).toHaveStyle({ backgroundColor: "MidnightBlue" });

  // expect the button text to be 'Change to red'
  expect(button).toHaveTextContent("Change to Medium Violet Red");
});

test("initial conditions", async () => {
  render(<App />);

  // check that the button starts out enabled
  const button = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  expect(button).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  expect(checkbox).not.toBeChecked();
});

test("checkbox should hundle button enable/disable", async () => {
  render(<App />);

  const button = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

  // click checkbox
  fireEvent.click(checkbox);

  // expect the button to be disable
  expect(button).toBeDisabled();

  // click checkbox
  fireEvent.click(checkbox);

  // expect the button to be enable
  expect(button).toBeEnabled();
});

test("button keeps correct color while disabled", async () => {
  render(<App />);

  const button = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

  // click checkbox
  fireEvent.click(checkbox);

  // expect the background color to be gray
  expect(button).toBeDisabled();
  expect(button).toHaveStyle({ backgroundColor: "gray" });

  // click checkbox
  fireEvent.click(checkbox);

  // expect the background color to be red
  expect(button).toBeEnabled();
  expect(button).toHaveStyle({ backgroundColor: "MediumVioletRed" });

  // click button
  fireEvent.click(button);

  expect(button).toHaveStyle({ backgroundColor: "MidnightBlue" });

  // click checkbox
  fireEvent.click(checkbox);

  // expect the background color to be gray
  expect(button).toBeDisabled();
  expect(button).toHaveStyle({ backgroundColor: "gray" });

  // click checkbox
  fireEvent.click(checkbox);

  // expect the background color to be red
  expect(button).toBeEnabled();
  expect(button).toHaveStyle({ backgroundColor: "MidnightBlue" });
});

describe("spaces before camel-case capital letters", () => {
  test("Works for no inner capital letters", async () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });

  test("Works for one inner capital letters", async () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });

  test("Works for multiple inner capital letters", async () => {
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
