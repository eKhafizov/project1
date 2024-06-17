import { NavLink } from 'react-router-dom';
import AppRoutes from '../components/AppRoutes';
import { useAppDispatch, useAppSelector } from '../hooks';
import { logoutAction } from '../store/api-actions/api-actions';
import { AuthorizationStatus } from '../store/const';
import {getAuthorization} from '../store/server-data/selector';
import {getFavouriteOffers} from '../store/offers-data/selector';

function Header(): JSX.Element {

  const authStatus = useAppSelector(getAuthorization);
  const favouriteOffers = useAppSelector(getFavouriteOffers);

  const dispatch = useAppDispatch();
  const dispatchLogout = () => {
    authStatus === AuthorizationStatus.Auth && dispatch(logoutAction());
  };

  return (
    <header className="header">
      <nav>
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <NavLink to={AppRoutes.MAIN} className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </NavLink>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <NavLink to={authStatus === AuthorizationStatus.Auth ? AppRoutes.FAVOURITES : AppRoutes.LOGIN} className="header__nav-link header__nav-link--profile" >
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">login</span>
                    {authStatus === AuthorizationStatus.Auth && (<span className="header__favorite-count">{favouriteOffers && favouriteOffers.length}</span>)}
                  </NavLink>
                </li>
                <li className="header__nav-item">
                  <NavLink
                    to={AppRoutes.MAIN}
                    className="header__nav-link"
                    onClick={dispatchLogout}
                  >
                    <span className="header__signout">Sign out</span>
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </nav>
    </header>);
}

export default Header;
