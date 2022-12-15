import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('renders input and button to search', () => {
  const { getByTestId } = render(<App />);

  const searchInput = getByTestId("search-input");
  expect(searchInput).toBeInTheDocument();
  expect(searchInput).toHaveAttribute("type", "text");

  const searchButton = getByTestId("search-button");
  expect(searchButton).toBeInTheDocument();
  expect(searchButton).toHaveTextContent('Search');
});

test('input changes in search bar', () => {
  const { getByTestId } = render(<App />);

  const searchInput = getByTestId("search-input");
  userEvent.type(searchInput, 'mango');

  expect(searchInput).toHaveValue('mango');
});
