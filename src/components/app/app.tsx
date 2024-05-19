import Main from '../../pages/Main';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import ScrollToTop from '../ScrollToTop';
import AppRoutes from '../AppRoutes';
import LoginPage from '../../pages/LoginPage';
import RoomPage from '../../pages/RoomPage';
import Layout from '../Layout';
import Page404 from '../../pages/Page404';
import { CommentsType, OffersArrayType } from '../../mocks/offers';
import { City } from '../..';


export type AppType = {
  offers: OffersArrayType;
  location: string[];
  city: City;
  comments: CommentsType;
};


function App(props: AppType): JSX.Element {
  //console.log('props in app console', offers);
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path={AppRoutes.MAIN} element={<Layout />} >
          <Route index element={<Main location={props.location} offers={props.offers} city={props.city} comments={props.comments} />} />
          <Route path={AppRoutes.LOGIN} element={<LoginPage />} />
          <Route path={AppRoutes.ROOM} element={<RoomPage offers={props.offers} comments={props.comments} />} >
            <Route path=':id' element={<RoomPage offers={props.offers} comments={props.comments} />} />
          </Route>
          <Route path='*' element={<Page404 />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
