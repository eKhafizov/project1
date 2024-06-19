import { render, screen } from '@testing-library/react';
import Header from './Header';
import { Provider } from 'react-redux';
import store from '../../store/index';
import React from 'react';
import HistoryRouter from '../../history-route';
import browserHistory from '../../browser-history';

describe('Correct rendering of Header', () => {

  it('should render button signout', () => {
    //рендерим нужный компонент, но окружаем его в Provider и в HistoryRouter
    render(
      <Provider store={store}>
        <HistoryRouter history={browserHistory}>
          <Header />
        </HistoryRouter>
      </Provider>
    );

    const signOutButton = screen.getByTestId('header__signout');
    expect(signOutButton).toBeInTheDocument();

  });

});
