import { createSlice } from '@reduxjs/toolkit';
import { Namespace } from '../const';
import { fetchCommentsAction, fetchAddCommentsAction, fetchAddFavouritesAction, fetchRemoveFavouritesAction } from '../api-actions/api-actions';
import { Comments } from '../../types/appType';
import { changeFilter } from '../actions';
import { OffersArrayType } from '../../mocks/offers';
import { fetchOffersAction } from '../api-actions/api-actions';

//EVRT in this file has been made after optimization
export type UserOptionsType = {
  offers: OffersArrayType;
  chosenCity: {
    name: string;
    lat: number;
    lng: number;
    zoom: number;
  };
  chosenFilter: string;
  chosenOfferComments: Comments | null;
}
const initialState : UserOptionsType = {
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


export const userActivity = createSlice({
  name: Namespace.userActivity,
  initialState: initialState,
  reducers: {
    changeCityToAmsterdam: (state) => {
      state.chosenCity.name = 'Amsterdam';
      state.chosenCity.lat = 52.3909553943508;
      state.chosenCity.lng = 4.85309666406198;
      state.chosenCity.zoom = 10;
    },
    changeCityToHamburg: (state) => {
      state.chosenCity.name = 'Hamburg';
      state.chosenCity.lat = 53.541328;
      state.chosenCity.lng = 9.984355;
      state.chosenCity.zoom = 10;
    },
    changeCityToParis: (state) => {
      state.chosenCity.name = 'Paris';
      state.chosenCity.lat = 48.858093;
      state.chosenCity.lng = 2.294694;
      state.chosenCity.zoom = 10;
    },
    changeCityToCologne: (state) => {
      state.chosenCity.name = 'Cologne';
      state.chosenCity.lat = 50.935173;
      state.chosenCity.lng = 6.953101;
      state.chosenCity.zoom = 10;
    },
    changeCityToBrussels: (state) => {
      state.chosenCity.name = 'Brussels';
      state.chosenCity.lat = 50.85034;
      state.chosenCity.lng = 4.35171;
      state.chosenCity.zoom = 10;
    },
    changeCityToDusseldorf: (state) => {
      state.chosenCity.name = 'Dusseldorf';
      state.chosenCity.lat = 51.233334;
      state.chosenCity.lng = 6.783333;
      state.chosenCity.zoom = 10;
    },
    changeCityToNothing: (state) => {
      state = {...state};
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
      })
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.chosenOfferComments = action.payload;
      })
      .addCase(fetchAddCommentsAction.fulfilled, (state) => {
        state = {...state};
      })
      .addCase(fetchAddFavouritesAction.fulfilled, (state) => {
        state = {...state};
      })
      .addCase(fetchRemoveFavouritesAction.fulfilled, (state) => {
        state = {...state};
      })
      .addCase(changeFilter, (state, action) => {
        state.chosenFilter = action.payload;
      });
  },
});

export const {changeCityToAmsterdam, changeCityToCologne, changeCityToBrussels, changeCityToDusseldorf, changeCityToHamburg, changeCityToNothing, changeCityToParis} = userActivity.actions;
