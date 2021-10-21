import React from 'react';

const NoRides = () => (
  <div id="no-rides">
    <p>No rides match your search. Create this ride for others?</p>
    <a href="/create">
      <button type="button">Create Trip</button>
    </a>
  </div>
);

export default NoRides;
