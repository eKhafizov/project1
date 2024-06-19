import { configureStore } from '@reduxjs/toolkit';
import createApi from '../services/api';
import { redirect } from '../middleware/redirect/redirect';
import { rootReducer } from './root-reducer';

//создадим аксиос в переменной api
const api = createApi();

//cконфигурируем хранилище
const store = configureStore({
  reducer: rootReducer, //укажем редюсером общий редюсер, который включает в себя слайсы
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ //подключим redux thunks(api-actions) в наше middleware
      thunk: {
        extraArgument: api //добавим axios экстраргументом в наши санки(api-actions)
      }
    }).concat(redirect), //подключим редирект middlware (browserHistory) в массив с остальным middleware
});

export default store;
