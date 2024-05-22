import { createReducer } from '@reduxjs/toolkit';
import { changeCityToHamburg, changeCityToAmsterdam} from './actions';

//создаем initialState
export const initialState = {
  name: 'Amsterdam',
  lat:  52.3909553943508,
  lng: 4.85309666406198,
  zoom: 10
};

//создаем reducer, внутрь которого передаем initialState и делаем билдеры, к которым добавляем actionСreators
export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityToAmsterdam, (state) => {
      state.name = 'Amsterdam';
      state.lat = 52.3909553943508;
      state.lng = 4.85309666406198;
      state.zoom = 10;
    })
    .addCase(changeCityToHamburg, (state) => {
      state.name = 'Hamburg';
      state.lat = 53.541328;
      state.lng = 9.984355;
      state.zoom = 10;
    });
  //  .addCase(changeCityToParis, (state) => {
  //    state = {
  //      name: 'Paris',
  //      lat:  48.858093,
  //        lng: 2.294694,
  //      zoom: 10
  //    };
  //  })
  //  .addCase(changeCityToBarcelona, (state) => {
  //    state = {
  //    name: 'Barcelona',
  //    lat:  41.390205,
  //    lng: 2.154007,
  //      zoom: 10
  //    };
  //  })
  //  .addCase(changeCityToBrussels, (state) => {
  //    state = {
  //      name: 'Brussels',
  //      lat:  50.85034,
  //       lng: 4.35171,
  //       zoom: 10
  //     };
  //  })
  //  .addCase(changeCityToLisbon, (state) => {
  //     state = {
  //       name: 'Lisbon',
  //       lat:  38.736946,
  //       lng: -9.142685,
  //       zoom: 10
  //     };
  //  })
});

