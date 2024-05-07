import { Outlet } from 'react-router-dom';
import Header from './Header';

function Layout(): JSX.Element {
  return (
    <>
      <Header />
      <Outlet />
      <footer>
      </footer>
    </>
  );
}

export default Layout;
