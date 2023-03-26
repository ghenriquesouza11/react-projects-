import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [persons, setPersons] = useState(data);
  return (
    <main>
      <section className='container'>
        <h3>{`${persons.length} Birthdays Today`}</h3>
        <List arrayList={persons} />
        <button type='button' onClick={ () => {
          setPersons([]);
        } } >
            Clear All
          </button>
      </section>
    </main>
  );
}

export default App;
