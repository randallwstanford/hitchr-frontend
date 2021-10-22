import React from 'react';
import { useHistory } from 'react-router-dom';

const NoSearch = () => {
  const history = useHistory();
  return (
    <div id="create-ride-plug">
      <p>Want to drive fellow Hitchrs?</p>
      <a onClick={() => history.push("/create")}>
        <button type="button">Create A Ride</button>
      </a>
    </div>
  );
};

export default NoSearch;
