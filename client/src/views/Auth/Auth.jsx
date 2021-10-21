import React from 'react';

const Auth = () => {
  const addPaymentMethod = (e) => {
    e.preventDefault();
    // Add Payment
  };

  const createAccount = (e) => {
    e.preventDefault();
    // Create Account
  };

  return (
    <div>
      <h1>Hitchr</h1>
      <form>
        <label htmlFor="username">
          Username
          <input id="username" name="username" placeholder="Johnny123" />
        </label>
        <label hintFor="password">
          Password
          <input type="password" name="password" />
        </label>
        {/* ----- Creation Mode ----- */}
        <label>
          <input name="paymentMethod" placeholder="Payment Method" />
        </label>
        <input name="serviceName" placeholder="Service Name" />
        {/* ------------------------- */}
        <button type="button" onClick={addPaymentMethod}>Add Payment Method</button>
        <button type="submit">Login</button>
      </form>
      <button type="button" onClick={createAccount}>Create New Account</button>
    </div>
  );
};

export default Auth;
