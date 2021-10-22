import React from 'react';
import { useHistory } from 'react-router-dom';

const NoRides = () => {
  const history = useHistory();
  return (
    <div id="no-rides">
      <p>No rides match your search. Create this ride for others?</p>
      <a onClick={() => history.push("/create")}>
        <button type="button">Create Ride</button>
      </a>
    </div>
  );
};

export default NoRides;
