import React, { useContext, useState, useEffect } from 'react';

// Sub-Components
import RideList from '../../components/RideList/RideList';
import PayMethodList from '../../components/PayMethodList/PayMethodList';
import NoComingRides from './NoComingRides';
import NoPastRides from './NoPastRides';

// Context & Utilities
import UserContext from '../../contexts/UserContext';
import serverUtils from '../../serverUtils';

// Style Sheet
import './Dashboard.css';

const Dashboard = () => {
  const {
    id, username, paymentMethods,
  } = useContext(UserContext);
  const [rides, setRides] = useState([]);
  function fetchRides() {
    serverUtils.user.getRides(id)
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
      <div id="user-rides">
        <div id="UpcomingRides">
          <h2>Upcoming Rides</h2>
          <RideList
            rides={rides.filter((ride) => !ride.completed)}
            noList={<NoComingRides />}
            completeRide={completeRide()}
          />
        </div>
        <div id="UpcomingRides">
          <h2>Past Rides</h2>
          <RideList rides={rides.filter((ride) => ride.completed)} noList={<NoPastRides />} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
