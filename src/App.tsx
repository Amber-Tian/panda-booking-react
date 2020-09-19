import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Labels from './views/Labels';
import Statistics from './views/Statistics';
import Money from './views/Money';
import NoMatch from './views/NoMatch';
import EditLabel from './views/EditLabel';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/labels">
          <Labels/>
        </Route>
        <Route exact path="/labels/:id">
          <EditLabel />
        </Route>
        <Route exact path="/statistics">
          <Statistics/>
        </Route>
        <Route exact path="/money">
          <Money/>
        </Route>
        <Redirect exact from="/" to="/money"/>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
