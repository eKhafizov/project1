import { Namespace } from '../const';
import { getErrors, getFavouriteOffers, getNearbyOffers } from './selector';

describe('selectors in offers-data', () => {
  const state = {
    [Namespace.offersData] : {
      favouriteOffers: [],
      isDataLoading: true,
      offersNearby: null,
      error: false
    }
  };

  it('should get(return) favourite offers from state', () => {
    const {favouriteOffers} = state[Namespace.offersData];
    const result = getFavouriteOffers(state);
    expect(result).toBe(favouriteOffers);
  });
  it('should get(return) isDataLoading status from state', () => {
    const {isDataLoading} = state[Namespace.offersData];
    const result = isDataLoading;
    expect(result).toBe(isDataLoading);
  });
  it('should get(return) error status from state', () => {
    const {error} = state[Namespace.offersData];
    const result = getErrors(state);
    expect(result).toBe(error);
  });
  it('should get(return) offersNearBy from state', () => {
    const {offersNearby} = state[Namespace.offersData];
    const result = getNearbyOffers(state);
    expect(result).toBe(offersNearby);
  });

});
