// React
import React from 'react';
import PropTypes from 'prop-types';

// Stylesheet
import './Message.css';

const Message = ({ message }) => (
  <span>{message.text}</span>
);
export default Message;

Message.propTypes = {
  message: PropTypes.shape({
    text: PropTypes.string.isRequired,
    senderId: PropTypes.number.isRequired,
    recipientId: PropTypes.number.isRequired,
  }).isRequired,
};
