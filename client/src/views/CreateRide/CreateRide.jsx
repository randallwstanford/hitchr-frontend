// React
import React from 'react';

// Stylesheet
import './CreateRide.css';

function CreateRide() {
  function handleSubmit() {}
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
        <label htmlFor="input-price">
          Price:
          <input id="input-price" type="number" step="0.01" min="0" max="1000000000" />
        </label>
        <label htmlFor="input-seats">
          Available Seats:
          <input id="input-seats" type="number" min="0" max="50" />
        </label>
        {/* TODO: Stretch Goal: Google Map */}
        <button type="button" onClick={handleSubmit}>Create Ride</button>
      </form>
    </div>
  );
};

export default CreateRide;
