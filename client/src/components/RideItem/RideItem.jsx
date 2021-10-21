// React
import React, { useContext } from 'react';
import PropTypes from 'prop-types';

// Stylesheet
import './RideItem.css';
import UserContext from '../../contexts/UserContext';
import serverUtils from '../../serverUtils';

const RideItem = ({ ride }) => {
  const user = useContext(UserContext);
  const {
    rideId, driver, startDest, endDest, completed, riders,
  } = ride;
  const isDriver = driver.id === user.id;
  function handleComplete() {
    serverUtils.user.completeRide(rideId);
  }
  return (
    <div className="RideItem" data-testid={`ride-result${rideId}`}>
      <a href={`/user/${driver.id}`}>{driver.username}</a>
      {
        riders && riders.length
          ? <span>{`+${riders.length}`}</span>
          : <span>+0</span>
      }
      <span>{startDest}</span>
      <span>{endDest}</span>
      {
        completed
          ? <span>{new Date(completed).toDateString()}</span>
          : null
      }
      {
        !isDriver && !completed
          ? <button type="button">Join</button>
          : null
      }
      {
        isDriver && !completed
          ? <button className="complete-button" type="button" onClick={handleComplete}>Mark As Complete</button>
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
      id: PropTypes.number.isRequired,
    }).isRequired,
    startDest: PropTypes.string.isRequired,
    endDest: PropTypes.string.isRequired,
    completed: PropTypes.string,
    riders: PropTypes.arrayOf(PropTypes.shape),
  }).isRequired,
  driver: PropTypes.bool,
};
RideItem.defaultProps = {
  driver: false,
};
