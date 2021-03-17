import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import MainMenu from './pages/MainMenu';
import Results from './pages/Results';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainMenu />
        </Route>
        <Route exact path="/results">
          <Results />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
