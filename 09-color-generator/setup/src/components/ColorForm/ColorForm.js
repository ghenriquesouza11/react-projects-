import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './ColorForm.css';
import Values from 'values.js';

import { toast } from 'react-toastify';

function ColorForm(props) {
  const { setColor } = props;

  const [colorInput, setColorInput] = useState('');

  const submitColorForm = (event) => {
    event.preventDefault();
    try {
      const shadesParam = 10;
      new Values(colorInput).all(shadesParam);
      setColor(colorInput);
    } catch (error) {
      toast.error('Cor inválida!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  };
  return (
    <form
      className="color-form"
      onSubmit={ (event) => submitColorForm(event) }
    >
      <label>
        Gerador de cores
        <input
          required
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
