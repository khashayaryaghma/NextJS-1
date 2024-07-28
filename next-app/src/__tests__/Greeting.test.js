import { render, screen } from "@testing-library/react";
import Greeting from "../../components/Greeting";

test("renders greeting message", () => {
  render(<Greeting name="John" />);
  const greetingElement = screen.getByText(/Hello, John!/i);
  expect(greetingElement).toBeInTheDocument();
});
