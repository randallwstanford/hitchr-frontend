// React
import React from 'react';
import PropTypes from 'prop-types';

// Stylesheet
import './RideItem.css';

const RideItem = ({ ride }) => {
  const {
    rideId, driver, startDest, endDest,
  } = ride;
  return (
    <div data-testid={`ride-result${rideId}`}>
      <span>{driver.username}</span>
      <span>{startDest}</span>
      <span>{endDest}</span>
      <button type="button">Join</button>
    </div>
  );
};

export default RideItem;

RideItem.propTypes = {
  ride: PropTypes.shape({
    rideId: PropTypes.number.isRequired,
    driver: PropTypes.shape({
      username: PropTypes.string.isRequired,
    }).isRequired,
    startDest: PropTypes.string.isRequired,
    endDest: PropTypes.string.isRequired,
  }).isRequired,
};
