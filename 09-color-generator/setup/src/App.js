import React from 'react';

import { Route, Routes } from 'react-router-dom';
import ColorsPage from './pages/ColorsPage/ColorsPage';

function App() {
  return (
    <Routes>
      <Route exact path="/" Component={ ColorsPage } />
    </Routes>
  );
}

export default App;
