// Utilities
import serverUtils from './serverUtils';

// Test Data
import postRide from './dummyData/postRide';

// Mock Libraries
jest.mock('axios'); // this happens automatically with automocking
const axios = require('axios');

// Mock Functions
axios.post.mockImplementation((url, data) => new Promise((resolve) => resolve({ url, data })));

describe('postRide', () => {
  it('Should send data in the correct format', () => {
    serverUtils.ride.postRide(postRide.client);
  });
});

describe('getUser', () => {});

describe('getMessages', () => {});

describe('getMessages', () => {});
