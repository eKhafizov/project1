import { createAction } from '@reduxjs/toolkit';
import AppRoutes from '../components/AppRoutes';

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

/*
HIDE EVRTH AFTER OPTIMISATION
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
export const addComments = createAction<Review>('data/addComments');
export const loadOffersNearby = createAction<OffersArrayType>('data/loadOffersNearby');
export const loadFavouritesOffers = createAction<OffersArrayType>('data/loadFavouriteOffers');
export const addFavouritesOffers = createAction<ServerResponse>('data/addFavouriteOffer');
export const removeFavouritesOffers = createAction<ServerResponse>('data/removeFavouriteOffer');
export const redirectToRoute = createAction<AppRoutes>('game/redirectToRoute');
export const setError = createAction<string | null>('data/setError');
export const setDataLoading = createAction<boolean>('data/isLoading');
*/
