import arrow from '../../assets/icons/arrow.png';
import { useState } from 'react';
import PropTypes from 'prop-types';
import './Dropdown.scss';

function Dropdown({ title, content }) {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!active);
  };

  return (
    <div className={`dropdown ${active ? 'dropdown--active' : ''}`}>
      <div className="dropdown__title" onClick={handleToggle}>
        {title}
        <span
          className={`dropdown__title-icon ${active ? 'dropdown__title-icon--active' : ''}`}
        >
          <img
            src={arrow}
            className="dropdown__title-icon__image"
            alt="Icône en forme de flèche"
          />
        </span>
      </div>
      {active && (
        <div className="dropdown__content">
          {Array.isArray(content) ? (
            <ul className="dropdown__content-list">
              {content.map((item, index) => (
                <li key={index} className="dropdown__content-list__item">
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p className="dropdown__content-text">{content}</p>
          )}
        </div>
      )}
    </div>
  );
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
};

export default Dropdown;
