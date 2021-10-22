import React from 'react';
import { useHistory } from 'react-router-dom';

const NoComingRides = () => {
  const history = useHistory();
  return (
    <div id="no-rides">
      <p>You don&apos;t have any upcoming rides</p>
      <a onClick={() => history.push("/create")}>
        <button type="button">Create Ride</button>
      </a>
    </div>
  );
};

export default NoComingRides;
