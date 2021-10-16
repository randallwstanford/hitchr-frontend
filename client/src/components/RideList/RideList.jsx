// React
import React from 'react';
import PropTypes from 'prop-types';

// Stylesheet
import './RideList.css';
import RideItem from '../RideItem/RideItem';

const RideList = ({ rides }) => (
  <div>
    {
      rides.length
        ? rides.map((ride) => <RideItem ride={ride} />)
        : (
          <div>
            <p>No rides match your search. Do you want to create this ride for others?</p>
            <button type="button">Create Trip</button>
          </div>
        )
    }
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
