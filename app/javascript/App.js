import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Greeting from './components/Greeting';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Greeting} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
