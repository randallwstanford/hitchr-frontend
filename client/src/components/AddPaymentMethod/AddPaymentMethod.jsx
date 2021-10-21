import React, { useState } from 'react';
import PropTypes from 'prop-types';

const paymentOptions = [
  'Select One',
  'PayPal',
  'CashApp',
];

const AddPaymentMethod = (props) => {
  const [provider, setProvider] = useState('');
  const [url, setUrl] = useState('');

  function savePaymentMethod() {
    props.savePaymentMethod(provider, url);
  }

  function changeUrl(e) {
    e.preventDefault();
    setUrl(e.target.value);
  }

  return (
    <div className="add-payment-tile">
      <select onChange={(e) => setProvider(e.target.value)}>
        {paymentOptions.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
      <input onChange={changeUrl} />
      <button type="button" onClick={savePaymentMethod}>Save</button>
    </div >
  );
};

AddPaymentMethod.propTypes = {
  savePaymentMethod: PropTypes.func.isRequired,
}

export default AddPaymentMethod;
