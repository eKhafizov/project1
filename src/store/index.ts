import { configureStore } from '@reduxjs/toolkit';
import {reducer} from './reducer';
import createApi from '../services/api';
import { redirect } from './middlewares';

const api = createApi();

//Cконфигурируем хранилище. Подключим `redux-thunk` в список middlewares
//Аргументом для `thunk` передадим сконфигурированный экземпляр `axios`,чтобы была возможность обратиться к нему из действия.
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      }
    }).concat(redirect),
});

export default store;
