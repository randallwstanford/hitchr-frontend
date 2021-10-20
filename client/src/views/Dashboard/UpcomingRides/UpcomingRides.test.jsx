import React from 'react';
import camelcaseKeys from 'camelcase-keys';
import { render } from '@testing-library/react';
import UpcomingRides from './UpcomingRides';

import rideList from '../../../dummyData/rideList';
import userInfo from '../../../dummyData/userInfo';
import UserContext from '../../../contexts/UserContext';

it('should render without crashing', () => {
  render(
    <UserContext.Provider value={camelcaseKeys(userInfo, { deep: true })}>
      <UpcomingRides rides={camelcaseKeys(rideList.body.rides)} />
    </UserContext.Provider>,
  );
});
