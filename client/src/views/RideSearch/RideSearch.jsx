/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect, useContext } from 'react';
import RideList from '../../components/RideList/RideList';
import serverUtils from '../../serverUtils';

// Sub-Components
import NoRides from './NoRides';
import NoSearch from './NoSearch';

// Contexts
import UpdateContext from '../../contexts/UpdateContext';
import UserContext from '../../contexts/UserContext';

// Stylesheet
import './RideSearch.css';

const RideSearch = () => {
  const [rideResults, setRideResults] = useState([]);
  const [searched, setSearched] = useState(false);
  const [startingDestinations, setStartingDestinations] = useState([]);
  const [endingDestinations, setEndingDestinations] = useState([]);
  const user = useContext(UserContext);

  function handleSearch() {
    setSearched(true);
    const start = document.getElementById('input-start-loc').value;
    const startId = document.querySelector(`#start-loc-list option[value="${start}"]`).dataset.value;
    const end = document.getElementById('input-end-loc').value;
    const endId = document.querySelector(`#end-loc-list option[value="${end}"]`).dataset.value;
    serverUtils.rides.searchRide(startId, endId).then((results) => {
      const unJoined = results.filter(
        (ride) => !ride.riders || !ride.riders.length || !ride.riders.includes(user.id),
      );
      setRideResults(unJoined);
    });
    setRideResults([]);
  }

  useEffect(() => {
    serverUtils.destinations.getStartingDestinations()
      .then((results) => setStartingDestinations(results));
    serverUtils.destinations.getEndingDestinations()
      .then((results) => setEndingDestinations(results));
  }, []);

  return (
    <div id="RideSearch">
      <UpdateContext.Provider value={{ update: handleSearch }}>
        <form id="ride-search-form">
          <h1>Search For Rideshares</h1>
          <label htmlFor="input-start-loc">
            PICKUP
            <input id="input-start-loc" list="start-loc-list" />
            <datalist id="start-loc-list" aria-label="Starting destination input">
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
            <input id="input-end-loc" list="end-loc-list" required />
            <datalist id="end-loc-list" aria-label="Ending destination input">
              {endingDestinations.map((destination) => (
                <option
                  key={destination.id}
                  data-value={destination.id}
                  value={destination.name}
                  aria-label={`Ending destination of ${destination.name}`}
                />
              ))}
            </datalist>
          </label>
          <button type="button" onClick={handleSearch}>Search Rides</button>
        </form>
        {
          searched || user.isDriver
            ? (
              <div id="search-results">
                <RideList
                  rides={rideResults}
                  noList={searched ? <NoRides /> : <NoSearch />}
                />
              </div>
            ) : null
        }
      </UpdateContext.Provider>
    </div>
  );
};

export default RideSearch;
