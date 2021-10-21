import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './AddPaymentMethod.css';

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

  function changeProvider(e) {
    if (e.target.newProvider !== paymentOptions[0]) {
      setProvider(e.target.value);
    }
  }

  return (
    <div className="add-payment-tile">
      <select onChange={changeProvider}>
        {(provider === '' ? paymentOptions : paymentOptions.slice(1)).map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
      <input onChange={changeUrl} />
      <button type="button" onClick={savePaymentMethod}>Save</button>
    </div>
  );
};

AddPaymentMethod.propTypes = {
  savePaymentMethod: PropTypes.func.isRequired,
};

export default AddPaymentMethod;
