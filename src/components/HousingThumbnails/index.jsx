import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../const';
import './HousingThumbnails.scss';

function HousingThumbnails({ data }) {
  return (
    <section className="housing-thumbnails">
      {data.map((item) => (
        <Link
          to={ROUTES.HOUSING + `/${item.id}`}
          key={item.id}
          className="housing-thumbnails__link"
        >
          <h3 className="housing-thumbnails__link__title">{item.title}</h3>
          <div className="housing-thumbnails__link__gradient"></div>
          <img
            src={item.cover}
            className="housing-thumbnails__link__image"
            alt={item.title}
          />
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
