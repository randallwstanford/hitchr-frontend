import React from 'react';
import camelcaseKeys from 'camelcase-keys';
import { render } from '@testing-library/react';
import UpcomingRides from './UpcomingRides';

import rideList from '../../../dummyData/rideList';

it('should render without crashing', () => {
  render(<UpcomingRides rides={camelcaseKeys(rideList.body.rides)} />);
});
