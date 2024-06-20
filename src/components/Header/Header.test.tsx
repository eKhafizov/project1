import { render, screen } from '@testing-library/react';
import Header from './Header';
import { Provider } from 'react-redux';
import store from '../../store';
import HistoryRouter from '../../history-route';
import browserHistory from '../../browser-history';
import { testOfferArray } from '../../mocks/offers';
import createApi from '../../services/api';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { RootState } from '../../types/state';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { fetchOffersNearbyAction } from '../../store/api-actions/api-actions';
import { APIRoute } from '../../store/const';
import { AuthorizationStatus } from '../../store/const';
import withWrapper from '../../mocks/withWrapper';
import testState from '../../mocks/utils';

describe('Correct rendering of Header', () => {

  it('should render button signout by using wrapper function', () => {
    //рендерим нужный компонент c помощью функции withStore, которая включает обертки Provider и HistoryRouter
    render(withWrapper(<Header /> , testState));

    expect(screen.getByTestId('header__signout')).toBeInTheDocument();
  });

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

  it('should render button login', () => {
    //рендерим нужный компонент, но окружаем его в Provider и в HistoryRouter
    render(
      <Provider store={store}>
        <HistoryRouter history={browserHistory}>
          <Header />
        </HistoryRouter>
      </Provider>
    );
    expect(screen.getByTestId('header__login')).toBeInTheDocument();
  });

  it('should render number if there is favourite offers in state key', async () => {
    const axios = createApi();
    const mockAxiosAdapter = new MockAdapter(axios);
    const middlewares = [thunk.withExtraArgument(axios)];
    const mockStoreCreator = configureMockStore<
      RootState,
      Action<string>,
      ThunkDispatch<RootState, ReturnType<typeof createApi>, Action>
    >(middlewares);
    const store2 : ReturnType<typeof mockStoreCreator> = mockStoreCreator({
      OFFERS_DATA: { offersNearby: [] },
      SERVER_DATA: {authorizationStatus: AuthorizationStatus.Auth}
    });
    mockAxiosAdapter //мок адаптер имитирует ответ от сервера
      .onGet(`${APIRoute.Offers}/2/nearby`)
      .reply(200, testOfferArray); //в случае 200 он возвращает массив
    //диспатчим в выдуманный стор наш api-action, чтобы имитировать получение ответа с сервера
    await store.dispatch(fetchOffersNearbyAction(2));

    render(<Provider store={store2}><HistoryRouter history={browserHistory}><Header /></HistoryRouter></Provider>);

    expect(screen.getByTestId('header__favouritesNumber')).toBeInTheDocument();
  });

});
