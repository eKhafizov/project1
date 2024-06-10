import { createSlice } from '@reduxjs/toolkit';
import { Namespace } from '../const';
import { fetchOffersAction, fetchOffersNearbyAction, fetchFavouritesAction} from '../api-actions';
import { OffersArrayType } from '../../mocks/offers';

//EVRT in this file has been made after optimization
export type ServiceDataType = {
  offers: OffersArrayType;
  error: boolean;
  isDataLoading: boolean;
  offersNearby: OffersArrayType | null;
  favouriteOffers: OffersArrayType;
}
const initialState : ServiceDataType = {
  offers: [],
  error: false,
  isDataLoading: true,
  offersNearby: null,
  favouriteOffers: []
};

export const offersData = createSlice({
  name: Namespace.offersData,
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder ///////////api-action
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isDataLoading = false;
      })
      .addCase(fetchOffersAction.rejected, (state, action) => {
        state.error = true;
      })
      .addCase(fetchOffersNearbyAction.fulfilled, (state, action) => {
        state.offersNearby = action.payload;
      }) ///////////api-action
      .addCase(fetchFavouritesAction.fulfilled, (state, action) => {
        state.favouriteOffers = action.payload;
      });
  },
});
