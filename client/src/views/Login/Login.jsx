import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Login.css';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div id="login-panel">
      <h2>Login</h2>
      <form id="login-form">
        <label htmlFor="username">
          Username
          <input id="username" name="username" placeholder="Johnny123" onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label htmlFor="password">
          Password
          <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="button" onClick={() => props.loginCallback(username, password)}>Login</button>
      </form>
    </div>
  );
};

Login.propTypes = {
  loginCallback: PropTypes.func.isRequired,
};

export default Login;
