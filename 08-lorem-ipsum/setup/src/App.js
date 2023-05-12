import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoremGenerator from './pages/LoremGenerator/LoremGenerator';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ LoremGenerator } />
    </Switch>
  );
}

export default App;
