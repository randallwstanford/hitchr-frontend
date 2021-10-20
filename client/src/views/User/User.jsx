// Libraries
import React, { useContext } from 'react';
import camelcaseKeys from 'camelcase-keys';

// Sub-Components
import PayMethodList from '../../components/PayMethodList/PayMethodList';
import MessagesList from '../../components/MessagesList/MessagesList';
import UserContext from '../../contexts/UserContext';
// Stylesheet
import './User.css';

// Dummy Data
import payMethodList from '../../dummyData/payMethodList';
import messagesList from '../../dummyData/messagesList';

const messages = camelcaseKeys(messagesList.body.messages);

const User = () => {
  const { username } = useContext(UserContext);

  return (
    <div className="user">
      <div className="username">{username}</div>
      <PayMethodList methods={payMethodList} />
      <MessagesList messages={messages} />
      { /* TODO: Rating Sub-Component (WishList) */}
    </div>
  );
};
export default User;
