
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

// pages
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
