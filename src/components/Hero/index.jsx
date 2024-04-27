import PropTypes from 'prop-types';

function Hero({ text, backgroundImage }) {
  return (
    <section
      className="relative flex items-center justify-center h-56 my-12 mx-24 text-white text-5xl font-bold bg-cover bg-center rounded-3xl shadow-hero"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black to-black opacity-60 rounded-3xl"></div>
      <h2 className="relative text-shadow-hero">{text}</h2>
    </section>
  );
}

Hero.propTypes = {
  text: PropTypes.string,
  backgroundImage: PropTypes.string,
};

export default Hero;
