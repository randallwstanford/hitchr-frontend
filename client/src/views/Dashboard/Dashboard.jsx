import React, { useContext, useState, useEffect } from 'react';

// Sub-Components
import UpcomingRides from './UpcomingRides/UpcomingRides';

// Context
import UserContext from '../../contexts/UserContext';
import PayMethodList from '../../components/PayMethodList/PayMethodList';

import './Dashboard.css';
import serverUtils from '../../serverUtils';

const Dashboard = () => {
  const { username, sessionId, paymentMethods } = useContext(UserContext);
  const [rides, setRides] = useState([]);
  function fetchRides() {
    serverUtils.user.getRides(sessionId)
      .then((userRides) => {
        setRides(userRides);
      });
  }
  const completeRide = () => {
    const rideData = {};
    serverUtils.user.completeRide(rideData)
      .then(() => {})
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchRides();
  }, []);
  return (
    <div id="Dashboard">
      <div id="user-info">
        <span>{ username }</span>
        <PayMethodList methods={paymentMethods} />
      </div>
      <UpcomingRides rides={rides} completeRide={completeRide} />
    </div>
  );
};

export default Dashboard;
