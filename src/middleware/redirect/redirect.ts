import {PayloadAction} from '@reduxjs/toolkit';
import browserHistory from '../../browser-history';
import {Middleware} from 'redux';
import { rootReducer } from '../../store/root-reducer';

//укажем тип редусера
type Reducer = ReturnType<typeof rootReducer>;


//создадим функцию-middleware под названием редирект
export const redirect: Middleware<unknown, Reducer> =
  () =>
    (next) =>
      (action: PayloadAction<string>) => { //в качестве payload наша функция будет получать строку(action)
        if (action.type === 'game/redirectToRoute') { //если тип payload - редирект, то
          browserHistory.push(action.payload); //добавляем в массив с историей последний адрес перехода
        }
        return next(action);
      };
