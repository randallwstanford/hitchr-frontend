import React from 'react';

// Stylesheet
// import './RideSearch.css';

const RideSearch = () => (
  <div>
    <form>
      <input id="input-start-loc" />
      <input id="input-start-loc" />
      <button type="submit">Search Rides</button>
    </form>
    <div id="search-results">
      { /* TODO: Add search results sub-component */ }
    </div>
  </div>
);
export default RideSearch;
