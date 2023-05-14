import React from 'react';

import './LandingPage.css';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <section className="landing-page-section">
      <div className="landing-page-text">
        <h1 className="landing-page-title">
          Descrubra infinitas possibilidades de cores!
        </h1>
        <p className="landing-page-desc">
          Não importa se você é um designer gráfico, um desenvolvedor web ou
          apenas alguém que adora criar belas composições de cores, pesquise
          através de diferentes formatos de cores e encontre todas as
          tonalidades que precisar!
        </p>
        <button className="landing-page-choose-btn">
          <Link to="/search-colors">PESQUISAR</Link>
        </button>
      </div>
      <img
        className="choosing-colors"
        src="images/choosing-colors.png"
        alt="person-choosing-a-color"
      />
    </section>
  );
}

export default LandingPage;
