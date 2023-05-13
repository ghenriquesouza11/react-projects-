import React from 'react';
import PropTypes from 'prop-types';

function SingleColor(props) {
  const { color, weight } = props;
  return (
    <article style={ { backgroundColor: color } }>
      <p>{color}</p>
      <p>{ weight }</p>
    </article>
  );
}

SingleColor.propTypes = {
  color: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
};

export default SingleColor;
