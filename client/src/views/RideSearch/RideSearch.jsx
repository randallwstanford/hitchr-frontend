import React, { useState } from 'react';
import RideList from '../../components/RideList/RideList';
import serverUtils from '../../serverUtils';

// Stylesheet
// import './RideSearch.css';

const RideSearch = () => {
  const [rideResults, setRideResults] = useState([]);
  function handleSearch() {
    const start = document.getElementById('input-start-loc').value;
    const end = document.getElementById('input-end-loc').value;
    serverUtils.searchRide(start, end).then((results) => setRideResults(results));
    setRideResults([]);
  }
  return (
    <div>
      <form>
        <label htmlFor="input-start-loc">
          Starting Location:
          <input id="input-start-loc" />
        </label>
        <label htmlFor="input-end-loc">
          Ending Location:
          <input id="input-end-loc" />
        </label>
        <button type="button" onClick={handleSearch}>Search Rides</button>
      </form>
      <div id="search-results">
        <RideList rides={rideResults} />
      </div>
    </div>
  );
};
export default RideSearch;
