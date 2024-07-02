import { render, screen } from '@testing-library/react';
import withWrapper from '../mocks/withWrapper';
import testState from '../mocks/utils';
import App from './app';
import {locations } from '../mocks/offers';
import { MemoryHistory, createMemoryHistory } from 'history';
import AppRoutes from '../components/AppRoutes/AppRoutes';


describe('Testing app component', () => {

  it('should render MAIN PAGE with text Hamburg', () => {
    render(withWrapper(<App locations={locations}/>, testState));
    expect(screen.getByText('Hamburg')).toBeInTheDocument();
  });

  it('should render MAIN PAGE with text cities', () => {
    render(withWrapper(<App locations={locations} />, testState));
    expect(screen.getByText('Cities')).toBeInTheDocument();
  });

  it('render with mock history LOGIN PAGE with word Password', () => {
    const mockHistory : MemoryHistory = createMemoryHistory(); //создаем массив истории
    mockHistory.push(AppRoutes.LOGIN); // добавляем в массив истории добавляем нужную страницу
    render(withWrapper(<App locations={locations} />, testState, mockHistory)); //передаем в withWrapper не только компонент и состояние, но и массив истории
    expect(screen.getByText('Password')).toBeInTheDocument(); //перейдя на страницу ищем на ней нужную надпись
  });

  it('render with mock history LOGIN PAGE with word Sign in', () => {
    const mockHistory : MemoryHistory = createMemoryHistory();
    mockHistory.push(AppRoutes.LOGIN);
    render(withWrapper(<App locations={locations} />, testState, mockHistory));
    expect(screen.getByText('Sign in')).toBeInTheDocument();
  });

  it('render with mock history 404 PAGE', () => {
    const mockHistory : MemoryHistory = createMemoryHistory();
    mockHistory.push(AppRoutes.NONEXIST);
    render(withWrapper(<App locations={locations} />, testState, mockHistory));
    expect(screen.getByText(/This/)).toBeInTheDocument();
  });

  it('render with mock history RANDOM PAGE', () => {
    const mockHistory : MemoryHistory = createMemoryHistory();
    mockHistory.push('/sss');
    render(withWrapper(<App locations={locations} />, testState, mockHistory));
    expect(screen.getByText(/This/)).toBeInTheDocument();
  });

  it('render with mock history FAVOURITES PAGE', () => {
    const mockHistory : MemoryHistory = createMemoryHistory();
    mockHistory.push(AppRoutes.FAVOURITES);
    render(withWrapper(<App locations={locations} />, testState, mockHistory));
    expect(screen.getByText(/Saved listing/)).toBeInTheDocument();
  });

});

