// React
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Loader } from '@googlemaps/js-api-loader';

// Stylesheet
import './GMap.css';
import GMapKey from './gMapKey';

const GMap = ({ start, end }) => {
  console.log(GMapKey);
  function initMap() {
    return new Promise((resolve) => {
      const loader = new Loader({
        apiKey: GMapKey,
        version: 'weekly',
      });
      loader.load().then((googleData) => {
        const google = googleData;
        const directionsRenderer = new googleData.maps.DirectionsRenderer();
        const directionsService = new googleData.maps.DirectionsService();
        const denver = new google.maps.LatLng(39.7392, -104.9903);
        const map = new googleData.maps.Map(document.getElementById('map'), {
          zoom: 5,
          center: denver,
          disableDefaultUI: true,
        });
        directionsRenderer.setMap(map);
        if (start && end) {
          directionsService
            .route({
              origin: {
                query: start,
              },
              destination: {
                query: end,
              },
              travelMode: google.maps.TravelMode.DRIVING,
            })
            .then((response) => {
              directionsRenderer.setDirections(response);
            })
            .catch((e) => window.alert(e));
        }
        resolve();
      });
    });
  }
  useEffect(() => {
    initMap();
  }, [start, end]);
  return (<div id="map" />);
};
export default GMap;

GMap.propTypes = {
  start: PropTypes.string,
  end: PropTypes.string,
};
GMap.defaultProps = {
  start: null,
  end: null,
};
