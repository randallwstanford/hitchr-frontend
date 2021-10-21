import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import AddPaymentMethod from '../../components/AddPaymentMethod/AddPaymentMethod';

const Auth = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [isDriver, setIsDriver] = useState(false);
  const [editingPaymentMethod, setEditngPaymentMethod] = useState(false);
  const history = useHistory();
  console.log('history:', history);

  const savePaymentMethod = (vendor, url) => {
    setPaymentMethods(paymentMethods.concat([[vendor, url]]));
    setEditngPaymentMethod(false);
  };

  const createAccount = (e) => {
    e.preventDefault();
    props.registerCallback(history, username, password, isDriver, paymentMethods);
  };

  return (
    <div>
      <h1>Hitchr</h1>
      <form>
        <label htmlFor="username">
          Username
          <input id="username" name="username" placeholder="Johnny123" onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label htmlFor="password">
          Password
          <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
        </label>
        <div>
          {paymentMethods.map((pm) => (
            <div key={pm[1]}>
              <p>{pm[0]}</p>
              <p>{pm[1]}</p>
            </div>
          ))}
        </div>

        {editingPaymentMethod
          ? <AddPaymentMethod savePaymentMethod={savePaymentMethod} />
          : <button type="button" onClick={() => setEditngPaymentMethod(true)}>Add Payment Method</button>}

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
