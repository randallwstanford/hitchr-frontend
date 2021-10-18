// Libraries
import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Views
import RideSearch from './views/RideSearch/RideSearch';
import Dashboard from './views/Dashboard/Dashboard';
import Auth from './views/Auth/Auth';
import User from './views/User/User';
import CreateRide from './views/CreateRide/CreateRide';

// Context
import UserContext from './contexts/UserContext';

// Dummy Data
import userInfo from './dummyData/userInfo';
import emptyUser from './dummyData/emptyUser';

const App = () => {
  const [user] = useState(process.env.NODE_ENV === 'DEV' ? userInfo : emptyUser);
  return (
    <Router>
      <UserContext.Provider value={user}>
        <Route path={['/login', '/signup']}>
          <Auth />
        </Route>
        {
          !user || !user.sessionId
            ? <Redirect to="/login" />
            : (
              <>
                <Route path="/createride">
                  <CreateRide />
                </Route>
                <Route path="/dashboard">
                  <Dashboard />
                </Route>
                <Route path="/user/:userId">
                  <User />
                </Route>
                <Route exact path="/">
                  <div id="Home" />
                </Route>
                <Route path="/ridesearch">
                  <RideSearch />
                </Route>
                <Route exact path="/">
                  <Redirect to="/ridesearch" />
                </Route>
              </>
            )
        }
      </UserContext.Provider>
    </Router>
  );
};
export default App;
