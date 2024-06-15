import { checkAuthAction, loginAction, logoutAction } from '../api-actions';
import { AuthorizationStatus } from '../const';
import { serverData } from './server-data';

describe('ServerData reducer check', () => {
  it('checkAuthAction', () => {
    const initialState = {
      authorizationStatus: AuthorizationStatus.Unknown
    };
    const expectedState = {
      authorizationStatus: AuthorizationStatus.Auth
    };
    const result = serverData.reducer(initialState, checkAuthAction.fulfilled);
    expect(result).toEqual(expectedState);
  });
  it('checkAuthAction reject', () => {
    const initialState = {
      authorizationStatus: AuthorizationStatus.Unknown
    };
    const expectedState = {
      authorizationStatus: AuthorizationStatus.NoAuth
    };
    const result = serverData.reducer(initialState, checkAuthAction.rejected);
    expect(result).toEqual(expectedState);
  });
  it('loginAction', () => {
    const initialState = {
      authorizationStatus: AuthorizationStatus.Unknown
    };
    const expectedState = {
      authorizationStatus: AuthorizationStatus.Auth
    };
    const result = serverData.reducer(initialState, loginAction.fulfilled);
    expect(result).toEqual(expectedState);
  });
  it('loginAction reject', () => {
    const initialState = {
      authorizationStatus: AuthorizationStatus.Unknown
    };
    const expectedState = {
      authorizationStatus: AuthorizationStatus.NoAuth
    };
    const result = serverData.reducer(initialState, loginAction.rejected);
    expect(result).toEqual(expectedState);
  });
  it('logout fulfilled', () => {
    const initialState = {
      authorizationStatus: AuthorizationStatus.Auth
    };
    const expectedState = {
      authorizationStatus: AuthorizationStatus.NoAuth
    };
    const result = serverData.reducer(initialState, logoutAction.fulfilled);
    expect(result).toEqual(expectedState);
  });
  it('logout rejected', () => {
    const initialState = {
      authorizationStatus: AuthorizationStatus.Auth
    };
    const expectedState = {
      authorizationStatus: AuthorizationStatus.Auth
    };
    const result = serverData.reducer(initialState, logoutAction.rejected);
    expect(result).toEqual(expectedState);
  });

});
