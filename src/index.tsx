
import "./styles/setup.scss"
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import 'normalize.css'; // not needed becaseu Bootstrap already have a normalize

// import 'bootstrap/dist/css/bootstrap.css';

import { ItemProvider } from './context/Item';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<h1>Carregando...</h1>}>
      <ItemProvider>
        <App />
      </ItemProvider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

