// React
import React, { useState } from 'react';

// Stylesheet
import './CreateRide.css';
import GMap from '../../components/GMap/GMap';

import serverUtils from '../../serverUtils';
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
  const handleSubmit = (event) => {
    event.preventDefault();
    const submitBody = {
      driverId: 6, startDest: 7, endDest: 8, availableSeats: 2, completed: '2021-05-01 11:15:11', price: 110,
    };
    serverUtils.ride.postRide(submitBody)
      .then(() => { console.log('post ride successfully'); })
      .catch((err) => console.log(err));
  };
  return (
    <div id="CreateRide">
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Create Ride</button>
      </form>
      <GMap start={start} end={end} />
    </div>
  );
}

export default CreateRide;
