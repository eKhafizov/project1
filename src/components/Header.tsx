import { NavLink } from 'react-router-dom';
import AppRoutes from '../components/AppRoutes';

function Header(): JSX.Element {
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
                    <span className="header__favorite-count">3</span>
                  </NavLink>
                </li>
                <li className="header__nav-item">
                  <NavLink to={AppRoutes.LOGIN} className="header__nav-link">
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
