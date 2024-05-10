import Main from '../../pages/Main';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import ScrollToTop from '../ScrollToTop';
import AppRoutes from '../AppRoutes';
import LoginPage from '../../pages/LoginPage';
import RoomPage from '../../pages/RoomPage';
import Layout from '../Layout';
import Page404 from '../../pages/Page404';
import { OffersArrayType } from '../../mocks/offers';


export type AppType = {
  offers: OffersArrayType;
  location: string[];
};

function App({offers,location}: AppType): JSX.Element {
  //console.log('props in app console', offers);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path={AppRoutes.MAIN} element={<Layout />} >
          <Route index element={<Main location={location} offers={offers} />} />
          <Route path={AppRoutes.LOGIN} element={<LoginPage />} />
          <Route path={AppRoutes.ROOM} element={<RoomPage offers={offers}/>} >
            <Route path=':id' element={<RoomPage offers={offers}/>} />
          </Route>
          <Route path='*' element={<Page404 />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
