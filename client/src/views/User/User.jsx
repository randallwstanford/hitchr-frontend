// Libraries
import React from 'react';
import camelcaseKeys from 'camelcase-keys';

// Sub-Components
import PayMethodList from '../../components/PayMethodList/PayMethodList';
import MessagesList from '../../components/MessagesList/MessagesList';

// Stylesheet
import './User.css';

// Dummy Data
import payMethodList from '../../dummyData/payMethodList';
import messagesList from '../../dummyData/messagesList';

const messages = camelcaseKeys(messagesList.body.messages);

const User = () => (
  <div>
    <span>Username</span>
    <PayMethodList methods={payMethodList} />
    <MessagesList messages={messages} />
    { /* TODO: Rating Sub-Component (WishList) */}
  </div>
);
export default User;
