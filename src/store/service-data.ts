import { createSlice } from '@reduxjs/toolkit';
import { Namespace } from './const';
import { fetchOffersAction, fetchOffersNearbyAction, fetchFavouritesAction} from './api-actions';
import { OffersArrayType } from '../mocks/offers';
import { RootState } from '../types/state';

//EVRT in this file has been made after optimization
export type ServiceDataType = {
  offers: OffersArrayType;
  error: string | null;
  isDataLoading: boolean;
  offersNearby: OffersArrayType | null;
  favouriteOffers: OffersArrayType;
}
const initialState : ServiceDataType = {
  offers: [],
  error: null,
  isDataLoading: true,
  offersNearby: null,
  favouriteOffers: []
};

export const serviceData = createSlice({
  name: Namespace.Data,
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isDataLoading = false;
      })
      .addCase(fetchOffersNearbyAction.fulfilled, (state, action) => {
        state.offersNearby = action.payload;
      })
      .addCase(fetchFavouritesAction.fulfilled, (state, action) => {
        state.favouriteOffers = action.payload;
      });
  },
});

export const getOffers = (state: RootState) : OffersArrayType => state[Namespace.Data].offers;
export const getFavouriteOffers = (state: RootState) : OffersArrayType => state[Namespace.Data].favouriteOffers;
export const isDataLoading = (state: RootState) : boolean => state[Namespace.Data].isDataLoading;
