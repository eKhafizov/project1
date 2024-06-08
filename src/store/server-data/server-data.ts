import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, Namespace } from '../const';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';

export type UserProcessType = {
  authorizationStatus: AuthorizationStatus;
};
//EVRT in this file has been made after optimization
const initialState : UserProcessType = {
  authorizationStatus: AuthorizationStatus.Unknown
};

export const serverData = createSlice({
  name: Namespace.serverData,
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  },
});
