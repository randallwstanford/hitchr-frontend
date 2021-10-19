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
      <a id="navRight" href="/dashboard">{username}</a>
    </div>
  );
};
export default Nav;
