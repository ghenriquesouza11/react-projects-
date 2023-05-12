import React from 'react';
import PropTypes from 'prop-types';

import data from '../../data';

import './LoremText.css';

function LoremText(props) {
  const { paragraphs } = props;
  return (
    <article className="lorem-text">
      {
        data.slice(0, paragraphs).map((paragraph, index) => (
          <p
            className="lorem-paragraph"
            key={ index }
          >
            {paragraph}
          </p>
        ))
      }
    </article>
  );
}

LoremText.propTypes = {
  paragraphs: PropTypes.string.isRequired,
};

export default LoremText;
