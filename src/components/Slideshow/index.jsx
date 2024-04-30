import PropTypes from 'prop-types';
import arrowPrev from '../../assets/icons/arrow_prev.png';
import arrowForward from '../../assets/icons/arrow_forward.png';
import { useState } from 'react';

function Slideshow({ data }) {
  const [currentPicture, setCurrentPicture] = useState(0);

  const handlePrevious = () => {
    setCurrentPicture((prev) => (prev > 0 ? prev - 1 : data.length - 1));
  };

  const handleNext = () => {
    setCurrentPicture((prev) => (prev < data.length - 1 ? prev + 1 : 0));
  };

  const totalPictures = data.length;

  return (
    <div className="relative h-64 md:h-104 flex">
      {
        <button
          onClick={handlePrevious}
          className={`absolute left-1 md:left-0 top-1/2 md:top-40 z-10 ${data.length <= 1 ? 'hidden' : 'block'}`}
        >
          <img
            src={arrowPrev}
            alt="Flèche tournée vers la gauche"
            className="h-6 md:h-auto"
          />
        </button>
      }
      <img
        src={data[currentPicture]}
        alt="Housing"
        className="h-full rounded-3xl w-full object-cover"
      />
      {
        <button
          onClick={handleNext}
          className={`absolute right-1 md:right-0 top-1/2 md:top-40 z-10 ${data.length <= 1 ? 'hidden' : 'block'}`}
        >
          <img
            src={arrowForward}
            alt="Flèche tournée vers la droite"
            className="h-6 md:h-auto"
          />
        </button>
      }
      <span
        className={`absolute left-1/2 text-white text-sm md:text-lg bottom-1 md:bottom-8 ${data.length <= 1 ? 'hidden' : 'block'}`}
      >{`${currentPicture + 1} / ${totalPictures}`}</span>
    </div>
  );
}

Slideshow.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slideshow;
