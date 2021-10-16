import React from 'react';
import { render } from '@testing-library/react';
import ResultItem from './ResultItem';

const ride = {
  rideId: 12345,
  driver: {
    username: 'MrDriver',
  },
};

it('should render without crashing', () => {
  render(<ResultItem ride={ride} />);
});
