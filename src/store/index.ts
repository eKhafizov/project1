import { configureStore } from '@reduxjs/toolkit';
import createApi from '../services/api';
import { redirect } from './middlewares';
import { rootReducer } from './root-reducer';


const api = createApi();
//Cконфигурируем хранилище. Подключим `redux-thunk` в список middlewares
//Аргументом для `thunk` передадим сконфигурированный экземпляр `axios`,чтобы была возможность обратиться к нему из действия.
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      }
    }).concat(redirect),
});

export default store;
