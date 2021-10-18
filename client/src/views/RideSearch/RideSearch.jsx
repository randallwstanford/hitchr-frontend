/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import RideList from '../../components/RideList/RideList';
import serverUtils from '../../serverUtils';

// Stylesheet
import './RideSearch.css';

const RideSearch = () => {
  const [rideResults, setRideResults] = useState([]);
  function handleSearch() {
    const start = document.getElementById('input-start-loc').value;
    const end = document.getElementById('input-end-loc').value;
    serverUtils.searchRide(start, end).then((results) => setRideResults(results));
    setRideResults([]);
  }
  return (
    <div id="RideSearch">
      <table id="ride-search-form">
        <tbody>
          <tr>
            <td>
              <label htmlFor="input-start-loc">
                Starting Location:
              </label>
            </td>
            <td>
              <input id="input-start-loc" />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="input-start-loc">
                Ending Location:
              </label>
            </td>
            <td>
              <input id="input-end-loc" />
            </td>
          </tr>
        </tbody>
        <button type="button" onClick={handleSearch}>Search Rides</button>
      </table>
      <div id="search-results">
        <RideList rides={rideResults} />
      </div>
    </div>
  );
};
export default RideSearch;
