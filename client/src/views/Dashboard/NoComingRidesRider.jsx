import React from 'react';
impot { useHistory } from 'react-router-dom';

const NoComingRidesRider = () => {
  const history = useHistory();
  return (
    <div id="no-rides">
      <p>You don't have any upcoming rides</p>
      <a onClick={() => history.push("/search")}>
        <button type="button">Search Rides</button>
      </a>
    </div>
  );
};

export default NoComingRidesRider;
