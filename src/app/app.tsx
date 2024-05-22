import Main from '../pages/Main';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';
import AppRoutes from '../components/AppRoutes';
import LoginPage from '../pages/LoginPage';
import RoomPage from '../pages/RoomPage';
import Layout from '../components/Layout';
import Page404 from '../pages/Page404';
import AppType from '../types/appType';


function App(props: AppType): JSX.Element {
  //console.log('props in app console', offers);
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path={AppRoutes.MAIN} element={<Layout />} >
          <Route index element={<Main offers={props.offers} comments={props.comments} locations={props.locations}/>} />
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
