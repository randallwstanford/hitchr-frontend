// React
import React, { useContext } from 'react';
import Proptypes from 'prop-types';

// Stylesheet
import './Nav.css';

// Context
import UserContext from '../../contexts/UserContext';

const Nav = ({ logoutCallback }) => {
  const user = useContext(UserContext);
  return (
    <div id="Nav">
      <div id="brand">
        <a id="logo" href="/">Hitchr</a>
        <span>Share a ride - save the planet!</span>
      </div>
      <div id="navRight">
        <a href="/search">Search Rides</a>
        {
          user.isDriver
            ? <a href="/create">Create Ride</a>
            : null
        }
        {
          user.sessionId
            ? (
              <div id="user-control">
                <a id="username" href="/dashboard">{user.username}</a>
                <button type="button" onClick={logoutCallback}>Logout</button>
              </div>
            )
            : null
        }
      </div>
    </div>
  );
};

Nav.propTypes = {
  logoutCallback: Proptypes.func.isRequired,
};

export default Nav;
