// React
import React from 'react';
import PropTypes from 'prop-types';

// Stylesheet
import './PayMethod.css';

const PayMethod = ({ method }) => {
  const {
    url,
    provider,
  } = method;
  return <a href={url} target="_blank" rel="noreferrer" data-testid={`payMethod${url}`}>{provider}</a>;
};
export default PayMethod;

PayMethod.propTypes = {
  method: PropTypes.shape({
    url: PropTypes.string.isRequired,
    provider: PropTypes.string.isRequired,
  }).isRequired,
};
