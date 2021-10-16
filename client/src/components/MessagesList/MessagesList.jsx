// React
import React from 'react';
import PropTypes from 'prop-types';

// Stylesheet
import './MessagesList.css';
import Message from '../Message/Message';

const MessagesList = ({ messages }) => (
  <div data-testid="MessagesList">
    {
      messages.length
        ? messages.map((message) => <Message message={message} key={`message-${message.messageId}`} />)
        : null
    }
  </div>
);
export default MessagesList;

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
