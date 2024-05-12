import PropTypes from 'prop-types';
import './Hero.scss';

function Hero({ text, backgroundImage }) {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero__background"></div>
      <h2 className="hero__text">{text}</h2>
    </section>
  );
}

Hero.propTypes = {
  text: PropTypes.string,
  backgroundImage: PropTypes.string,
};

export default Hero;
