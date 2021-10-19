import React from 'react';
import { render } from '@testing-library/react';
import RideItem from './RideItem';

const ride = {
  rideId: 12345,
  driver: {
    username: 'MrDriver',
  },
  startDest: 'Abq',
  endDest: 'Dnv',
};

it('should render without crashing', () => {
  render(<RideItem ride={ride} />);
});
