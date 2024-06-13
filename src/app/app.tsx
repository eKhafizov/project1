import Main from '../pages/Main';
import {Route,Routes} from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';
import AppRoutes from '../components/AppRoutes';
import LoginPage from '../pages/LoginPage';
import RoomPage from '../pages/RoomPage';
import Layout from '../components/Layout';
import Page404 from '../pages/Page404';
import AppType from '../types/appType';
import HistoryRouter from '../history-route';
import browserHistory from '../browser-history';
import { useAppSelector } from '../hooks';
import ErrorPage from '../pages/ErrorPage';
import { getErrors } from '../store/offers-data/selector';
import FavouritePage from '../pages/FavouritePage';

function App(props: AppType): JSX.Element {

  const error = useAppSelector(getErrors);
  if (error) {
    return (<ErrorPage />);
  }

  return (
    <HistoryRouter history={browserHistory}>
      <ScrollToTop />
      <Routes>
        <Route path={AppRoutes.MAIN} element={<Layout />} >
          <Route index element={<Main locations={props.locations} />} />
          <Route path={AppRoutes.LOGIN} element={<LoginPage />} />
          <Route path={AppRoutes.FAVOURITES} element={<FavouritePage />} />
          <Route path={AppRoutes.ROOM} element={<RoomPage />} >
            <Route path=':id' element={<RoomPage />} />
          </Route>
          <Route path='*' element={<Page404 />}/>
        </Route>
      </Routes>
    </HistoryRouter>
  );
}

export default App;
