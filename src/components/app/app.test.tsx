import {render, screen} from '@testing-library/react';
import App from './app';
import {offersArray as offers, locationType as location} from '../../mocks/offers';


test('Renders app-component', () => {
  render(<App offers={offers} location={location}/>);
  const textElement = screen.getByText(/Hello, world!/i);
  expect(textElement).toBeInTheDocument();
});
