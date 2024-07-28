import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Accordion from "../../components/Accordion";

test("renders Accordion and toggles content visibility", () => {
  const title = "Details";
  const content = "Here are some details.";

  render(<Accordion title={title} content={content} />);

  // Check if the content is not visible initially
  expect(screen.queryByText(content)).toBeNull();

  // Click to show content
  fireEvent.click(screen.getByText(`Show ${title}`));
  expect(screen.getByText(content)).toBeInTheDocument();

  // Click to hide content
  fireEvent.click(screen.getByText(`Hide ${title}`));
  expect(screen.queryByText(content)).toBeNull();
});
