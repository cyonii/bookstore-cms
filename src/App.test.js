import { render, screen } from '@testing-library/react';
import App from './App';

test('renders BookStore header', () => {
  render(<App />);
  const headerText = screen.getByText(/BookStore/i);
  expect(headerText).toBeInTheDocument();
});
