import React, { useState } from 'react';

import MainForm from '../../components/MainForm/MainForm';
import LoremText from '../../components/LoremText/LoremText';

import './LoremGenerator.css';

function LoremGenerator() {
  const [paragraphs, setParagraphs] = useState('0');

  return (
    <section className="lorem-section">
      <h1>CANSADO DE LOREM IPSUM ENTEDIANTE?</h1>
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
