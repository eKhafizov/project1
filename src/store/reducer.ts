import { createReducer } from '@reduxjs/toolkit';
import { changeCityToHamburg, changeCityToAmsterdam, changeCityToBarcelona, changeCityToBrussels, changeCityToLisbon, changeCityToParis, changeCityToRome, changeCityToDefault} from './actions';

//создаем initialState
export const initialState = {
  city: 'Amsterdam'
};
//создаем reducer, внутрь которого передаем initialState и делаем билдеры, к которым добавляем actionСreators
export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityToHamburg, (state) => {
      state.city = 'Hamburg';
    })
    .addCase(changeCityToParis, (state) => {
      state.city = 'Paris';
    })
    .addCase(changeCityToBarcelona, (state) => {
      state.city = 'Barcelona';
    })
    .addCase(changeCityToBrussels, (state) => {
      state.city = 'Brussels';
    })
    .addCase(changeCityToLisbon, (state) => {
      state.city = 'Lisbon';
    })
    .addCase(changeCityToRome, (state) => {
      state.city = 'Rome';
    })
    .addCase(changeCityToAmsterdam, (state) => {
      state.city = 'Amsterdam';
    })
    .addCase(changeCityToDefault, (state) => {
      state.city = 'Amsterdam';
    });
});

