import React from 'react';

// Stylesheet
// import './RideSearch.css';

const RideSearch = () => (
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
      { /* TODO: Add search results sub-component */ }
    </div>
  </div>
);
export default RideSearch;
