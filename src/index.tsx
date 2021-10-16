
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'normalize.css';
import "./styles/setup.scss"

import { ItemProvider } from './context/Item';

ReactDOM.render(
  <React.StrictMode>
    <ItemProvider>
      <App />
    </ItemProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

