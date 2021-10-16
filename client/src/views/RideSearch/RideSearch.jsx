import React, { useState, useEffect } from 'react';
import RideList from '../../components/RideList/RideList';

// Stylesheet
// import './RideSearch.css';

const RideSearch = () => {
  const [rideResults, setRideResults] = useState([]);
  function fetchRides() {
    setRideResults([]);
  }
  useEffect(() => {
    fetchRides();
  }, []);
  return (
    <div>
      <form>
        <label htmlFor="input-start-loc">
          Starting Location:
          <input id="input-start-loc" />
        </label>
        <label htmlFor="input-start-loc">
          Ending Location:
          <input id="input-start-loc" />
        </label>
        <button type="submit">Search Rides</button>
      </form>
      <div id="search-results">
        <RideList rides={rideResults} />
      </div>
    </div>
  );
};
export default RideSearch;
