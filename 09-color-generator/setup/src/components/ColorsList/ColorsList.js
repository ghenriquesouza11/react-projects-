import React from 'react';
import PropTypes from 'prop-types';
import Values from 'values.js';

import SingleColor from '../SingleColor/SingleColor';

import './ColorsList.css';

function ColorsList(props) {
  const { color } = props;
  const colorValues = new Values(color);
  const shadesParam = 10;
  const allColorValues = colorValues.all(shadesParam);
  console.log(allColorValues);
  return (
    <ul className="colors-list">
      {
        allColorValues.map((singleColor) => {
          const { hex, weight, type } = singleColor;
          return (
            <li key={ hex }>
              <SingleColor
                weight={ `${weight}%` }
                color={ `#${hex}` }
                type={ type }
              />
            </li>
          );
        })
      }
    </ul>
  );
}

ColorsList.propTypes = {
  color: PropTypes.string.isRequired,
};

export default ColorsList;
