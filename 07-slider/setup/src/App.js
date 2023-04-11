import React from 'react';
import { connect } from 'react-redux';
import Persons from './components/Persons/Persons';

function App() {
  return (
    <main>
      <Persons />
    </main>
  );
}

export default connect()(App);
