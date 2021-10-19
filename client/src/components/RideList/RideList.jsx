// React
import React from 'react';
import PropTypes from 'prop-types';

// Stylesheet
import './RideList.css';
import RideItem from '../RideItem/RideItem';

const RideList = ({ rides, searched }) => (
  <div id="RideList">
    {
      rides.length
        ? rides.map((ride) => <RideItem ride={ride} />)
        : (
          <div id="no-rides">
            <p>No rides match your search. Create this ride for others?</p>
            <a href="/createride">
              <button type="button">Create Trip</button>
            </a>
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
        username: PropTypes.string.isRequired,
      }).isRequired,
    }),
  ).isRequired,
  searched: PropTypes.bool,
};
RideList.defaultProps = {
  searched: false,
};
