import { createAction } from '@reduxjs/toolkit';

//создаем actionsCreators
export const changeCityToHamburg = createAction('city/Hamburg');
export const changeCityToAmsterdam = createAction('city/Amsterdam');
export const changeCityToBrussels = createAction('city/Brussels');
export const changeCityToParis = createAction('city/Paris');
export const changeCityToBarcelona = createAction('city/Barcelona');
export const changeCityToLisbon = createAction('city/Lisbon');
export const changeCityToNothing = createAction('city/Nothing');
export const changeFilter = createAction<{type : string}>('filter/change');
