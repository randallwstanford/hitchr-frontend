// React
import React from 'react';
import PropTypes from 'prop-types';

// Stylesheet
import './Message.css';

const Message = ({ message }) => {
  const formatDate = (date) => new Date(date).toLocaleDateString('en-us', {
    year: 'numeric', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit',
  });

  return (
    <div className="message">
      { message.username }
      :
      &nbsp;
      {message.text}
      &nbsp;
      Date:
      &nbsp;
      {formatDate(message.timestamp)}
    </div>
  );
};

export default Message;

Message.propTypes = {
  message: PropTypes.shape({
    text: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    senderId: PropTypes.number.isRequired,
    recipientId: PropTypes.number.isRequired,
  }).isRequired,
};
