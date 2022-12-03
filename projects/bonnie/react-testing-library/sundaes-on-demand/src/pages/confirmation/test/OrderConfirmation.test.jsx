import {
  render,
  screen,
  waitFor,
} from "../../../test-utils/testing-library-utils";
import OrderConfirmation from "../OrderConfirmation";

test("displays order number", async () => {
  render(<OrderConfirmation />);

  const orderNumber = await screen.findByText(/order number/i);
  expect(orderNumber).toHaveTextContent("3402589230");
});
