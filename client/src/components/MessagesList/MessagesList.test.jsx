// Libraries
import React from 'react';
import { render, screen } from '@testing-library/react';
import camelcaseKeys from 'camelcase-keys';
import UserContext from '../../contexts/UserContext';

// Components
import MessagesList from './MessagesList';

// Dummy Data
import messagesList from '../../dummyData/messagesList';
import userInfo from '../../dummyData/userInfo';

const messages = camelcaseKeys(messagesList.body.messages);

describe('MessagesList', () => {
  beforeEach(() => {
    render(
      <UserContext.Provider value={camelcaseKeys(userInfo, { deep: true })}>
        <MessagesList messages={messages} />
      </UserContext.Provider>,
    );
  });

  it('should render without crashing', () => {});
  it('should display each messsage', () => {
    messages.forEach((message) => {
      const renderedText = screen.getByText(message.text);
      expect(renderedText).toBeTruthy();
    });
  });
});
