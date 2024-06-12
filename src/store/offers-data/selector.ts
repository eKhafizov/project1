import { OffersArrayType } from '../../mocks/offers';
import { RootState } from '../../types/state';
import { Namespace } from '../const';


export const getFavouriteOffers = (state: RootState) : OffersArrayType => state[Namespace.offersData].favouriteOffers;
export const isDataLoading = (state: RootState) : boolean => state[Namespace.offersData].isDataLoading;
export const getNearbyOffers = (state: RootState) : OffersArrayType | null => state[Namespace.offersData].offersNearby;
export const getErrors = (state: RootState) : boolean => state[Namespace.offersData].error;

