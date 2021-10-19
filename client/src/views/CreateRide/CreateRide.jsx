// React
import React from 'react';

// Stylesheet
import './CreateRide.css';

/* eslint-disable jsx-a11y/label-has-associated-control */

function CreateRide() {
  function handleSubmit() {}
  return (
    <div id="CreateRide">
      <table>
        <tr>
          <td>
            <label htmlFor="input-start-loc">Starting Location:</label>
          </td>
          <td>
            <input id="input-start-loc" />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="input-end-loc">Ending Location:</label>
          </td>
          <td>
            <input id="input-end-loc" />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="input-price">Price:</label>
          </td>
          <td>
            <input id="input-price" type="number" step="0.01" min="0" max="1000000000" />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="input-seats">Available Seats:</label>
          </td>
          <td>
            <input id="input-seats" type="number" min="0" max="50" />
          </td>
        </tr>
        {/* TODO: Stretch Goal: Google Map */}
        <button type="button" onClick={handleSubmit}>Create Ride</button>
      </table>
    </div>
  );
}

export default CreateRide;
