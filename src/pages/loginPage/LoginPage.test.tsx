import LoginPage from './LoginPage';
import withWrapper from '../../mocks/withWrapper';
import testState from '../../mocks/utils';
import { render, screen } from '@testing-library/react';

describe('Correct rendering of LoginPage component', () => {
  it('should render login page with word Sign in', () => {
    render(withWrapper(<LoginPage /> , testState));
    const text = 'Sign in';

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it('should render login page with word Amsterdam', () => {
    render(withWrapper(<LoginPage /> , testState));
    const text = 'Amsterdam';
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it('should render login page with word Password', () => {
    render(withWrapper(<LoginPage /> , testState));
    const text = 'Password';
    expect(screen.getByText(text)).toBeInTheDocument();
  });

});
