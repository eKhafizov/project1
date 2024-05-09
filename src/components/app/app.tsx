import Main from '../../pages/Main';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import ScrollToTop from '../ScrollToTop';
import AppRoutes from '../AppRoutes';
import LoginPage from '../../pages/LoginPage';
import RoomPage from '../../pages/RoomPage';
import Layout from '../Layout';
import Page404 from '../../pages/Page404';
import { OffersArrayType } from '../../mocks/offers';


type AppType = {
  offers: OffersArrayType;
};

function App({offers}: AppType): JSX.Element {
  //console.log('props in app console', offers);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path={AppRoutes.MAIN} element={<Layout />} >
          <Route index element={<Main />} />
          <Route path={AppRoutes.LOGIN} element={<LoginPage />} />
          <Route path={AppRoutes.ROOM} element={<RoomPage />} />
          <Route path='*' element={<Page404 />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
