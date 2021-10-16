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
        <input name="username" placeholder="Username" />
        <input name="password" placeholder="Password" />
        {/* ----- Creation Mode ----- */}
        <input name="paymentMethod" placeholder="Payment Method" />
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
