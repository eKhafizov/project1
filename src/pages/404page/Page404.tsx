import { NavLink } from 'react-router-dom';
import AppRoutes from '../../components/AppRoutes';

function Page404(): JSX.Element {
  return (
    <>
      <h1>
        This page doesnt exist
      </h1>
      <NavLink to={AppRoutes.MAIN} >
        <span>Visit our main page</span>
      </NavLink>
    </>
  );
}

export default Page404;
