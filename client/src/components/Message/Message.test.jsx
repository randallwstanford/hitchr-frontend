// Libraries
import React from 'react';
import { render, screen } from '@testing-library/react';
import camelcaseKeys from 'camelcase-keys';

// Components
import Message from './Message';

import messagesList from '../../dummyData/messagesList';

const message = camelcaseKeys(messagesList.body.messages[0], { deep: true });

describe('Message', () => {
  beforeEach(() => {
    render(<Message message={message} />);
  });
  it('should render without crashing', () => {});
  it('should display message text', () => {
    const text = screen.getByText(message.text);
    expect(text).toBeTruthy();
  });
});
