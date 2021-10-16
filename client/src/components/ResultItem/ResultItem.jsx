// React
import React from 'react';
import PropTypes from 'prop-types';

// Stylesheet
import './ResultItem.css';

const ResultItem = ({ username }) => (
  <div>
    <span>{username}</span>
    <button type="button">Join</button>
  </div>
);

export default ResultItem;

ResultItem.propTypes = {
  username: PropTypes.string.isRequired,
};
