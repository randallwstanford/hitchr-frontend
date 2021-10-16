import React from 'react';

const UpcomingTrips = () => {
  const completeRide = () => {
    // Complete Ride
  };

  return (
    <div>
      <h2>Upcoming Trips</h2>
      {/* -----Mapped elements----- */}
      <div>
        <span>Start</span>
        <span>End</span>
        <span>User</span>
        <button onClick={completeRide}>Ride Complete</button>
      </div>
      {/* -----Mapped elements----- */}
    </div>
  )
};

export default UpcomingTrips;