import React from 'react';
import { render } from '@testing-library/react';
import App from '../app';

test('renders Welcome Yassine :) text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Welcome Yassine \:\)/i);

  expect(linkElement.textContent).toEqual('Welcome Yassine :)');
});
