import { changeFilter } from '../actions';
import { fetchAddFavouritesAction, fetchCommentsAction, fetchRemoveFavouritesAction } from '../api-actions';
import { changeCityToHamburg, changeCityToNothing, userActivity } from './user-activity';


describe('UserActivity test', () => {

  it('Passing empty action into reducer', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      offers: [],
      chosenCity: {
        name: 'Amsterdam',
        lat:  52.3909553943508,
        lng: 4.85309666406198,
        zoom: 10
      },
      chosenFilter:'popular',
      chosenOfferComments: null,
    };
    const result = userActivity.reducer(expectedState, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('ChangeToNothing', () => {
    const expectedState = {
      offers: [],
      chosenCity: {
        name: 'Amsterdam',
        lat:  52.3909553943508,
        lng: 4.85309666406198,
        zoom: 10
      },
      chosenFilter:'popular',
      chosenOfferComments: null,
    };
    const initialState = {
      offers: [],
      chosenCity: {
        name: 'Amsterdam',
        lat:  52.3909553943508,
        lng: 4.85309666406198,
        zoom: 10
      },
      chosenFilter:'popular',
      chosenOfferComments: null,
    };
    const result = userActivity.reducer(initialState, changeCityToNothing);
    expect(result).toEqual(expectedState);
  });

  it('ChangesCityToHamburg', () => {
    const initialState = {
      offers: [],
      chosenCity: {
        name: 'Amsterdam',
        lat:  52.3909553943508,
        lng: 4.85309666406198,
        zoom: 10
      },
      chosenFilter:'popular',
      chosenOfferComments: null,
    };
    const result = userActivity.reducer(initialState, changeCityToHamburg);
    expect(result.chosenCity.name).toBe('Hamburg');
  });

  it('fetchAddCommentsAction', () => {
    const expectedState = {
      offers: [],
      chosenCity: {
        name: 'Amsterdam',
        lat:  52.3909553943508,
        lng: 4.85309666406198,
        zoom: 10
      },
      chosenFilter:'popular',
      chosenOfferComments: null,
    };
    const result = userActivity.reducer(expectedState, fetchAddFavouritesAction.fulfilled);
    expect(result).toEqual(expectedState);
  });

  it('using wrong filter', () => {
    const initialState = {
      offers: [],
      chosenCity: {
        name: 'Amsterdam',
        lat:  52.3909553943508,
        lng: 4.85309666406198,
        zoom: 10
      },
      chosenFilter:'popular',
      chosenOfferComments: null,
    };
    const expectedState = {
      offers: [],
      chosenCity: {
        name: 'Amsterdam',
        lat:  52.3909553943508,
        lng: 4.85309666406198,
        zoom: 10
      },
      chosenFilter:'popular',
      chosenOfferComments: null,
    };
    const result = userActivity.reducer(initialState, changeFilter('popular')); //should make default case to 'popular'
    expect(result.chosenFilter).toBe(expectedState.chosenFilter);

  });

  it('fetchRemoveFavouritesAction.fulfilled', () => {
    const initialState = {
      offers: [],
      chosenCity: {
        name: 'Amsterdam',
        lat:  52.3909553943508,
        lng: 4.85309666406198,
        zoom: 10
      },
      chosenFilter:'popular',
      chosenOfferComments: null,
    };
    const expectedState = {
      offers: [],
      chosenCity: {
        name: 'Amsterdam',
        lat:  52.3909553943508,
        lng: 4.85309666406198,
        zoom: 10
      },
      chosenFilter:'popular',
      chosenOfferComments: null,
    };
    const result = userActivity.reducer(initialState, fetchRemoveFavouritesAction.fulfilled);
    expect(result).toEqual(expectedState);
  });

  it('Checking fetchCommentsAction', () => {
    const initialState = {
      offers: [],
      chosenCity: {
        name: 'Amsterdam',
        lat:  52.3909553943508,
        lng: 4.85309666406198,
        zoom: 10
      },
      chosenFilter:'popular',
      chosenOfferComments: null,
    };
    const expectedState = {
      offers: [],
      chosenCity: {
        name: 'Amsterdam',
        lat:  52.3909553943508,
        lng: 4.85309666406198,
        zoom: 10
      },
      chosenFilter:'popular',
      chosenOfferComments: undefined
    };
    const result = userActivity.reducer(initialState, fetchCommentsAction.fulfilled);

    expect(result.chosenOfferComments).toBe(expectedState.chosenOfferComments);
  });


});
