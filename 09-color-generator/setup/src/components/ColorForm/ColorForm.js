import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './ColorForm.css';

function ColorForm(props) {
  const { setColor } = props;

  const [colorInput, setColorInput] = useState('');

  const submitColorForm = (event) => {
    event.preventDefault();
    setColor(colorInput);
  };
  return (
    <form
      className="color-form"
      onSubmit={ (event) => submitColorForm(event) }
    >
      <label>
        Gerador de cores
        <input
          placeholder="#ff3333"
          className="color-input"
          value={ colorInput }
          onChange={ ({ target }) => setColorInput(target.value) }
          type="text"
        />
      </label>
      <button
        className="color-form-submit-btn"
        type="submit"
        style={ { backgroundColor: colorInput } }
      >
        Buscar
      </button>
    </form>
  );
}

ColorForm.propTypes = {
  setColor: PropTypes.func.isRequired,
};

export default ColorForm;
