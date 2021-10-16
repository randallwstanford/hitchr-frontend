import React from 'react';
import { render } from '@testing-library/react';
import NewRide from './NewRide';

it('should render without crashing', () => {
  render(<NewRide />);
});
