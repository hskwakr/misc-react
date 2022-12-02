import {
  render,
  screen,
  waitFor,
} from "../../../test-utils/testing-library-utils";
import OrderConfirmation from "../OrderConfirmation";

test("displays order number", async () => {
  render(<OrderConfirmation />);

  const orderNumber = screen.getByText("Your order number is ", {
    exact: false,
  });
  await waitFor(() => {
    expect(orderNumber).toHaveTextContent("3402589230");
  });
});
