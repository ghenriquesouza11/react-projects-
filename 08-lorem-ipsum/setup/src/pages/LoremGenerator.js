import React, { useState } from 'react';

import MainForm from '../components/MainForm';
import LoremText from '../components/LoremText';

function LoremGenerator() {
  const [paragraphs, setParagraphs] = useState('0');

  return (
    <section>
      <MainForm
        setParagraphs={ setParagraphs }
      />
      <LoremText
        paragraphs={ paragraphs }
      />
    </section>
  );
}

export default LoremGenerator;
