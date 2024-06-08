import { combineReducers } from '@reduxjs/toolkit';
import { Namespace } from './const';
import { serverData } from './server-data/server-data';
import { offersData } from './offers-data/offers-data';
import { userActivity } from './user-activity/user-activity';

export const rootReducer = combineReducers({
  [Namespace.serverData] : serverData.reducer,
  [Namespace.offersData] : offersData.reducer,
  [Namespace.userActivity] : userActivity.reducer,
});
