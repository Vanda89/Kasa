import { Link } from 'react-router-dom';
import { ROUTES } from '../../const';
import './NotFound.scss';

function NotFound() {
  return (
    <div className="not-found">
      <p className="not-found__error-code">404</p>
      <p className="not-found__message">
        Oups! La page que
        <span className="not-found__message--block">
          {' '}
          vous demandez n&apos;existe pas.
        </span>
      </p>
      <Link to={ROUTES.HOME} className="not-found__link">
        Retourner sur la page d&apos;accueil
      </Link>
    </div>
  );
}

export default NotFound;
