import React, { useState } from 'react';

import ColorForm from '../../components/ColorForm/ColorForm';
import ColorsList from '../../components/ColorsList/ColorsList';

import './ColorsPage.css';

function ColorsPage() {
  const [color, setColor] = useState('#ff3333');
  return (
    <section className="colors-section">
      <ColorForm
        setColor={ setColor }
      />
      <ColorsList
        color={ color }
      />
    </section>
  );
}

export default ColorsPage;
