import "styles/global.scss"

import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

// pages
import Register from 'pages/register';
import { Context2 } from 'pages/register/context2';
import Context from 'pages/context';

import Login from 'pages/login';

import Item from 'pages/item';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Register} />
        <Route exact path="/context" component={Context} />
        <Route exact path="/form" component={Context2} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/item" component={Item} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
