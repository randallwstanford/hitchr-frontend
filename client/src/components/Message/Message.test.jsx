// Libraries
import React from 'react';
import { render, screen } from '@testing-library/react';
import camelcaseKeys from 'camelcase-keys';
import UserContext from '../../contexts/UserContext';

// Components
import Message from './Message';

import userInfo from '../../dummyData/userInfo';
import messagesList from '../../dummyData/messagesList';

const message = camelcaseKeys(messagesList.body.messages[0], { deep: true });

describe('Message', () => {
  beforeEach(() => {
    render(
      <UserContext.Provider value={camelcaseKeys(userInfo, { deep: true })}>
        <Message message={message} />
      </UserContext.Provider>,
    );
  });
  it('should render without crashing', () => {});
  it('should display message text', () => {
    const messageText = screen.getByText(message.text);
    expect(messageText).toBeTruthy();
  });
});
