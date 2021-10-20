import React from 'react';
import { render } from '@testing-library/react';
import CompletedRides from './CompletedRides';

it('should render without crashing', () => {
  render(<CompletedRides />);
});
