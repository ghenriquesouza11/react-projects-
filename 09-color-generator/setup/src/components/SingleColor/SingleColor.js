import React from 'react';
import PropTypes from 'prop-types';

import './SingleColor.css';

function SingleColor(props) {
  const { color, weight, type } = props;
  const verifyType = type === 'shade';
  return (
    <article
      className="single-color"
      style={ { backgroundColor: color, color: verifyType ? 'white' : 'black' } }
    >
      <p>{ weight }</p>
      <p>{color}</p>
    </article>
  );
}

SingleColor.propTypes = {
  color: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default SingleColor;
