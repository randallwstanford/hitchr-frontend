import React from 'react';
import { render } from '@testing-library/react';
import UpcomingTrips from './UpcomingTrips';

it('should render without crashing', () => {
  render(<UpcomingTrips />);
});
