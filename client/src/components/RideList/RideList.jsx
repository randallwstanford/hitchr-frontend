// React
import React from 'react';
import PropTypes from 'prop-types';

// Stylesheet
import './RideList.css';
import RideItem from '../RideItem/RideItem';

const RideList = ({ rides }) => (
  <div>
    { rides.map((ride) => <RideItem ride={ride} />) }
  </div>
);
export default RideList;

RideList.propTypes = {
  rides: PropTypes.arrayOf(
    PropTypes.shape({
      rideId: PropTypes.number.isRequired,
      driver: PropTypes.shape({
        username: PropTypes.number.isRequired,
      }).isRequired,
    }),
  ).isRequired,
};
