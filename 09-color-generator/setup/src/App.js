import React from 'react';
import { Route, Routes } from 'react-router-dom';

import ColorsPage from './pages/ColorsPage/ColorsPage';
import LandingPage from './pages/LandingPage/LandingPage';

function App() {
  return (
    <Routes>
      <Route exact path="/" Component={ LandingPage } />
      <Route exact path="/search-colors" Component={ ColorsPage } />
    </Routes>
  );
}

export default App;
