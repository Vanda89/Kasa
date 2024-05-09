import { StarIcon } from '../Icons/StarIcon';
import { StarXsIcon } from '../Icons/StarXSIcon';
import Dropdown from '../../components/Dropdown';
import PropTypes from 'prop-types';

function HousingCard({ data }) {
  const starCount = Number(data.rating);
  const grayStarCount = 5 - starCount;

  return (
    <section className="mb-7 lg:my-8 overflow-x-hidden">
      <div className="flex flex-col md:flex-row items-start justify-between md:mt-2">
        <div className="flex flex-col my-2 md:w-1/2 ">
          <div className="flex flex-col gap-2">
            <h1 className="text-lg md:text-2xl lg:text-4xl text-red-400 pr-18 lg:pr-0">
              {data.title}
            </h1>
            <h3 className="text-sm md:text-lg mb-4">{data.location}</h3>
          </div>
          <div className="flex flex-wrap md:flex-nowrap gap-3 w-full text-white text-center font-bold mb-3">
            {data.tags.map((tag, index) => (
              <p
                key={index}
                className="flex items-center justify-center w-22 md:w-28 p-1 bg-red-400 rounded-lg md:rounded-xl text-2.5 lg:text-sm"
              >
                {tag}
              </p>
            ))}
          </div>
        </div>

        <div className="flex flex-row-reverse justify-between md:flex-col md:justify-between w-full  lg:h-full md:w-1/2 mb-4 md:my-2 gap-6 md:gap-2 lg:gap-6 ">
          <div className="flex items-center md:justify-end  gap-4">
            <h2 className="text-red-400 text-right text-xs md:text-lg w-18 md:w-24">
              {data.host.name}
            </h2>
            <img
              src={data.host.picture}
              className="w-8 h-8 md:w-16 md:h-16 bg-neutral-300 rounded-full"
              alt=""
            ></img>
          </div>

          <div className="flex items-center justify-start md:justify-end ml-1 md:mr-1">
            {[...Array(starCount)].map((_, index) => (
              <div key={index}>
                <StarXsIcon
                  className="md:hidden text-red-400"
                  alt="icône d'étoile rouge représentant la note de l'hébergement"
                />
                <StarIcon
                  className="hidden md:block text-red-400"
                  alt="icône d'étoile rouge représentant la note de l'hébergement"
                />
              </div>
            ))}
            {[...Array(grayStarCount)].map((_, index) => (
              <div key={index}>
                <StarXsIcon
                  className="md:hidden text-neutral-400"
                  alt="icône d'étoile grise représentant la note de l'hébergement"
                />
                <StarIcon
                  className="hidden md:block text-neutral-400"
                  alt="icône d'étoile grise représentant la note de l'hébergement"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="dropdown-container flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between w-full gap-6 md:gap-16">
        <Dropdown
          title="Description"
          content={data.description}
          fontSize="text-sm md:text-lg"
          width="w-full md:w-full"
        />
        <Dropdown
          title="Équipements"
          content={data.equipments}
          fontSize="text-sm md:text-lg"
          width="w-full md:w-full"
        />
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
