import { createAction } from '@reduxjs/toolkit';
import { OffersArrayType } from '../mocks/offers';
import { AuthorizationStatus} from '../store/const';
import AppRoutes from '../components/AppRoutes';
import { Comments } from '../types/appType';

//создаем actionsCreators
export const changeCityToHamburg = createAction('city/Hamburg');
export const changeCityToAmsterdam = createAction('city/Amsterdam');
export const changeCityToBrussels = createAction('city/Brussels');
export const changeCityToParis = createAction('city/Paris');
export const changeCityToDusseldorf = createAction('city/Dusseldorf');
export const changeCityToCologne = createAction('city/Cologne');
export const changeCityToNothing = createAction('city/Nothing');
export const changeFilter = createAction<string>('filter/change');
export const loadOffers = createAction<OffersArrayType>('data/loadOffers');
export const loadComments = createAction<Comments>('data/loadComments');
export const requireAuthorization = createAction<AuthorizationStatus>('auth/createAthoriztion');
export const setError = createAction<string | null>('data/setError');
export const setDataLoading = createAction<boolean>('data/isLoading');
export const redirectToRoute = createAction<AppRoutes>('game/redirectToRoute');
