import { createReducer } from '@reduxjs/toolkit';
import { changeCityToHamburg, changeCityToAmsterdam, changeCityToBarcelona, changeCityToBrussels, changeCityToLisbon, changeCityToNothing, changeCityToParis, changeFilter} from './actions';

//создаем initialState
export const initialState = {
  chosenCity: {
    name: 'Amsterdam',
    lat:  52.3909553943508,
    lng: 4.85309666406198,
    zoom: 10
  },
  chosenFilter:'popular'
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
    .addCase(changeCityToBarcelona, (state) => {
      state.chosenCity.name = 'Barcelona';
      state.chosenCity.lat = 41.390205;
      state.chosenCity.lng = 2.154007;
      state.chosenCity.zoom = 10;
    })
    .addCase(changeCityToBrussels, (state) => {
      state.chosenCity.name = 'Brussels';
      state.chosenCity.lat = 50.85034;
      state.chosenCity.lng = 4.35171;
      state.chosenCity.zoom = 10;
    })
    .addCase(changeCityToLisbon, (state) => {
      state.chosenCity.name = 'Lisbon';
      state.chosenCity.lat = 38.736946;
      state.chosenCity.lng = -9.142685;
      state.chosenCity.zoom = 10;
    })
    .addCase(changeCityToNothing, (state) => {
      state = {...state};
    })
    .addCase(changeFilter, (state, type) => {
      state.chosenFilter = type.payload.type;
    });
});

