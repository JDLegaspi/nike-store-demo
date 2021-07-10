import NikeHome from 'pages/NikeHome';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <NikeHome />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
