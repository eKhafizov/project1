import { createReducer } from '@reduxjs/toolkit';
import { changeCityToHamburg, changeCityToAmsterdam, changeCityToCologne, changeCityToBrussels, changeCityToDusseldorf, changeCityToNothing, changeCityToParis, changeFilter, loadOffers, setError, requireAuthorization, setDataLoading, loadComments, loadOffersNearby, loadFavouritesOffers} from './actions';
import { OffersArrayType } from '../mocks/offers';
import { AuthorizationStatus } from './const';
import { Comments } from '../types/appType';

type chosenCityType = {
  name: string;
  lat: number;
  lng: number;
  zoom: number;
}
type initialStateType = {
  chosenCity: chosenCityType;
  chosenFilter: string;
  offers: OffersArrayType;
  authorization: AuthorizationStatus;
  error: string | null;
  isDataLoading: boolean;
  chosenOfferComments: Comments | null;
  offersNearby: OffersArrayType | null;
  favouriteOffers: OffersArrayType | null;
}

//создаем initialState
export const initialState : initialStateType = {
  chosenCity: {
    name: 'Amsterdam',
    lat:  52.3909553943508,
    lng: 4.85309666406198,
    zoom: 10
  },
  chosenFilter:'popular',
  authorization: AuthorizationStatus.NoAuth,
  offers: [],
  error: null,
  isDataLoading: false,
  chosenOfferComments: null,
  offersNearby: null,
  favouriteOffers: null
};

//создаем reducer, внутрь которого передаем initialState и делаем билдеры, к которым добавляем actionСreators
export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityToAmsterdam, (state) => {
      state.chosenCity.name = 'Amsterdam';
      state.chosenCity.lat = 52.3909553943508;
      state.chosenCity.lng = 4.85309666406198;
      state.chosenCity.zoom = 10;
    })
    .addCase(changeCityToHamburg, (state) => {
      state.chosenCity.name = 'Hamburg';
      state.chosenCity.lat = 53.541328;
      state.chosenCity.lng = 9.984355;
      state.chosenCity.zoom = 10;
    })
    .addCase(changeCityToParis, (state) => {
      state.chosenCity.name = 'Paris';
      state.chosenCity.lat = 48.858093;
      state.chosenCity.lng = 2.294694;
      state.chosenCity.zoom = 10;
    })
    .addCase(changeCityToCologne, (state) => {
      state.chosenCity.name = 'Cologne';
      state.chosenCity.lat = 50.935173;
      state.chosenCity.lng = 6.953101;
      state.chosenCity.zoom = 10;
    })
    .addCase(changeCityToBrussels, (state) => {
      state.chosenCity.name = 'Brussels';
      state.chosenCity.lat = 50.85034;
      state.chosenCity.lng = 4.35171;
      state.chosenCity.zoom = 10;
    })
    .addCase(changeCityToDusseldorf, (state) => {
      state.chosenCity.name = 'Dusseldorf';
      state.chosenCity.lat = 51.233334;
      state.chosenCity.lng = 6.783333;
      state.chosenCity.zoom = 10;
    })
    .addCase(changeCityToNothing, (state) => {
      state = {...state};
    })
    .addCase(changeFilter, (state, action) => {
      state.chosenFilter = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadOffersNearby, (state, action) => {
      state.offersNearby = action.payload;
    })
    .addCase(loadFavouritesOffers, (state, action) => {
      state.favouriteOffers = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.chosenOfferComments = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorization = action.payload;
    })
    .addCase(setDataLoading, (state, action) => {
      state.isDataLoading = action.payload;
    });
});

