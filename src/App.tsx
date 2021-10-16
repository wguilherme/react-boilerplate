
import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Register from './pages/register';

function App() {
  return (

    <BrowserRouter>
      <Switch>

        <Route exact path="/" component={Register} />

      </Switch>
    </BrowserRouter>
  )
}

export default App;
