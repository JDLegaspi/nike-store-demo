import HomePage from 'pages/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path={`/Mens`}>
          <HomePage gender="male" />
        </Route>
        <Route exact path={`/Womens`}>
          <HomePage gender="female" />
        </Route>
        <Route path={`/Mens/:productId`}>
          <HomePage gender="male" />
        </Route>
        <Route path={`/Womens/:productId`}>
          <HomePage gender="female" />
        </Route>
        <Route path={`/:productId`}>
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
