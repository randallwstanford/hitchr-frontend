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
      <a href="/">Hitchr</a>
      <a id="navRight" href="/dashboard">{username}</a>
    </div>
  );
};
export default Nav;
