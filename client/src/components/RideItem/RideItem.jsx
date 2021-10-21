// React
import React, { useContext } from 'react';
import PropTypes from 'prop-types';

// Stylesheet
import './RideItem.css';
import UserContext from '../../contexts/UserContext';

const RideItem = ({ ride, joinFunction }) => {
  const user = useContext(UserContext);
  const {
    rideId, driver, startDest, endDest, completed, riders,
  } = ride;
  const isDriver = driver.id === user.id;
  function handleJoin() {
    if (joinFunction) {
      joinFunction();
    }
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
          ? <button type="button" onClick={handleJoin}>Join</button>
          : null
      }
      {
        isDriver && !completed
          ? <button className="complete-button" type="button">Mark As Complete</button>
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
  joinFunction: PropTypes.func,
};
RideItem.defaultProps = {
  driver: false,
  joinFunction: null,
};
