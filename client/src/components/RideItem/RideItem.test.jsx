// Libraries
import React from 'react';
import { render } from '@testing-library/react';
import camelcaseKeys from 'camelcase-keys';

// Components
import RideItem from './RideItem';

// Contexts
import UserContext from '../../contexts/UserContext';

// Dummy Data
import userInfo from '../../dummyData/userInfo';
import rideList from '../../dummyData/rideList';

it('should render without crashing', () => {
  render(
    <UserContext.Provider value={camelcaseKeys(userInfo, { deep: true })}>
      <RideItem ride={camelcaseKeys(rideList.body.rides[0], { deep: true })} />
    </UserContext.Provider>,
  );
});
