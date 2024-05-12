import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo/Kasa_logo.svg';
import { ROUTES } from '../../const';
import './Header.scss';

function Header() {
  return (
    <header className="container-header">
      <div className="container-header__logo">
        <Link to={ROUTES.HOME}>
          <img src={logo} alt="Kasa" />
        </Link>
      </div>
      <nav className="container-header__nav">
        <ul className="container-header__nav-list">
          <li className="container-header__nav-item container-header__nav-item--first">
            <NavLink
              to={ROUTES.HOME}
              className={({ isActive }) =>
                'nav-link' + (isActive ? ' active-link' : '')
              }
            >
              Accueil
            </NavLink>
          </li>
          <li className="container-header__nav-item">
            <NavLink
              to={ROUTES.ABOUT}
              className={({ isActive }) =>
                'nav-link' + (isActive ? ' active-link' : '')
              }
            >
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
