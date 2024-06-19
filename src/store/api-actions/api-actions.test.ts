import createApi from '../../services/api';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { RootState } from '../../types/state';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { fetchOffersNearbyAction, fetchOffersAction } from '../api-actions/api-actions';
import { testOfferArray } from '../../mocks/offers';
import { APIRoute } from '../const';
import { checkAuthAction} from '../api-actions/api-actions';
import { AuthorizationStatus } from '../const';

export const extractActionsTypes = (actions: Action<string>[]) => actions.map(({ type }) => type);

const axios = createApi();
const mockAxiosAdapter = new MockAdapter(axios);
const middlewares = [thunk.withExtraArgument(axios)];
const mockStoreCreator = configureMockStore<
  RootState,
  Action<string>,
  ThunkDispatch<RootState, ReturnType<typeof createApi>, Action>
>(middlewares);
let store : ReturnType<typeof mockStoreCreator>;

//offers-data api
describe('Offers-data reducer tests', () => {
  //Проверяем работу api-action fetchOffersNearbyAction и reducer
  it('fetchOffersNearbyAction', async () => {
    store = mockStoreCreator({ OFFERS_DATA: { offersNearby: [] }});
    mockAxiosAdapter //мок адаптер имитирует ответ от сервера
      .onGet(`${APIRoute.Offers}/2/nearby`)
      .reply(200, testOfferArray); //в случае 200 он возвращает массив

    //диспатчим в выдуманный стор наш api-action, чтобы имитировать получение ответа с сервера
    await store.dispatch(fetchOffersNearbyAction(2));

    const emittedActions = store.getActions();
    const fetchOffersNearbyActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchOffersNearbyAction.fulfilled>;

    expect(fetchOffersNearbyActionFulfilled.payload).toEqual(testOfferArray);
  });

  it('fetchOffersNearbyAction reject', async () => {
    store = mockStoreCreator({ OFFERS_DATA: { offersNearby: [] }});
    mockAxiosAdapter //мок адаптер имитирует ответ от сервера
      .onGet(`${APIRoute.Offers}/2/nearby`)
      .reply(400, undefined); //в случае 400 он возвращает undefined

    //диспатчим в выдуманный стор наш api-action, чтобы имитировать получение ответа с сервера
    await store.dispatch(fetchOffersNearbyAction(2));

    const emittedActions = store.getActions();
    const fetchOffersNearbyActionRejected = emittedActions.at(1) as ReturnType<typeof fetchOffersNearbyAction.rejected>;

    expect(fetchOffersNearbyActionRejected.payload).toBe(undefined);
  });

});


//server-data api
describe('ServerData reducer check', () => {
  it('should change auth status after api to fulfilled', async () => {
    store = mockStoreCreator({SERVER_DATA: {authorizationStatus: AuthorizationStatus.NoAuth}});
    mockAxiosAdapter
      .onGet(APIRoute.Login)
      .reply(200, []);
    await store.dispatch(checkAuthAction());
    const emmitedActions = store.getActions();
    const checkAuthActionFulfilled = emmitedActions.at(1) as ReturnType<typeof checkAuthAction.fulfilled>;
    expect(checkAuthActionFulfilled.meta.requestStatus).toBe('fulfilled');
  });

  it('should change auth status after api to rejected', async () => {
    store = mockStoreCreator({SERVER_DATA: {authorizationStatus: AuthorizationStatus.NoAuth}});
    mockAxiosAdapter
      .onGet(APIRoute.Login)
      .reply(400, []);
    await store.dispatch(checkAuthAction());
    const emmitedActions = store.getActions();
    const checkAuthActionRejected = emmitedActions.at(1) as ReturnType<typeof checkAuthAction.rejected>;
    expect(checkAuthActionRejected.meta.requestStatus).toBe('rejected');
  });
});


//user-activity api
describe('UserActivity reducer', () => {
  it('should upload offers', async () => {
    //создадти store
    store = mockStoreCreator({USER_ACTIVITY : { offers: []}});
    //mockAxiosAdapter делаем запрос по адресу APIRoute/offers и получает 200 ответ от сервера и сервер возвращает ему массив testOffersArray
    mockAxiosAdapter
      .onGet(APIRoute.Offers)
      .reply(200, testOfferArray);
    //диспатчим тестируем api-action fetchOffersAction
    await store.dispatch(fetchOffersAction());
    //
    const emittedActions = store.getActions();
    //
    const fetchOffersActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchOffersAction.fulfilled>;
    // сравниваем payload полученного fullfilled запроса с желаемым результатом
    expect(fetchOffersActionFulfilled.payload).toEqual(testOfferArray);

    //сравниваем с отказом, который должен вернуть undefined без payload
    const fetchOffersNearbyActionRejected = emittedActions.at(2) as ReturnType<typeof fetchOffersAction.rejected>;
    // сравниваем payload полученного rejected запроса с желаемым результатом
    expect(fetchOffersNearbyActionRejected).toBe(undefined);

    //сравниваем с pending
    const fetchOffersNearbyActionPending = emittedActions.at(0) as ReturnType<typeof fetchOffersAction.pending>;
    // сравниваем payload полученного pending запроса с желаемым результатом
    expect(fetchOffersNearbyActionPending.meta.requestStatus).toBe('pending');
  });

  it('should upload offers error', async () => {
    //создадти store
    store = mockStoreCreator({USER_ACTIVITY : { offers: []}});
    //mockAxiosAdapter делаем запрос по адресу APIRoute/offers и получает 400 ответ от сервера и сервер возвращает ему ошибку
    mockAxiosAdapter
      .onGet(APIRoute.Offers)
      .reply(400, Error);
    //диспатчим тестируем api-action fetchOffersAction
    await store.dispatch(fetchOffersAction());
    const emittedActions = store.getActions();
    const fetchOffersActionError = emittedActions.at(1) as ReturnType<typeof fetchOffersAction.rejected>;
    expect(fetchOffersActionError.error.name).toBe('Error');

  });

});
