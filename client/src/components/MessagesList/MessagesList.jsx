/* eslint-disable no-unused-vars */
// React
import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import serverUtils from '../../serverUtils';

// Stylesheet
import './MessagesList.css';
import Message from '../Message/Message';

const MessagesList = ({ messages }) => {
  const { id, username } = useContext(UserContext);
  let notMyUsername;

  let userId = 10;
  if (process.env.NODE_ENV !== 'test') {
    userId = parseInt(useParams().userId, 10);
  }

  const [allMessages, setMessages] = useState([]);

  const getData = () => serverUtils.messages.getMessages(userId, id).then((data) => data);

  useEffect(async () => {
    if (process.env.NODE_ENV !== 'test') {
      setMessages(await getData());
    } else {
      setMessages(messages);
    }
  }, []);

  // setInterval(async () => {
  //   setMessages(await getData());
  // }, 5000);

  const newMessage = (e) => {
    e.preventDefault();
    const newMessageToPost = e.target.newMessage.value;
    const formData = {
      text: newMessageToPost,
      senderId: userId,
      recipientId: id,
    };
    serverUtils.messages.postMessage(formData, userId, id);
  };

  for (let i = 0; i < allMessages.length; i += 1) {
    if (allMessages[i].username !== username) {
      notMyUsername = allMessages[i].username;
    }
  }

  return (
    <div>
      <div className="current-username">{notMyUsername}</div>
      <div data-testid="MessagesList" className="messages-container">
        {
          allMessages.length
            ? allMessages.map((message) => <Message message={message} key={message.message_id} />)
            : <div>No messages found!</div>
        }
        <form onSubmit={newMessage}>
          <input name="newMessage" placeholder="Enter Message Here" />
          <button type="submit">Post Message</button>
        </form>
      </div>
    </div>
  );
};

export default MessagesList;

MessagesList.propTypes = {
  messages: PropTypes.shape({
    text: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
  }).isRequired,
};
