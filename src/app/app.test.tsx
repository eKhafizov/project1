import {render, screen} from '@testing-library/react';
import App from './app';
import {offersArray as offers, commentsArray as comments} from '../mocks/offers';

test('Renders app-component', () => {
  render(<App offers={offers} comments={comments} />);
  const textElement = screen.getByText(/Hello, world!/i);
  expect(textElement).toBeInTheDocument();
});
