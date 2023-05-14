import React from 'react';
import PropTypes from 'prop-types';

import copy from 'copy-to-clipboard';

import Copy from '../../svgs/Copy';

import './SingleColor.css';

function SingleColor(props) {
  const { color, weight, type } = props;
  const verifyType = type === 'shade';

  const handleCopyButton = () => {
    copy(color);
  };
  return (
    <article
      className="single-color"
      style={ { backgroundColor: color, color: verifyType ? 'white' : 'black' } }
    >
      <div className="color-info">
        <p>{ weight }</p>
        <button
          onClick={ () => handleCopyButton() }
          className="copy-button"
        >
          <Copy
            stroke={ verifyType ? 'white' : 'black' }
          />
        </button>
      </div>
      <p>{ color }</p>
    </article>
  );
}

SingleColor.propTypes = {
  color: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default SingleColor;
