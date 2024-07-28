import { render, screen } from "@testing-library/react";
import ItemList from "../../components/ItemList";

test("renders list of items", () => {
  const items = ["Item 1", "Item 2", "Item 3"];
  render(<ItemList items={items} />);
  items.forEach((item) => {
    const itemElement = screen.getByText(item);
    expect(itemElement).toBeInTheDocument();
  });
});
