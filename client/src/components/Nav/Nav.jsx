// React
import React, { useContext } from 'react';

// Stylesheet
import './Nav.css';

// Context
import UserContext from '../../contexts/UserContext';

const Nav = () => {
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
          <button type="button">Logout</button>
        </div>
      </div>
    </div>
  );
};
export default Nav;
