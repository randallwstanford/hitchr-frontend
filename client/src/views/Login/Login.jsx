import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import './Login.css';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);
  const history = useHistory();

  const login = () => {
    props.loginCallback(history, username, password)
      .then((response) => {
        if (response.message) {
          setMessage(response.message);
        }
      });
  };

  return (
    <div>
      <h1>Hitchr</h1>
      <h2>Login</h2>
      <form>
        <label htmlFor="username">
          Username
          <input id="username" name="username" placeholder="Johnny123" onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label htmlFor="password">
          Password
          <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
        </label>
        {message !== null
          ? (
            <p>
              {message}
            </p>
          )
          : null}
        <button type="button" onClick={login}>Login</button>
      </form>
    </div>
  );
};

Login.propTypes = {
  loginCallback: PropTypes.func.isRequired,
};

export default Login;
