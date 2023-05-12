import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './MainForm.css';

function MainForm(props) {
  const { setParagraphs } = props;

  const [paragraphsAmount, setParagraphsAmount] = useState('0');

  const handleGenerateSubmit = (e) => {
    e.preventDefault();
    setParagraphs(paragraphsAmount);
  };

  return (
    <form
      onSubmit={ (e) => handleGenerateSubmit(e) }
      className="main-form"
    >
      <label>
        Parágrafos:
        <input
          type="number"
          min={ 0 }
          max={ 8 }
          value={ paragraphsAmount }
          onChange={ ({ target }) => setParagraphsAmount(target.value) }
        />
      </label>
      <button
        type="submit"
        className="submit-btn"
      >
        Gerar
      </button>
    </form>
  );
}

MainForm.propTypes = {
  setParagraphs: PropTypes.func.isRequired,
};

export default MainForm;
