import { OffersArrayType } from '../../mocks/offers';
import { RootState } from '../../types/state';
import { Namespace } from '../const';

//using to Pick<State, NameOfSlice> for testing purpose
export const getFavouriteOffers = (state: Pick<RootState, Namespace.offersData>) : OffersArrayType => state[Namespace.offersData].favouriteOffers;
export const isDataLoading = (state: Pick<RootState, Namespace.offersData>) : boolean => state[Namespace.offersData].isDataLoading;
export const getNearbyOffers = (state: Pick<RootState, Namespace.offersData>) : OffersArrayType | null => state[Namespace.offersData].offersNearby;
export const getErrors = (state: Pick<RootState, Namespace.offersData>) : boolean => state[Namespace.offersData].error;

