import { StarIcon } from '../Icons/StarIcon';
import { StarXsIcon } from '../Icons/StarXSIcon';
import Dropdown from '../../components/Dropdown';
import PropTypes from 'prop-types';
import './HousingCard.scss';

function HousingCard({ data }) {
  const starCount = Number(data.rating);
  const grayStarCount = 5 - starCount;

  return (
    <section className="housing-card">
      <div className="housing-card__content">
        <div className="housing-card__housing">
          <div className="housing-card__title">
            <h1 className="housing-card__title-name">{data.title}</h1>
            <h3 className="housing-card__title-location">{data.location}</h3>
          </div>
          <div className="housing-card__tags">
            {data.tags.map((tag, index) => (
              <p key={index} className="housing-card__tags-tag">
                {tag}
              </p>
            ))}
          </div>
        </div>
        <div className="housing-card__host">
          <div className="housing-card__host-infos">
            <h2 className="housing-card__host-infos-name">{data.host.name}</h2>
            <img
              src={data.host.picture}
              className="housing-card__host-infos-picture"
              alt="Photo de l'hôte du logement"
            />
          </div>

          <div className="housing-card__host-rating">
            {[...Array(starCount)].map((_, index) => (
              <div key={index}>
                <StarXsIcon
                  className="housing-card__host-rating-star-red housing-card__host-rating-star-xs"
                  alt="icône d'étoile rouge représentant la note de l'hébergement"
                />
                <StarIcon
                  className="housing-card__host-rating-star-red housing-card__host-rating-star-md"
                  alt="icône d'étoile rouge représentant la note de l'hébergement"
                />
              </div>
            ))}
            {[...Array(grayStarCount)].map((_, index) => (
              <div key={index}>
                <StarXsIcon
                  className="housing-card__host-rating-star-gray housing-card__host-rating-star-xs"
                  alt="icône d'étoile grise représentant la note de l'hébergement"
                />
                <StarIcon
                  className="housing-card__host-rating-star-gray housing-card__host-rating-star-md"
                  alt="icône d'étoile grise représentant la note de l'hébergement"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="housing-card__dropdowns flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between w-full gap-6 md:gap-16 ">
        <Dropdown title="Description" content={data.description} />

        <Dropdown title="Équipements" content={data.equipments} />
      </div>
    </section>
  );
}

HousingCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    host: PropTypes.shape({
      name: PropTypes.string,
      picture: PropTypes.string,
    }),
    rating: PropTypes.string,
    equipments: PropTypes.arrayOf(PropTypes.string),
    tags: PropTypes.arrayOf(PropTypes.string),
    location: PropTypes.string,
  }),
};

export default HousingCard;
