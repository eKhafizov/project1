import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch } from '../types/state';
import { RootState } from '../types/state';
import { AxiosInstance } from 'axios';
import { loadOffers, redirectToRoute, requireAuthorization, setDataLoading, setError, loadComments, loadOffersNearby, loadFavouritesOffers, addFavouritesOffers, removeFavouritesOffers, addComments} from './actions';
import { OffersArrayType } from '../mocks/offers';
import { APIRoute, AuthorizationStatus, AuthData, UserData, TIMEOUT_SHOW_ERROR} from './const';
import { dropToken, saveToken } from '../services/token';
import AppRoutes from '../components/AppRoutes';
import store from '.';
import { Comments } from '../types/appType';
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
//thunk для загрузки мест рядом
export const fetchOffersNearbyAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'data/fetchOffersNearby',
  async (offerId, {dispatch, extra: api}) => {
    const {data} = await api.get<OffersArrayType>(`${APIRoute.Offers}/${offerId}/nearby`);
    dispatch(loadOffersNearby(data));
  },
);


//thunk для загрузки комментов с сервера
//number здесь отвечает за тип offerId. А offerId - за аргумент, который мы добавим в качестве запроса к серверу внутри функции
export const fetchCommentsAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'data/fetchComments',
  async (offerId, {dispatch, extra: api}) => {
    const {data} = await api.get<Comments>(`${APIRoute.Comments}/${offerId}`);
    dispatch(loadComments(data));
  },
);

//thunk для отправки коммента на сервер
export const fetchAddCommentsAction = createAsyncThunk<
void,
DataCommentType,
{
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}
>(
  'data/fetchAddComment',
  async ({ id, comment, rating } , {dispatch, extra: api}) => {
    const {data} = await api.post<Review>(`${APIRoute.Comments}/${id}`, {comment, rating});
    dispatch(addComments(data));
  },
);


//thunk для списка favourites
export const fetchFavouritesAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'data/fetchFavouritesOffers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<OffersArrayType>(APIRoute.Favourite);
    dispatch(loadFavouritesOffers(data));
  },
);
//thunk для добавление в список favourites
export const fetchAddFavouritesAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'data/fetchAddFavouritesOffer',
  async (offerId, {dispatch, extra: api}) => {
    const {data} = await api.post<ServerResponse>(`${APIRoute.Favourite}/${offerId}/1`);
    dispatch(addFavouritesOffers(data));
  },
);
//thunk для удаления из списка favourites
export const fetchRemoveFavouritesAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'data/fetchAddFavouritesOffer',
  async (offerId, {dispatch, extra: api}) => {
    const {data} = await api.post<ServerResponse>(`${APIRoute.Favourite}/${offerId}/0`);
    dispatch(removeFavouritesOffers(data));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
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
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoutes.MAIN));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);

export const clearErrorAction = createAsyncThunk(
  'data/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);
