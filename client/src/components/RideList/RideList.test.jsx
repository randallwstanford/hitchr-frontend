// Libraries
import React from 'react';
import { render, screen } from '@testing-library/react';
import camelcaseKeys from 'camelcase-keys';

// Components
import RideList from './RideList';

// Dummy Data
import rideList from '../../dummyData/rideList';

const rides = camelcaseKeys(rideList.body.rides, { deep: true });

beforeEach(() => {
  render(<RideList rides={rides} />);
});

it('should render without crashing', () => {});

it('should render a RideItem component for each Ride', () => {
  rides.forEach((ride) => {
    const rendered = screen.getByTestId(`ride-result${ride.rideId}`);
    expect(rendered).toBeTruthy();
  });
});
