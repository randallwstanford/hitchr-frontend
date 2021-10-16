import React from 'react';
import { render } from '@testing-library/react';
import User from './User';

it('should render without crashing', () => {
  render(<User />);
});
