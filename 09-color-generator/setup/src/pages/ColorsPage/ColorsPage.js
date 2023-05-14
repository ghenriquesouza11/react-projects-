import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';

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
      <ToastContainer
        position="top-right"
        autoClose={ 3000 }
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={ false }
        pauseOnFocusLoss
        draggable
        pauseOnHover={ false }
        theme="light"
      />
    </section>
  );
}

export default ColorsPage;
