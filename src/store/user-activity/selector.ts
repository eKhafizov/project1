import { RootState } from '../../types/state';
import { Namespace } from '../const';
import { Comments } from '../../types/appType';
import { createSelector } from '@reduxjs/toolkit';
import { OffersArrayType } from '../../mocks/offers';
import { sortByPopularity, sortByPriceDown, sortByPriceUp } from '../../mocks/utils';

export const getChosenCity = (state: Pick<RootState, Namespace.userActivity>) : {name: string;lat: number;lng: number;zoom: number} => state[Namespace.userActivity].chosenCity;
export const getCurrentFilter = (state: Pick<RootState, Namespace.userActivity>) : string => state[Namespace.userActivity].chosenFilter;
export const getOfferComments = (state: Pick<RootState, Namespace.userActivity>) : Comments | null => state[Namespace.userActivity].chosenOfferComments;
export const getCurrentCity = (state: Pick<RootState, Namespace.userActivity>) : {name: string;lat: number;lng: number;zoom: number} => state[Namespace.userActivity].chosenCity;
export const getOffers = (state: Pick<RootState, Namespace.userActivity>) : OffersArrayType => state[Namespace.userActivity].offers;

//memoized selector
export const getTheSelector = createSelector(
  [getOffers, getCurrentFilter, getChosenCity],
  (offers, chosenFilter, chosenCity,) => {
    const offersInChosenCity = offers.filter((offer) => offer.city.name === chosenCity.name);
    switch(chosenFilter) {
      case 'popular':
        return [...offersInChosenCity];
      case 'priceLowToHigh':
        return [...offersInChosenCity].sort(sortByPriceUp);
      case 'priceHighToLow':
        return [...offersInChosenCity].sort(sortByPriceDown);
      case 'topRated':
        return [...offersInChosenCity].sort(sortByPopularity);
      default:
        return [...offersInChosenCity];
    }
  });
