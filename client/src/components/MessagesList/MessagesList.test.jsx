// Libraries
import React from 'react';
import { render, screen } from '@testing-library/react';
import camelcaseKeys from 'camelcase-keys';

// Components
import MessagesList from './MessagesList';

// Dummy Data
import messagesList from '../../dummyData/messagesList';

const messages = camelcaseKeys(messagesList.body.messages);

describe('MessagesList', () => {
  beforeEach(() => {
    render(<MessagesList messages={messages} />);
  });
  it('should render without crashing', () => {});
  xit('should display each messsage', () => {
    messages.forEach((message) => {
      const renderedText = screen.getByText(message.text);
      expect(renderedText).toBeTruthy();
    });
  });
});
