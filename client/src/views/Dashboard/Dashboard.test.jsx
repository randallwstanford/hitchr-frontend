import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from './Dashboard';

it('should render without crashing', () => {
  render(<Dashboard />);
});
