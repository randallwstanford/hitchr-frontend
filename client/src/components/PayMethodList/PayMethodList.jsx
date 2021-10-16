// React
import React from 'react';

// Stylesheet
import './PayMethodList.css';
import PropTypes from 'prop-types';
import PayMethod from '../PayMethod/PayMethod';

const PayMethodList = ({ methods }) => (
  <div>
    {
      methods.length
        ? methods.map((method) => <PayMethod method={method} />)
        : null
    }
  </div>
);

export default PayMethodList;

PayMethodList.propTypes = {
  methods: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
