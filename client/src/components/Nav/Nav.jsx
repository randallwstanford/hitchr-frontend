// React
import React, { useContext } from 'react';
import Proptypes from 'prop-types';
import { useHistory } from 'react-router-dom';

// Stylesheet
import './Nav.css';

// Context
import UserContext from '../../contexts/UserContext';

const Nav = ({ logoutCallback }) => {
  const user = useContext(UserContext);
  const history = useHistory();

  return (
    <div id="Nav">
      <div id="brand">
        <a id="logo" onClick={() => history.push('/')}>Hitchr</a>
        <span>Share a ride - save the planet!</span>
      </div>
      <div id="navRight">
        <a onClick={() => history.push('/search')}>Search Rides</a>
        {
          user.isDriver
            ? <a onClick={() => history.push('/create')}>Create Ride</a>
            : null
        }
        {
          user.sessionId
            ? (
              <div id="user-control">
                <a id="username" onClick={() => history.push('/dashboard')}>{user.username}</a>
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
