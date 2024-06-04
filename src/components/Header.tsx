import { NavLink } from 'react-router-dom';
import AppRoutes from '../components/AppRoutes';
import { useAppDispatch, useAppSelector } from '../hooks';
import { logoutAction } from '../store/api-actions';
import { AuthorizationStatus } from '../store/const';

function Header(): JSX.Element {

  const dispatch = useAppDispatch();
  const authStatus = useAppSelector((state) => state.authorization);

  const offers = useAppSelector((state) => state.offers);
  const favouriteOffers = offers.filter((offer) => offer.isFavorite);

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
                  <NavLink to={AppRoutes.LOGIN} className="header__nav-link header__nav-link--profile" >
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">login</span>
                    {authStatus === AuthorizationStatus.Auth && (<span className="header__favorite-count">{favouriteOffers.length}</span>)}
                  </NavLink>
                </li>
                <li className="header__nav-item">
                  <button
                    className="header__nav-link"
                    onClick={dispatchLogout}
                  >
                    <span className="header__signout">Sign out</span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </nav>
    </header>);
}

export default Header;
