import { Namespace } from '../const';
import { getChosenCity, getCurrentFilter, getOfferComments, getOffers } from './selector';

describe('user-actitivity selectors test', () => {
  const state = {
    [Namespace.userActivity]: {
      offers: [],
      chosenCity: {
        name: 'Amsterdam',
        lat:  52.3909553943508,
        lng: 4.85309666406198,
        zoom: 10
      },
      chosenFilter:'popular',
      chosenOfferComments: null,
    }
  };

  it('should get(return) offers from state', () => {
    const {offers} = state[Namespace.userActivity];
    const result = getOffers(state);
    expect(result).toBe(offers);
  });
  it('should get(return) chosenFilter from state', () => {
    const {chosenFilter} = state[Namespace.userActivity];
    const result = getCurrentFilter(state);
    expect(result).toBe(chosenFilter);
  });
  it('should get(return) chosenOfferComments from state', () => {
    const {chosenOfferComments} = state[Namespace.userActivity];
    const result = getOfferComments(state);
    expect(result).toBe(chosenOfferComments);
  });
  it('should get(return) chosenCity from state', () => {
    const {chosenCity} = state[Namespace.userActivity];
    const result = getChosenCity(state);
    expect(result).toBe(chosenCity);
  });

});
