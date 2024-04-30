import PropTypes from 'prop-types';

function Hero({ text, backgroundImage }) {
  return (
    <section
      className="relative flex items-center justify-center h-28 md:h-56  md:mb-10 mx-5 md:mx-12 lg:mx-24 text-white text-2xl md:text-4xl lg:text-5xl font-bold bg-cover bg-center rounded-lg md:rounded-3xl md:shadow-hero"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black to-black opacity-60 rounded-lg md:rounded-3xl"></div>
      <h2 className="relative md:text-shadow-hero ml-4 mr-22 md:m-0">{text}</h2>
    </section>
  );
}

Hero.propTypes = {
  text: PropTypes.string,
  backgroundImage: PropTypes.string,
};

export default Hero;
