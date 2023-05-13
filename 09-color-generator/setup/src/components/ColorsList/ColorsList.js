import React from 'react';
import PropTypes from 'prop-types';
import Values from 'values.js';

import SingleColor from '../SingleColor/SingleColor';

function ColorsList(props) {
  const { color } = props;
  const colorValues = new Values(color);
  const shadesParam = 10;
  const allColorValues = colorValues.all(shadesParam);
  console.log(allColorValues);
  return (
    allColorValues.map((singleColor) => {
      const { hex, weight } = singleColor;
      return (
        <SingleColor
          key={ hex }
          weight={ `${weight}%` }
          color={ `#${hex}` }
        />
      );
    })
  );
}

ColorsList.propTypes = {
  color: PropTypes.string.isRequired,
};

export default ColorsList;
