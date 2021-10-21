import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function submit() {
    console.log(username, password);
  }

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
        <button type="button" onClick={submit}>Login</button>
      </form>
    </div>
  )
};

export default Login;
