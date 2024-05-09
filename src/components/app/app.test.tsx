import {render, screen} from '@testing-library/react';
import App from './app';
import {offersArray as offers} from '../../mocks/offers';


test('Renders app-component', () => {
  render(<App offers={offers}/>);
  const textElement = screen.getByText(/Hello, world!/i);
  expect(textElement).toBeInTheDocument();
});
