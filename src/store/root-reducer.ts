import { combineReducers } from '@reduxjs/toolkit';
import { Namespace } from './const';
import { userProcess } from './user-data';
import { serviceData } from './service-data';
import { userOptions } from './user-options';

export const rootReducer = combineReducers({
  [Namespace.User] : userProcess.reducer,
  [Namespace.Data] : serviceData.reducer,
  [Namespace.ChosenOptions] : userOptions.reducer,
});
