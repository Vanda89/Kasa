import arrowBack from '../../assets/icons/arrow_back.png';
import { useState } from 'react';
import PropTypes from 'prop-types';

function Dropdown({ title, content, fontSize }) {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!active);
  };

  return (
    <div className={`dropdown ${active ? 'active' : ''} w-full`}>
      <div
        className={`dropdown-title relative bg-red-400 w-full pl-4 pt-2.5 pb-2 rounded-lg text-white text-left font-bold cursor-pointer ${fontSize}`}
        onClick={handleToggle}
      >
        {title}
        <span
          className={`absolute right-4 top-2 transform ${active ? 'rotate-180' : 'rotate-0'}`}
        >
          <img src={arrowBack} alt="Arrow Icon" />
        </span>
      </div>
      {active && (
        <div className="dropdown-content transition-all duration-200 ease-in-out transform origin-top scale-100 text-lg p-4 bg-grey-50 rounded-b-lg">
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
};

export default Dropdown;
