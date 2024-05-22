import {render, screen} from '@testing-library/react';
import App from './app';
import {offersArray as offers, locationType as location, commentsArray as comments} from '../mocks/offers';
import { city } from '..';

test('Renders app-component', () => {
  render(<App offers={offers} location={location} city={city} comments={comments} />);
  const textElement = screen.getByText(/Hello, world!/i);
  expect(textElement).toBeInTheDocument();
});
