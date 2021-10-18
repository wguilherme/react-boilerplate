import "styles/global.scss"

import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

// pages
import Register from 'pages/register';
import Context from 'pages/context';
import Login from 'pages/login';
import Item from 'pages/item';
import Dashboard from "pages/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />

        <Route exact path="/context" component={Context} />
        <Route exact path="/item" component={Item} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
