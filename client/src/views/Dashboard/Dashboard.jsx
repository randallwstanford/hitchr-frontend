import React, { useContext, useState, useEffect } from 'react';

// Sub-Components
import RideList from '../../components/RideList/RideList';
import PayMethodList from '../../components/PayMethodList/PayMethodList';
import NoComingRides from './NoComingRides';
import NoPastRides from './NoPastRides';

// Context & Utilities
import UserContext from '../../contexts/UserContext';
import UpdateContext from '../../contexts/UpdateContext';
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
      .then(() => { })
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchRides();
  }, []);
  return (
    <div id="Dashboard">
      <UpdateContext.Provider value={{ update: fetchRides }}>
        <div id="user-info">
          <span>{username}</span>
          <PayMethodList methods={paymentMethods} />
        </div>
        <div>
          <div id="user-rides">
            <h2>Driver Dashboard</h2>
            <div id="UpcomingRides">
              <h3>Upcoming Rides</h3>
              <RideList
                rides={
                  rides && rides.driver
                    ? rides.driver.filter((ride) => !ride.completed)
                    : null
                }
                noList={<NoComingRides />}
                completeRide={completeRide}
              />
            </div>
            <div id="UpcomingRides">
              <h3>Past Rides</h3>
              <RideList
                rides={
                  rides && rides.driver ? rides.driver
                    .filter((ride) => ride.completed)
                    .sort((a, b) => (a.rideId > b.rideId ? -1 : 1))
                    : null
                }
                noList={<NoPastRides />}
              />
            </div>
          </div>
          <div id="user-rides">
            <h2>Rider Dashboard</h2>
            <div id="UpcomingRides">
              <h3>Upcoming Rides</h3>
              <RideList
                rides={rides && rides.rider ? rides.rider.filter((ride) => !ride.completed) : null}
                noList={<NoComingRides />}
                completeRide={completeRide}
              />
            </div>
            <div id="UpcomingRides">
              <h3>Past Rides</h3>
              <RideList
                rides={
                  rides && rides.rider ? rides.rider
                    .filter((ride) => ride.completed)
                    .sort((a, b) => (a.rideId > b.rideId ? -1 : 1))
                    : null
                }
                noList={<NoPastRides />}
              />
            </div>
          </div>
        </div>
      </UpdateContext.Provider>
    </div>
  );
};

export default Dashboard;
