import { render, screen, fireEvent } from "@testing-library/react";
import TextInput from "../../components/TextInput";

test("handles change event", () => {
  const handleChange = jest.fn();
  render(<TextInput value="" onChange={handleChange} />);
  const inputElement = screen.getByRole("textbox");
  fireEvent.change(inputElement, { target: { value: "new text" } });
  expect(handleChange).toHaveBeenCalledTimes(1);
});
