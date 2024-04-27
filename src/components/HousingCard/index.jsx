import StarIcon from '../../components/icons/StarIcon';
import Dropdown from '../../components/Dropdown';
import PropTypes from 'prop-types';

function HousingCard({ data }) {
  const starCount = Number(data.rating);
  const grayStarCount = 5 - starCount;

  return (
    <section className="my-12 mx-24">
      <div className="flex justify-between gap-12">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl text-red-400">{data.title}</h1>
          <h3 className="text-lg">{data.location}</h3>
        </div>
        <div className="flex items-center gap-4">
          <h2 className=" text-red-400 text-right">{data.host.name}</h2>
          <img
            src={data.host.picture}
            className="w-16 h-16 bg-neutral-300 rounded-full"
            alt=""
          ></img>
        </div>
      </div>

      <div className="flex mb-2">
        <div className="flex gap-3 w-full my-5 text-white text-center text-sm font-bold">
          {data.tags.map((tag, index) => (
            <p key={index} className=" py-1 px-8 bg-red-400 rounded-xl">
              {tag}
            </p>
          ))}
        </div>

        <div className="flex items-center">
          {[...Array(starCount)].map((_, index) => (
            <StarIcon
              key={index}
              className="h-9 text-red-400"
              alt="icône d'étoile rouge représentant la note de l'hébergement"
            />
          ))}
          {[...Array(grayStarCount)].map((_, index) => (
            <StarIcon
              key={index}
              className="h-9 text-neutral-200"
              alt="icône d'étoile grise"
            />
          ))}
        </div>
      </div>

      <div className="dropdown-container flex justify-between w-full gap-16">
        <Dropdown
          title="Description"
          content={data.description}
          fontSize="text-lg"
        />
        <Dropdown
          title="Équipements"
          content={data.equipments}
          fontSize="text-lg"
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
