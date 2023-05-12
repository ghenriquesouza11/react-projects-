import React from 'react';
import PropTypes from 'prop-types';

import data from '../data';

function LoremText(props) {
  const { paragraphs } = props;
  return (
    data.slice(0, paragraphs).map((paragraph, index) => (
      <p key={ index }>
        {paragraph}
      </p>
    ))
  );
}

LoremText.propTypes = {
  paragraphs: PropTypes.string.isRequired,
};

export default LoremText;
