import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Auth = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [isDriver, setIsDriver] = useState(false);

  const addPaymentMethod = (e) => {
    e.preventDefault();
    // Add Payment
  };

  const createAccount = (e) => {
    e.preventDefault();
    props.registerCallback(username, password, isDriver, paymentMethods);
  };

  return (
    <div>
      <h1>Hitchr</h1>
      <form>
        <label htmlFor="username">
          Username
          <input id="username" name="username" placeholder="Johnny123" onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label hintFor="password">
          Password
          <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
        </label>
        {/* ----- Creation Mode ----- */}
        <label>
          <input name="paymentMethod" placeholder="Payment Method" />
        </label>
        <input name="serviceName" placeholder="Service Name" />
        {/* ------------------------- */}
        <button type="button" onClick={addPaymentMethod}>Add Payment Method</button>
        <div>
          Do you plan on driving?
          <label>
            No
            <input type="radio" value="false" name="driver" onChange={() => setIsDriver(false)} />
          </label>
          <label>
            Yes
            <input type="radio" value="true" name="driver" onChange={() => setIsDriver(true)} />
          </label>
        </div>
      </form>
      <button type="button" onClick={createAccount}>Create New Account</button>
    </div>
  );
};

Auth.propTypes = {
  registerCallback: PropTypes.func.isRequired,
};

export default Auth;
