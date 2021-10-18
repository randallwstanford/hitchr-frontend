import React from 'react';
import { render } from '@testing-library/react';
import RideSearch from './RideSearch';

// Mock Libraries
jest.mock('axios'); // this happens automatically with automocking
const axios = require('axios');

// Mock Functions
axios.post.mockImplementation((url, data) => ({ url, data }));
axios.get.mockImplementation((url, data) => ({ url, data }));

describe('RideSearch', () => {
  it('should render without crashing', () => {
    render(<RideSearch />);
  });
});
