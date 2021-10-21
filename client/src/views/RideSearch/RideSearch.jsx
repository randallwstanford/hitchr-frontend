/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import camelcaseKeys from 'camelcase-keys';
import RideList from '../../components/RideList/RideList';
import serverUtils from '../../serverUtils';

import NoRides from './NoRides';
import rideList from '../../dummyData/rideList';

// Stylesheet
import './RideSearch.css';

const RideSearch = () => {
  const [rideResults, setRideResults] = useState(
    camelcaseKeys(rideList.body.rides, { deep: true }),
  );
  const [searched, setSearched] = useState(true);
  const [startingDestinations, setStartingDestinations] = useState([]);

  function handleSearch() {
    setSearched(true);
    const start = document.getElementById('input-start-loc').value;
    const startId = document.querySelector(`#start-loc-list option[value="${start}"]`).dataset.value;
    const end = document.getElementById('input-end-loc').value;
    serverUtils.ride.searchRide(startId, end).then((results) => setRideResults(results));
    setRideResults([]);
  }

  useEffect(() => {
    serverUtils.destinations.getStartingDestinations()
      .then((results) => setStartingDestinations(results));
  }, []);

  return (
    <div id="RideSearch">
      <form id="ride-search-form">
        <h1>Search For Rideshares</h1>
        <label htmlFor="input-start-loc">
          PICKUP
          <input list="start-loc-list" id="input-start-loc" />
          <datalist id="start-loc-list" aria-label="Starting Destination Input">
            {startingDestinations.map((destination) => (
              <option
                key={destination.id}
                data-value={destination.id}
                value={destination.name}
                aria-label={`Starting destination of ${destination.name}`}
              />
            ))}
          </datalist>
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
              <RideList rides={rideResults} noList={<NoRides />} />
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
