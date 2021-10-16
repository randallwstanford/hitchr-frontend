import React from 'react';

const NewRide = () => {
  const addRide = () => {
    // Post New Ride
  };

  return (
    <div>
      <h1>Hitchr</h1>
      <h3>Post a new ride</h3>
      <form onSubmit={addRide}>
        <input name="startPoint" />
        <input name="endPoint" />
        <button type="submit">Submit</button>
        <div>-MAP GOES HERE-</div>
      </form>
    </div>
  );
};

export default NewRide;
