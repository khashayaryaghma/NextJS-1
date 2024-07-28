import { render, screen, fireEvent } from "@testing-library/react";
import Form from "../../components/Form";

test("handles form submission", () => {
  const handleSubmit = jest.fn();
  render(<Form onSubmit={handleSubmit} />);
  const inputElement = screen.getByRole("textbox");
  const buttonElement = screen.getByRole("button", { name: /submit/i });

  fireEvent.change(inputElement, { target: { value: "test input" } });
  fireEvent.click(buttonElement);

  expect(handleSubmit).toHaveBeenCalledWith("test input");
});
