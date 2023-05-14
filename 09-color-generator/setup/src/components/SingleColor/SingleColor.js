import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

import copy from 'copy-to-clipboard';

import Copy from '../../svgs/Copy';

import './SingleColor.css';

function SingleColor(props) {
  const { color, weight, type } = props;
  const verifyType = type === 'shade';

  const handleCopyButton = () => {
    copy(color);
    toast.success('Cor copiada!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
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
