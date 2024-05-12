import PropTypes from 'prop-types';
import arrowPrev from '../../assets/icons/arrow_prev.png';
import arrowForward from '../../assets/icons/arrow_forward.png';
import { useState } from 'react';
import './Slideshow.scss';

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
    <section className="slideshow">
      {
        <button
          onClick={handlePrevious}
          className={`slideshow__button slideshow__button--prev ${data.length <= 1 ? 'slideshow__button--hidden' : 'slideshow__button--block'}`}
        >
          <img
            src={arrowPrev}
            alt="Flèche tournée vers la gauche"
            className="slideshow__button-icon"
          />
        </button>
      }
      <img
        src={data[currentPicture]}
        alt="Housing"
        className="slideshow__picture"
      />
      {
        <button
          onClick={handleNext}
          className={`slideshow__button slideshow__button--next ${data.length <= 1 ? 'slideshow__button--hidden' : 'slideshow__button--block'}`}
        >
          <img
            src={arrowForward}
            alt="Flèche tournée vers la droite"
            className="slideshow__button-icon"
          />
        </button>
      }
      <span
        className={`slideshow__counter ${data.length <= 1 ? 'slideshow__counter--hidden' : 'slideshow__counter--block'}`}
      >{`${currentPicture + 1} / ${totalPictures}`}</span>
    </section>
  );
}

Slideshow.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slideshow;
