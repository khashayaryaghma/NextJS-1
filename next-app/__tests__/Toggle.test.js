import { render, screen, fireEvent } from '@testing-library/react';
import Toggle from '../components/Toggle';

test('toggles between ON and OFF', () => {
  render(<Toggle />);
  const buttonElement = screen.getByRole('button');
  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveTextContent('ON');
  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveTextContent('OFF');
});
