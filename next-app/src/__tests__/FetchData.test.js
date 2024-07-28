import { render, screen, waitFor } from "@testing-library/react";
import FetchData from "../../components/FetchData";

test("fetches and displays data", async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ title: "Test Title", body: "Test Body" }),
    })
  );

  render(<FetchData />);

  await waitFor(() => {
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Body")).toBeInTheDocument();
  });

  global.fetch.mockRestore();
});
