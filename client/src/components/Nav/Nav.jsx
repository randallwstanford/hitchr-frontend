// React
import React, { useContext } from 'react';
import Proptypes from 'prop-types';

// Stylesheet
import './Nav.css';

// Context
import UserContext from '../../contexts/UserContext';

const Nav = ({ logoutCallback }) => {
  const { username } = useContext(UserContext);
  return (
    <div id="Nav">
      <div id="brand">
        <a id="logo" href="/">Hitchr</a>
        <span>Share a ride - save the planet!</span>
      </div>
      <div id="navRight">
        <a href="/search">Search Rides</a>
        <a href="/create">Create Ride</a>
        <div id="user-control">
          <a id="username" href="/dashboard">{username}</a>
          <button type="button" onClick={logoutCallback}>Logout</button>
        </div>
      </div>
    </div>
  );
};

Nav.propTypes = {
  logoutCallback: Proptypes.func.isRequired,
};

export default Nav;
