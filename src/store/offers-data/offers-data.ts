import { createSlice } from '@reduxjs/toolkit';
import { Namespace } from '../const';
import { fetchOffersNearbyAction, fetchFavouritesAction} from '../api-actions';
import { OffersArrayType } from '../../mocks/offers';

//EVRT in this file has been made after optimization
export type ServiceDataType = {
  error: boolean;
  isDataLoading: boolean;
  offersNearby: OffersArrayType | null;
  favouriteOffers: OffersArrayType;
}
const initialState : ServiceDataType = {
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
      .addCase(fetchOffersNearbyAction.fulfilled, (state, action) => {
        state.offersNearby = action.payload;
      }) ///////////api-action
      .addCase(fetchFavouritesAction.fulfilled, (state, action) => {
        state.favouriteOffers = action.payload;
      });
  },
});
