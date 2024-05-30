import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch } from '../types/state';
import { RootState } from '../types/state';
import { AxiosInstance } from 'axios';
import { loadOffers } from './actions';
import { OffersArrayType } from '../mocks/offers';
import { APIRoute } from './const';

/*
Создадим отдельный модуль в котором опишем асинхронные действия. В этих действиях будем выполнять запросы к серверу. На данном этапе нам потребуются следующие действия: для загрузки списка офферов.
*/
export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'data/fetchQuestions',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<OffersArrayType>(APIRoute.Offers);
    dispatch(loadOffers(data));
  },
);
