import React from 'react';
import PropTypes from 'prop-types';

import Copy from '../../svgs/Copy';

import './SingleColor.css';

function SingleColor(props) {
  const { color, weight, type } = props;
  const verifyType = type === 'shade';
  return (
    <article
      className="single-color"
      style={ { backgroundColor: color, color: verifyType ? 'white' : 'black' } }
    >
      <div className="color-info">
        <p>{ `${weight} ${color}` }</p>
        <button className="copy-button">
          <Copy
            stroke={ verifyType ? 'white' : 'black' }
          />
        </button>
      </div>
    </article>
  );
}

SingleColor.propTypes = {
  color: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default SingleColor;
