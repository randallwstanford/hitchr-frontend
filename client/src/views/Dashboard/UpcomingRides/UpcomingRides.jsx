import React from 'react';
import PropTypes from 'prop-types';
import RideItem from '../../../components/RideItem/RideItem';

const UpcomingRides = ({ rides }) => (
  <div>
    <h2>Upcoming Trips</h2>
    {
      rides && rides.length
        ? rides.map((ride) => <RideItem ride={ride} key={ride.rideId} />)
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
