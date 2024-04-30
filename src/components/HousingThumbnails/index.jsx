import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../const';

function HousingThumbnails({ data }) {
  return (
    <section className="flex flex-wrap justify-center gap-5 md:gap-14 mx-5 md:mx-12 lg:mx-24 font-bold lg:bg-neutral-50 bg-none py-5 lg:py-14 rounded-3xl">
      {data.map((item) => (
        <Link
          to={ROUTES.HOUSING + `/${item.id}`}
          key={item.id}
          className="relative flex items-end w-85 h-56 lg:h-85 rounded-xl overflow-hidden"
        >
          <h3 className="absolute left-4 bottom-4 w-48 md:w-56 text-white text-lg z-20">
            {item.title}
          </h3>
          <div className="absolute bottom-0 w-full h-1/4 bg-gradient-to-t from-black opacity-45 to-transparent z-10"></div>
          <img src={item.cover} className="h-full w-full" alt={item.title} />
        </Link>
      ))}
    </section>
  );
}

HousingThumbnails.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      cover: PropTypes.string,
    }),
  ).isRequired,
};

export default HousingThumbnails;
