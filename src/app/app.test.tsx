import {render, screen} from '@testing-library/react';
import App from './app';
import { commentsArray as comments, locations} from '../mocks/offers';

test('Renders app-component', () => {
  render(<App comments={comments} locations={locations} />);
  const textElement = screen.getByText(/Hello, world!/i);
  expect(textElement).toBeInTheDocument();
});
