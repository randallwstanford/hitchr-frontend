import React from 'react';
import PropTypes from 'prop-types';
import RideItem from '../../../components/RideItem/RideItem';

import './UpcomingRides.css';

const UpcomingRides = ({ rides }) => (
  <div id="UpcomingRides">
    <h2>Upcoming Rides</h2>
    {
      rides && rides.length
        ? rides.map((ride) => <RideItem ride={ride} key={ride.rideId} driver={true} />)
        : <span>You have no upcoming rides</span>
    }
  </div>
);

export default UpcomingRides;

UpcomingRides.propTypes = {
  rides: PropTypes.arrayOf(
    PropTypes.shape(),
  ).isRequired,
};
