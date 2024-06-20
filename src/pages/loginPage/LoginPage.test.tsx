import LoginPage from './LoginPage';
import withWrapper from '../../mocks/withWrapper';
import testState from '../../mocks/utils';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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

  it('should render correctly after email input', async () => {
    render(withWrapper(<LoginPage /> , testState));
    //используем userEvent.type, куда первым элементом передаем data-testid поля, а вторым элементом искомый текст ввода
    await userEvent.type(screen.getByTestId('email'), 'y@y.ru');
    //тестируем появляется ли на экране искомый текст ввода с помощью screen.getByDisplayValue('text')
    expect(screen.getByDisplayValue('y@y.ru')).toBeInTheDocument();
  });

});
