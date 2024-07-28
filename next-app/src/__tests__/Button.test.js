import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../../components/Button";

test("handles click event", () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click me</Button>);
  const buttonElement = screen.getByText(/Click me/i);
  fireEvent.click(buttonElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
