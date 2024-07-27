import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserProfile from '../components/UserProfile';

test('renders UserProfile and handles input changes and button click', () => {
  const user = { name: 'John Doe', email: 'john.doe@example.com' };
  
  render(<UserProfile user={user} />);

  // Check if initial values are rendered correctly
  expect(screen.getByLabelText(/Name:/)).toHaveValue('John Doe');
  expect(screen.getByLabelText(/Email:/)).toHaveValue('john.doe@example.com');

  // Simulate input changes
  fireEvent.change(screen.getByLabelText(/Name:/), { target: { value: 'Jane Doe' } });
  fireEvent.change(screen.getByLabelText(/Email:/), { target: { value: 'jane.doe@example.com' } });

  expect(screen.getByLabelText(/Name:/)).toHaveValue('Jane Doe');
  expect(screen.getByLabelText(/Email:/)).toHaveValue('jane.doe@example.com');

  // Simulate button click
  global.alert = jest.fn(); // Mock the alert function
  fireEvent.click(screen.getByText('Save'));
  expect(global.alert).toHaveBeenCalledWith('Saved: Jane Doe - jane.doe@example.com');
});
