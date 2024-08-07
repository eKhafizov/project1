import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch } from '../../types/state';
import { RootState } from '../../types/state';
import { AxiosInstance } from 'axios';
import { redirectToRoute} from '.././actions';
import { OffersArrayType } from '../../mocks/offers';
import { APIRoute, AuthData, UserData} from '.././const';
import { dropToken, saveToken } from '../../services/token';
import AppRoutes from '../../components/AppRoutes/AppRoutes';
import { Comments } from '../../types/appType';
import { ServerResponse } from 'http';


export type DataCommentType = {id: number;
  comment: string;
  rating: number;}
export type Review = {
    id: string;
    date: string;
    user: {
      name: string;
      avatarUrl: string;
      isPro: boolean;
    };
    comment: string;
    rating: number;
  };

/*
Создадим отдельный модуль в котором опишем асинхронные действия. В этих действиях будем выполнять запросы к серверу. На данном этапе нам потребуются следующие действия: для загрузки списка офферов, проверки наличия авторизации и отправки данных для прохождения аутентификации, отправки запроса на выход из приложения.
*/

//AFTER OPTIMIZATION
//thunk для загрузки офферов с сервера
export const fetchOffersAction = createAsyncThunk<OffersArrayType,undefined,{dispatch: AppDispatch;state: RootState;extra: AxiosInstance}>(
  'data/fetchQuestions',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<OffersArrayType>(APIRoute.Offers);
    return data; //эта дата потом попадает в payload в addCase сразу внутри reducer/createSlice
  },
);

/*
//BEFORE OPTIMIZATION
//thunk для загрузки офферов с сервера
export const fetchOffersAction = createAsyncThunk<
void,
undefined,
{
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'data/fetchQuestions',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setDataLoading(true));
    const {data} = await api.get<OffersArrayType>(APIRoute.Offers);
    dispatch(setDataLoading(false));
    dispatch(loadOffers(data));
  },
);
*/

//thunk для загрузки мест рядом
export const fetchOffersNearbyAction = createAsyncThunk<OffersArrayType, number, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'data/fetchOffersNearby',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<OffersArrayType>(`${APIRoute.Offers}/${offerId}/nearby`);
    return data;
  },
);


//thunk для загрузки комментов с сервера
//number здесь отвечает за тип offerId. А offerId - за аргумент, который мы добавим в качестве запроса к серверу внутри функции
export const fetchCommentsAction = createAsyncThunk<Comments, number, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'data/fetchComments',
  async (offerId, { extra: api}) => {
    const {data} = await api.get<Comments>(`${APIRoute.Comments}/${offerId}`);
    return data;
  },
);

//thunk для отправки коммента на сервер
export const fetchAddCommentsAction = createAsyncThunk<
Review,
DataCommentType,
{
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}
>(
  'data/fetchAddComment',
  async ({ id, comment, rating } , {extra: api}) => {
    const {data} = await api.post<Review>(`${APIRoute.Comments}/${id}`, {comment, rating});
    return data;
  },
);


//thunk для списка favourites
export const fetchFavouritesAction = createAsyncThunk<OffersArrayType, undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'data/fetchFavouritesOffers',
  async (_arg, { extra: api}) => {
    const {data} = await api.get<OffersArrayType>(APIRoute.Favourite);
    return data;
  },
);
//thunk для добавление в список favourites
export const fetchAddFavouritesAction = createAsyncThunk<ServerResponse, number, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'data/fetchAddFavouritesOffer',
  async (offerId, {extra: api}) => {
    const {data} = await api.post<ServerResponse>(`${APIRoute.Favourite}/${offerId}/1`);
    return data;
  },
);
//thunk для удаления из списка favourites
export const fetchRemoveFavouritesAction = createAsyncThunk<
ServerResponse,
number,
{
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'data/fetchRemoveFavouritesOffer',
  async (offerId, {extra: api}) => {
    const {data} = await api.post<ServerResponse>(`${APIRoute.Favourite}/${offerId}/0`);
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    await api.get(APIRoute.Login);
  },
);


export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(redirectToRoute(AppRoutes.MAIN));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);
