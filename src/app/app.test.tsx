import {render, screen} from '@testing-library/react';
import App from './app';
import {locations} from '../mocks/offers';

test('Renders app-component', () => {
  render(<App locations={locations} />);
  const textElement = screen.getByText(/Hello, world!/i);
  expect(textElement).toBeInTheDocument();
});
