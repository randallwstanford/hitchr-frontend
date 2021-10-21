// React
import React, { useState, useContext } from 'react';

// Stylesheet
import './CreateRide.css';
import GMap from '../../components/GMap/GMap';

import serverUtils from '../../serverUtils';

import UserContext from '../../contexts/UserContext';
/* eslint-disable jsx-a11y/label-has-associated-control */

const getDateformat = (dateOb) => {
  const date = (`0${dateOb.getDate()}`).slice(-2);
  const month = (`0${dateOb.getMonth() + 1}`).slice(-2);
  const year = dateOb.getFullYear();
  const hours = dateOb.getHours();
  const minutes = dateOb.getMinutes();
  const seconds = dateOb.getSeconds();
  const result = `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
  return result;
};

function CreateRide() {
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  const { username, isDriver } = useContext(UserContext);
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
    if (!isDriver) {
      return;
    }
    // todo: get driverId
    const submitBody = { // convert format in server side
      usernametodriverId: username,
      startDestName: event.target[0].value, // 0
      endDestName: event.target[1].value, // 1
      availableSeats: event.target[3].value, // 3
      completed: getDateformat(new Date()),
      price: event.target[2].value, // 2
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
