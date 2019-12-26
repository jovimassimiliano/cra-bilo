import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import routes from 'routes';
import './App.scss';

function App() {
  return (
    <Router>
      <Switch>
        {
          routes.map(route => (
            <Route {...route}/>
          ))
        }
      </Switch>
    </Router>
  );
}

export default App;
