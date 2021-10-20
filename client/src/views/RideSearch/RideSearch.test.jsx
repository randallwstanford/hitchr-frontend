// Libraries
import React from 'react';
import { render } from '@testing-library/react';
import camelcaseKeys from 'camelcase-keys';

// Components
import RideSearch from './RideSearch';

// Dummy Data
import userInfo from '../../dummyData/userInfo';

// Context
import UserContext from '../../contexts/UserContext';

// Mock Libraries
jest.mock('axios'); // this happens automatically with automocking
const axios = require('axios');

// Mock Functions
axios.post.mockImplementation((url, data) => ({ url, data }));
axios.get.mockImplementation((url, data) => ({ url, data }));

describe('RideSearch', () => {
  it('should render without crashing', () => {
    render(
      <UserContext.Provider value={camelcaseKeys(userInfo, { deep: true })}>
        <RideSearch />
      </UserContext.Provider>,
    );
  });
});
