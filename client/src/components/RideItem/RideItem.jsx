// React
import React from 'react';
import PropTypes from 'prop-types';

// Stylesheet
import './RideItem.css';

const RideItem = ({ ride }) => {
  const {
    rideId, driver, startDest, endDest, complete,
  } = ride;
  return (
    <div className="RideItem" data-testid={`ride-result${rideId}`}>
      <a href={`/users/${driver.driverId}`}>{driver.username}</a>
      <span>{startDest}</span>
      <span>{endDest}</span>
      {
        !driver
          ? <button type="button">Join</button>
          : null
      }
      {
        driver && !complete
          ? <button type="button">Complete</button>
          : null
      }
    </div>
  );
};

export default RideItem;

RideItem.propTypes = {
  ride: PropTypes.shape({
    rideId: PropTypes.number.isRequired,
    driver: PropTypes.shape({
      username: PropTypes.string.isRequired,
      driverId: PropTypes.number.isRequired,
    }).isRequired,
    startDest: PropTypes.string.isRequired,
    endDest: PropTypes.string.isRequired,
    complete: PropTypes.bool,
  }).isRequired,
  driver: PropTypes.bool,
};
RideItem.defaultProps = {
  driver: false,
};
