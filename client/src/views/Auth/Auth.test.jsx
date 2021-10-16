import React from 'react';
import { render } from '@testing-library/react';
import Auth from './Auth';

it('should render without crashing', () => {
  render(<Auth />);
});
