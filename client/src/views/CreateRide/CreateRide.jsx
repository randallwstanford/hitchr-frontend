// React
import React, {useState} from 'react';

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
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="input-start-loc">Starting Location:</label>
              </td>
              <td>
                <input id="input-start-loc" onBlur={handleStartInput} />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="input-end-loc">Ending Location:</label>
              </td>
              <td>
                <input id="input-end-loc" onBlur={handleEndInput} />
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
          </tbody>
        </table>
        <button type="button" onClick={handleSubmit}>Create Ride</button>
      </form>
      <GMap start={start} end={end} />
    </div>
  );
}

export default CreateRide;
