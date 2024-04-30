import { Link } from 'react-router-dom';
import { ROUTES } from '../../const';

function NotFound() {
  return (
    <div className="flex flex-col items-center gap-28 mb-28">
      <p className=" text-8xl md:text-9xl lg:text-72 text-red-400 font-bold leading-none mt-20 md:mt-12">
        404
      </p>
      <p className="text-lg md:text-2xl lg:text-4xl text-center text-red-400">
        Oups! La page que
        <span className="lg:inline block">
          {' '}
          vous demandez n&apos;existe pas.
        </span>
      </p>
      <Link
        to={ROUTES.HOME}
        className="underline text-sm md:text-lg font-medium"
      >
        Retourner sur la page d&apos;accueil
      </Link>
    </div>
  );
}

export default NotFound;
