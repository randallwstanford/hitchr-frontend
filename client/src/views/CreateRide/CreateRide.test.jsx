// Libraries
import React from 'react';
import { render } from '@testing-library/react';

// Components
import CreateRide from './CreateRide';

it('should render without crashing', () => {
  render(<CreateRide />);
});
