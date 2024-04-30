import arrow from '../../assets/icons/arrow.png';
import { useState } from 'react';
import PropTypes from 'prop-types';

function Dropdown({ title, content, fontSize, width }) {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!active);
  };

  return (
    <div
      className={`dropdown ${active ? 'active' : ''} ${width} flex flex-col justify-center `}
    >
      <div
        className={`dropdown-title relative  bg-red-400 w-full pl-3 lg:pl-4 py-2 lg:py-4 rounded-lg text-white text-left font-bold cursor-pointer ${fontSize}`}
        onClick={handleToggle}
      >
        {title}
        <span
          className={`absolute right-4 transform ${active ? 'rotate-180 top-1.5 md:top-1/4 ' : 'rotate-0 top-1 md:top-1/4 '}`}
        >
          <img src={arrow} className="h-6 lg:h-auto" alt="Arrow Icon" />
        </span>
      </div>
      {active && (
        <div className="dropdown-content transition-all duration-200 ease-in-out transform origin-top scale-100 text-xs md:text-lg p-4 bg-grey-50 rounded-b-lg">
          {Array.isArray(content) ? (
            <ul>
              {content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{content}</p>
          )}
        </div>
      )}
    </div>
  );
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  fontSize: PropTypes.string,
  width: PropTypes.string,
};

export default Dropdown;
