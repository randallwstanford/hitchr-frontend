// React
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import UserContext from '../../contexts/UserContext';
// Stylesheet
import './Message.css';

const Message = ({ message }) => {
  const { username } = useContext(UserContext);

  const formatDate = (date) => new Date(date).toLocaleDateString('en-us', {
    year: 'numeric', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit',
  });

  const leftOrRight = `${(message.username === username) ? 'left' : 'right'}`;

  return (
    <div className="message">
      <div className={leftOrRight}>
        { message.username }
        :
        <p data-testid="message-test" className="message-text">{message.text}</p>
        <div>
          Date: &nbsp;
          {formatDate(message.timestamp)}
        </div>
      </div>
    </div>
  );
};

export default Message;

Message.propTypes = {
  message: PropTypes.shape({
    text: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
  }).isRequired,
};
