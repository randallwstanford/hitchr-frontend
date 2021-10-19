// React
import React, { useState } from 'react';

// Stylesheet
import './CreateRide.css';
import GMap from '../../components/GMap/GMap';

/* eslint-disable jsx-a11y/label-has-associated-control */

function CreateRide() {
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  function handleStartInput() {
    const startInput = document.getElementById('input-start-loc').value;
    setStart(startInput);
  }
  function handleEndInput() {
    const endInput = document.getElementById('input-end-loc').value;
    setEnd(endInput);
  }
  function handleSubmit() {}
  return (
    <div id="CreateRide">
      <form>
        <label htmlFor="input-start-loc">
          Starting Location:
          <input id="input-start-loc" onBlur={handleStartInput} />
        </label>
        <label htmlFor="input-end-loc">
          Ending Location:
          <input id="input-end-loc" onBlur={handleEndInput} />
        </label>
        <label htmlFor="input-price">
          Price:
          <input id="input-price" type="number" step="0.01" min="0" max="1000000000" />
        </label>
        <label htmlFor="input-seats">
          Available Seats:
          <input id="input-seats" type="number" min="0" max="50" />
        </label>
        <button type="button" onClick={handleSubmit}>Create Ride</button>
      </form>
      <GMap start={start} end={end} />
    </div>
  );
}

export default CreateRide;
