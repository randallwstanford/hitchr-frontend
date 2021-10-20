// Libraries
import React from 'react';
import { render, screen } from '@testing-library/react';
import camelcaseKeys from 'camelcase-keys';

// Components
import RideList from './RideList';

// Dummy Data
import rideList from '../../dummyData/rideList';
import userInfo from '../../dummyData/userInfo';
import UserContext from '../../contexts/UserContext';

const rides = camelcaseKeys(rideList.body.rides, { deep: true });

describe('RideList', () => {
  beforeEach(() => {
    render(
      <UserContext.Provider value={camelcaseKeys(userInfo, { deep: true })}>
        <RideList rides={rides} />
      </UserContext.Provider>,
    );
  });
  describe('with rides', () => {
    it('should render without crashing', () => {});
    it('should render a RideItem component for each Ride', () => {
      rides.forEach((ride) => {
        const rendered = screen.getByTestId(`ride-result${ride.rideId}`);
        expect(rendered).toBeTruthy();
      });
    });
  });
  describe('with no rides', () => {
    beforeEach(() => {
      render(<RideList rides={[]} />);
    });
    it('should render without crashing', () => {});
    it('should render a "Create Trip" button', () => {
      const create = screen.getByText('Create Trip');
      expect(create.nodeName).toBe('BUTTON');
    });
  });
});
// TODO: Add review option to completed rides (if other parties mark as completed)
