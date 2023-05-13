import React, { useState } from 'react';

function ColorForm() {
  const [colorInput, setColorInput] = useState('');

  const submitColorForm = (event) => {
    event.preventDefault();
    console.log('Botão funcionando!');
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

export default ColorForm;
