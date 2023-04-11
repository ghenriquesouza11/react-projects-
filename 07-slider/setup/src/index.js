import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './components/SVGs/changePersonBtn.css';
import './components/Person/Person.css';
import './components/Persons/Persons.css';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={ store }>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
);
