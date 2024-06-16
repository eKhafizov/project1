import MockAdapter from 'axios-mock-adapter';
import createApi from '../../services/api';
import { changeFilter } from '../actions';
import { fetchAddFavouritesAction, fetchCommentsAction, fetchRemoveFavouritesAction } from '../api-actions';
import { changeCityToHamburg, changeCityToNothing, userActivity } from './user-activity';
import thunk from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { RootState } from '../../types/state';
import { Action } from '@reduxjs/toolkit';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { APIRoute } from '../const';
import { testOfferArray } from '../../mocks/offers';
import {fetchOffersAction} from '../api-actions';

describe('UserActivity test', () => {
  //создаем axios
  const axios = createApi();
  //создаем mockAdapter
  const mockAxiosAdapter = new MockAdapter(axios);
  //создаем middleware, куда подключим api
  const middleware = [thunk.withExtraArgument(axios)];
  //создаем функцию creator of mockStore
  const mockStoreCreator = configureMockStore<
    RootState,
    Action<string>,
    ThunkDispatch<RootState, ReturnType<typeof createApi>, Action>
  >(middleware);
  //создадим пустую переменную store указав ей тип
  let store : ReturnType<typeof mockStoreCreator>;


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
    // сравниваем payload полученного fullfilled запроса с желаемым результатом
    expect(fetchOffersNearbyActionRejected).toBe(undefined);

    //сравниваем с pending
    const fetchOffersNearbyActionPending = emittedActions.at(0) as ReturnType<typeof fetchOffersAction.pending>;
    // сравниваем payload полученного fullfilled запроса с желаемым результатом
    expect(fetchOffersNearbyActionPending.meta.requestStatus).toBe('pending');
  });

  it('Passing empty action into reducer', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      offers: [],
      chosenCity: {
        name: 'Amsterdam',
        lat:  52.3909553943508,
        lng: 4.85309666406198,
        zoom: 10
      },
      chosenFilter:'popular',
      chosenOfferComments: null,
    };
    const result = userActivity.reducer(expectedState, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('ChangeToNothing', () => {
    const expectedState = {
      offers: [],
      chosenCity: {
        name: 'Amsterdam',
        lat:  52.3909553943508,
        lng: 4.85309666406198,
        zoom: 10
      },
      chosenFilter:'popular',
      chosenOfferComments: null,
    };
    const initialState = {
      offers: [],
      chosenCity: {
        name: 'Amsterdam',
        lat:  52.3909553943508,
        lng: 4.85309666406198,
        zoom: 10
      },
      chosenFilter:'popular',
      chosenOfferComments: null,
    };
    const result = userActivity.reducer(initialState, changeCityToNothing);
    expect(result).toEqual(expectedState);
  });

  it('ChangesCityToHamburg', () => {
    const initialState = {
      offers: [],
      chosenCity: {
        name: 'Amsterdam',
        lat:  52.3909553943508,
        lng: 4.85309666406198,
        zoom: 10
      },
      chosenFilter:'popular',
      chosenOfferComments: null,
    };
    const result = userActivity.reducer(initialState, changeCityToHamburg);
    expect(result.chosenCity.name).toBe('Hamburg');
  });

  it('fetchAddCommentsAction', () => {
    const expectedState = {
      offers: [],
      chosenCity: {
        name: 'Amsterdam',
        lat:  52.3909553943508,
        lng: 4.85309666406198,
        zoom: 10
      },
      chosenFilter:'popular',
      chosenOfferComments: null,
    };
    const result = userActivity.reducer(expectedState, fetchAddFavouritesAction.fulfilled);
    expect(result).toEqual(expectedState);
  });

  it('using wrong filter', () => {
    const initialState = {
      offers: [],
      chosenCity: {
        name: 'Amsterdam',
        lat:  52.3909553943508,
        lng: 4.85309666406198,
        zoom: 10
      },
      chosenFilter:'popular',
      chosenOfferComments: null,
    };
    const expectedState = {
      offers: [],
      chosenCity: {
        name: 'Amsterdam',
        lat:  52.3909553943508,
        lng: 4.85309666406198,
        zoom: 10
      },
      chosenFilter:'popular',
      chosenOfferComments: null,
    };
    const result = userActivity.reducer(initialState, changeFilter('popular')); //should make default case to 'popular'
    expect(result.chosenFilter).toBe(expectedState.chosenFilter);

  });

  it('fetchRemoveFavouritesAction.fulfilled', () => {
    const initialState = {
      offers: [],
      chosenCity: {
        name: 'Amsterdam',
        lat:  52.3909553943508,
        lng: 4.85309666406198,
        zoom: 10
      },
      chosenFilter:'popular',
      chosenOfferComments: null,
    };
    const expectedState = {
      offers: [],
      chosenCity: {
        name: 'Amsterdam',
        lat:  52.3909553943508,
        lng: 4.85309666406198,
        zoom: 10
      },
      chosenFilter:'popular',
      chosenOfferComments: null,
    };
    const result = userActivity.reducer(initialState, fetchRemoveFavouritesAction.fulfilled);
    expect(result).toEqual(expectedState);
  });

  it('Checking fetchCommentsAction', () => {
    const initialState = {
      offers: [],
      chosenCity: {
        name: 'Amsterdam',
        lat:  52.3909553943508,
        lng: 4.85309666406198,
        zoom: 10
      },
      chosenFilter:'popular',
      chosenOfferComments: null,
    };
    const expectedState = {
      offers: [],
      chosenCity: {
        name: 'Amsterdam',
        lat:  52.3909553943508,
        lng: 4.85309666406198,
        zoom: 10
      },
      chosenFilter:'popular',
      chosenOfferComments: undefined
    };
    const result = userActivity.reducer(initialState, fetchCommentsAction.fulfilled);

    expect(result.chosenOfferComments).toBe(expectedState.chosenOfferComments);
  });

});
