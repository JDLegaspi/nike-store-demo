import HomePage from 'pages/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path={`/Mens`}>
          <HomePage gender="male" />
        </Route>
        <Route path={`/Womens`}>
          <HomePage gender="female" />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
