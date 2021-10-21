// Libraries
import camelcaseKeys from 'camelcase-keys';
import React from 'react';
import { render } from '@testing-library/react';

import UserContext from '../../contexts/UserContext';
// Components
import CreateRide from './CreateRide';

import userInfo from '../../dummyData/userInfo';

it('should render without crashing', () => {
  const user = camelcaseKeys(userInfo, { deep: true });
  render(
    <UserContext.Provider value={user}>
      <CreateRide />
    </UserContext.Provider>,
  );
});
