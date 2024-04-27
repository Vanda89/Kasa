import { Link } from 'react-router-dom';
import logo from '../../assets/logo/Kasa_logo.svg';
import { ROUTES } from '../../const';

function Header() {
  return (
    <header className="flex justify-between items-center mt-14 mx-24">
      <div className="header-logo w-52">
        <Link to={ROUTES.HOME}>
          <img src={logo} alt="Kasa" />
        </Link>
      </div>
      <nav className="flex w-72 text-2xl">
        <ul className="flex justify-between w-full">
          <li className="ml-8">
            <Link to={ROUTES.HOME} className="">
              Accueil
            </Link>
          </li>
          <li>
            <Link to={ROUTES.ABOUT}>A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
