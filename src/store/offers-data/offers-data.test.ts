import createApi from '../../services/api';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { RootState } from '../../types/state';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { fetchOffersNearbyAction } from '../api-actions';
import { testOfferArray } from '../../mocks/offers';
import { APIRoute } from '../const';


export const extractActionsTypes = (actions: Action<string>[]) => actions.map(({ type }) => type);

describe('Offers-data reducer tests', () => {

  //Создаем axios
  const api = createApi();
  //создаем FAKE ADAPTER и добавляем в него axios api, чтобы не передавать реальные запросы к серверу. он имитирует ответы от сервера
  const mockAxiosAdapter = new MockAdapter(api);
  //создаем  middleware и подключаем в него аксиос
  const middleware = [thunk.withExtraArgument(api)];
  //создаем FAKE STORE, подключив в него наш middleware
  const mockStoreCreator = configureMockStore<
  RootState,
  Action<string>,
  ThunkDispatch<RootState, ReturnType<typeof createApi>, Action>
  >(middleware);
  //создаем пустой store, но указываем тот тип, что получим от mock стора
  let store: ReturnType<typeof mockStoreCreator>;

  //перед каждым it будем создавать новый моковый store
  beforeEach(() => {
    store = mockStoreCreator({ OFFERS_DATA: { offersNearby: [] }});
  });

  //Проверяем работу api-action fetchOffersNearbyAction и reducer
  it('fetchOffersNearbyAction', async () => {
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
