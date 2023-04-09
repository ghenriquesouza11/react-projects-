import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './components/NamesButtons/NamesButtons.css';
import './components/Company/Company.css';
import './components/SVGs/FastFoward.css';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>,
);
