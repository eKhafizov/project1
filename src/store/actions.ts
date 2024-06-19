import { createAction } from '@reduxjs/toolkit';
import AppRoutes from '../components/AppRoutes/AppRoutes';

//создаем actionsCreators
export const redirectToRoute = createAction<AppRoutes>('game/redirectToRoute');
export const changeCityToHamburg = createAction('city/Hamburg');
export const changeCityToAmsterdam = createAction('city/Amsterdam');
export const changeCityToBrussels = createAction('city/Brussels');
export const changeCityToParis = createAction('city/Paris');
export const changeCityToDusseldorf = createAction('city/Dusseldorf');
export const changeCityToCologne = createAction('city/Cologne');
export const changeCityToNothing = createAction('city/Nothing');
export const changeFilter = createAction<string>('filter/change');
