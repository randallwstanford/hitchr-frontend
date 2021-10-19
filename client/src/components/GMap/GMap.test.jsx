// Libraries
import React from 'react';
import { render } from '@testing-library/react';

// Components
import GMap from './GMap';

// Mock Libraries
jest.mock('./gMap.test.js', () => 'abc123');

it('should render without crashing', () => {
  render(<GMap />);
});
