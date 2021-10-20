/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import RideList from '../../components/RideList/RideList';
import serverUtils from '../../serverUtils';

// Stylesheet
import './RideSearch.css';

const RideSearch = () => {
  const [rideResults, setRideResults] = useState([]);
  const [searched, setSearched] = useState(false);
  function handleSearch() {
    setSearched(true);
    const start = document.getElementById('input-start-loc').value;
    const end = document.getElementById('input-end-loc').value;
    serverUtils.ride.searchRide(start, end).then((results) => setRideResults(results));
    setRideResults([]);
  }
  return (
    <div id="RideSearch">
      <form id="ride-search-form">
        <h1>Search For Rideshares</h1>
        <label htmlFor="input-start-loc">
          PICKUP
          <input id="input-start-loc" />
        </label>
        <label htmlFor="input-start-loc">
          DROPOFF
          <input id="input-end-loc" />
        </label>
        <button type="button" onClick={handleSearch}>Search Rides</button>
      </form>
      {
        searched
          ? (
            <div id="search-results">
              <RideList rides={rideResults} />
            </div>
          ) : (
            <div id="create-ride-plug">
              <p>Want to drive fellow Hitchrs?</p>
              <a href="/create">
                <button type="button">Create A Ride</button>
              </a>
            </div>
          )
      }
    </div>
  );
};
export default RideSearch;
