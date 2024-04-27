import { Link } from 'react-router-dom';
import { ROUTES } from '../../const';

function NotFound() {
  return (
    <div className="flex flex-col items-center gap-16 py-24">
      <h1 className="h-30 text-72 text-red-400 font-bold leading-normal">
        404
      </h1>
      <p className="text-4xl text-red-400 mb-24">
        Oups! La page que vous demandez n&apos;existe pas.
      </p>
      <Link to={ROUTES.HOME} className="underline font-medium">
        Retourner sur la page d&apos;accueil
      </Link>
    </div>
  );
}

export default NotFound;
