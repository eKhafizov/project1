import MockAdapter from 'axios-mock-adapter';
import createApi from '../../services/api';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';
import { APIRoute, AuthorizationStatus } from '../const';
import { serverData } from './server-data';
import thunk from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { RootState } from '../../types/state';
import { Action } from '@reduxjs/toolkit';
import { ThunkDispatch } from '@reduxjs/toolkit';

describe('ServerData reducer check', () => {
  const axios = createApi();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middlewares = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<
    RootState,
    Action<string>,
    ThunkDispatch<RootState, ReturnType<typeof createApi>, Action>
  >(middlewares);
  let store : ReturnType<typeof mockStoreCreator>;

  it('should change auth status after api to fulfilled', async () => {
    store = mockStoreCreator({SERVER_DATA: {authorizationStatus: AuthorizationStatus.NoAuth}});
    mockAxiosAdapter
      .onGet(APIRoute.Login)
      .reply(200, []);
    await store.dispatch(checkAuthAction());
    const emmitedActions = store.getActions();
    const checkAuthActionFulfilled = emmitedActions.at(1) as ReturnType<typeof checkAuthAction.fulfilled>;
    expect(checkAuthActionFulfilled.meta.requestStatus).toBe('fulfilled');
  });
  it('should change auth status after api to rejected', async () => {
    store = mockStoreCreator({SERVER_DATA: {authorizationStatus: AuthorizationStatus.NoAuth}});
    mockAxiosAdapter
      .onGet(APIRoute.Login)
      .reply(400, []);
    await store.dispatch(checkAuthAction());
    const emmitedActions = store.getActions();
    const checkAuthActionRejected = emmitedActions.at(1) as ReturnType<typeof checkAuthAction.rejected>;
    expect(checkAuthActionRejected.meta.requestStatus).toBe('rejected');
  });

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
