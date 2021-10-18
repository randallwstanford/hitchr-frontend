// Libraries
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Views
import RideSearch from './views/RideSearch/RideSearch';
import Dashboard from './views/Dashboard/Dashboard';
import Auth from './views/Auth/Auth';
import User from './views/User/User';
import CreateRide from './views/CreateRide/CreateRide';

const App = () => (
  <Router>
    <Route path="/createride">
      <CreateRide />
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
    <Route path="/ridesearch">
      <RideSearch />
    </Route>
    <Route exact path="/">
      <RideSearch />
    </Route>
  </Router>
);
export default App;
