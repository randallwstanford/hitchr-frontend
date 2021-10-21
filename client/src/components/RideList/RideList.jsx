// React
import React from 'react';
import PropTypes from 'prop-types';

// Stylesheet
import './RideList.css';
import RideItem from '../RideItem/RideItem';

const RideList = ({ rides, noList }) => (
  <div id="RideList">
    {
      rides.length
        ? rides.map((ride) => <RideItem ride={ride} key={ride.rideId} />)
        : noList
    }
  </div>
);
export default RideList;

RideList.propTypes = {
  rides: PropTypes.arrayOf(
    PropTypes.shape({
      rideId: PropTypes.number.isRequired,
      driver: PropTypes.shape({
        username: PropTypes.string.isRequired,
      }).isRequired,
    }),
  ).isRequired,
  noList: PropTypes.element,
};
RideList.defaultProps = {
  noList: null,
};
