import React, { useState } from 'react';

import ColorForm from '../../components/ColorForm/ColorForm';
import ColorsList from '../../components/ColorsList/ColorsList';

function ColorsPage() {
  const [color, setColor] = useState('red');
  return (
    <section>
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
