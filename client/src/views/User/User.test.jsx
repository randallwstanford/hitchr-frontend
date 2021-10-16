import React from 'react';
import { render, screen } from '@testing-library/react';
import User from './User';

describe('User view', () => {
  beforeEach(() => { render(<User />); });
  it('should render without crashing', () => {});
  [
    'MessagesList',
    'PayMethodList',
  ].forEach((component) => {
    it(`should render a ${component} component`, () => {
      expect(screen.getByTestId(component)).toBeTruthy();
    });
  });
});
