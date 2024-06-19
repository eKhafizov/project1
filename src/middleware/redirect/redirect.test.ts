import { MockStore, configureMockStore } from '@jedmao/redux-mock-store';
import { redirect } from '../redirect/redirect';
import { RootState } from '../../types/state';
import { AnyAction } from '@reduxjs/toolkit';
import AppRoutes from '../../components/AppRoutes/AppRoutes';
import { redirectToRoute } from '../../store/actions';

//делаем объект левой истории с методом push, который добавляет в location строку название пути(страницы)
const fakeHistory = {
  location: {pathname: ''},
  push(path: string) {
    this.location.pathname = path;
  }
};
jest.mock('../../browser-history.ts', () => fakeHistory); //используем jest чтобы смокать левую историю

describe('redirect test', () => {
  const middlewares = [redirect]; //cоздаем новый миддлвее с функцией(мидлвейной) редирект
  const mockStoreCreator = configureMockStore<RootState, AnyAction>(middlewares); //делаем моксторкреатор и передаем в него миддлвее
  const store : MockStore = mockStoreCreator(); // делаем мокстор с помочью моксторкреатор

  it('should return appLogin change in history', () => {
    store.dispatch(redirectToRoute(AppRoutes.LOGIN)); //передаем в стор объект с правильным экшном
    expect(fakeHistory.location.pathname).toBe(AppRoutes.LOGIN); //сравниваем объект, который мы запушили с нужным адресом экшном
  });

  it('should return no change in history if action is empty', () => {
    store.dispatch({type: '', payload: 'sss'}); //передаем в стор пустой экшн
    expect(fakeHistory.location.pathname).not.toBe('sss'); //проверяем, что в истории в сторе не изменился pathname
    expect(fakeHistory.location.pathname).toBe(AppRoutes.LOGIN); //проверяем, что в истории в сторе стоит предыдуший объект
  });

});
