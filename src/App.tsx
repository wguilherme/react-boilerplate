
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

// pages
import Register from './pages/register';
import Context from './pages/contextPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Register} />
        <Route exact path="/context" component={Context} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
