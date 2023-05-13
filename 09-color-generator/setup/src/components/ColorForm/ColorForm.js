import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ColorForm(props) {
  const { setColor } = props;

  const [colorInput, setColorInput] = useState('');

  const submitColorForm = (event) => {
    event.preventDefault();
    setColor(colorInput);
  };
  return (
    <form onSubmit={ (event) => submitColorForm(event) }>
      <label>
        Gerador de cores
        <input
          value={ colorInput }
          onChange={ ({ target }) => setColorInput(target.value) }
          type="text"
        />
      </label>
      <button type="submit"> Buscar </button>
    </form>
  );
}

ColorForm.propTypes = {
  setColor: PropTypes.func.isRequired,
};

export default ColorForm;
