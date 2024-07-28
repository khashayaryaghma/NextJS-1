import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider, useTheme } from "../../components/ThemeProvider.jsx";

const TestComponent = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <span>{theme}</span>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

test("toggles theme", () => {
  render(
    <ThemeProvider>
      <TestComponent />
    </ThemeProvider>
  );

  // Initial theme should be light
  expect(screen.getByText("light")).toBeInTheDocument();

  const toggleButton = screen.getByText("Toggle Theme");

  // Toggle to dark theme
  fireEvent.click(toggleButton);
  expect(screen.getByText("dark")).toBeInTheDocument();

  // Toggle back to light theme
  fireEvent.click(toggleButton);
  expect(screen.getByText("light")).toBeInTheDocument();
});
