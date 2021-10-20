// React
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// import axios from 'axios';
import PropTypes from 'prop-types';
// import UserContext from '../../contexts/UserContext';
import serverUtils from '../../serverUtils';

// Stylesheet
import './MessagesList.css';
import Message from '../Message/Message';

const MessagesList = ({ messages }) => {
  let recipientId = 0;
  const { userId } = useParams();
  const [allMessages, setMessages] = useState([messages]);

  useEffect(() => {
    setMessages(messages);
  }, []);

  allMessages.forEach((message) => {
    if (message.senderId !== userId) recipientId = message.senderId;
  });

  const newMessage = (e) => {
    e.preventDefault();
    const newMessageToPost = e.target.newMessage.value;
    const formData = {
      text: newMessageToPost,
      senderId: parseInt(userId, 10),
      recipientId,
    };
    serverUtils.messages.postMessage(formData, parseInt(userId, 10), recipientId);
  };

  return (
    <div data-testid="MessagesList" className="messages-container">
      {
        messages.length
          ? allMessages.map((message) => <Message message={message} key={`message-${message.messageId}`} />)
          : null
      }
      <form onSubmit={newMessage}>
        <input name="newMessage" placeholder="Enter Message Here" />
        <button type="submit">Post Message</button>
      </form>
    </div>
  );
};

export default MessagesList;

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
