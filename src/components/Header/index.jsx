import { Link } from 'react-router-dom';
import logo from '../../assets/logo/Kasa_logo.svg';
import { ROUTES } from '../../const';

function Header() {
  return (
    <header className="flex justify-between items-center mt-5 md:mt-14 mb-5 md:mb-12 mx-5 md:mx-12 lg:mx-24 gap-10">
      <div className="header-logo w-36 md:w-52">
        <Link to={ROUTES.HOME}>
          <img src={logo} alt="Kasa" />
        </Link>
      </div>
      <nav className="flex md:w-72 w-1/2 text-xs md:text-2xl uppercase md:capitalize">
        <ul className="flex flex-col items-center gap-2.5 xs:flex-row xs:gap-0 xs:justify-between w-full ">
          <li className="md:ml-8">
            <Link to={ROUTES.HOME}>Accueil</Link>
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
