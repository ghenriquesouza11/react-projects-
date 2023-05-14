import React from 'react';
import PropTypes from 'prop-types';

import './SingleColor.css';

function SingleColor(props) {
  const { color, weight, type } = props;
  const verifyType = type === 'tint';
  return (
    <article
      className="single-color"
      style={ { backgroundColor: color, color: verifyType ? 'black' : 'white' } }
    >
      <p>{color}</p>
      <p>{ weight }</p>
    </article>
  );
}

SingleColor.propTypes = {
  color: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default SingleColor;
