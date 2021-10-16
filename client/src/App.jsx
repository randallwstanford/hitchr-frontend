// Libraries
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Sub-Components
import RideSearch from './views/RideSearch/RideSearch';
import Dashboard from './views/Dashboard/Dashboard';
import Auth from './views/Auth/Auth';
import User from './views/User/User';

const App = () => (
  <Router>
    <Route path="/ridesearch">
      <RideSearch />
    </Route>
    <Route path="/dashboard">
      <Dashboard />
    </Route>
    <Route path="/user/:userId">
      <User />
    </Route>
    <Route path={['/login', '/signup']}>
      <Auth />
    </Route>
    <Route exact path="/">
      <div id="Home" />
    </Route>
  </Router>
);
export default App;
