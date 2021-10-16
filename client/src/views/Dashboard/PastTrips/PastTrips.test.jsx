import React from 'react';
import { render } from '@testing-library/react';
import PastTrips from './PastTrips';

it('should render without crashing', () => {
  render(<PastTrips />);
});
