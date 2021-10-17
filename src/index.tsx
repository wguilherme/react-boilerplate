
import "./styles/setup.scss"
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import 'normalize.css'; // not needed becaseu Bootstrap already have a normalize

// import 'bootstrap/dist/css/bootstrap.css';

import { ItemProvider } from './context/Item';

ReactDOM.render(
  <React.StrictMode>
    <ItemProvider>
      <App />
    </ItemProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

