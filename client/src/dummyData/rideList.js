// GET: '/api/ride?start=:start&end=:end'
// Response:

export default {
  body: {
    rides: [
      {
        ride_id: 12345,
        driver: {
          driver_id: 12345,
          username: 'MrDriver',
          rating: 4.5,
        },
        price: '$48.90',
        seats: 3,
        start_dest: 'Denver, Colorado',
        end_dest: 'Fort Collins, Colorado',
      },
      {
        ride_id: 12346,
        driver: {
          driver_id: 12345,
          username: 'MrsDriver',
          rating: 4.8,
        },
        price: '$55.17',
        seats: 5,
        start_dest: 'Denver, Colorado',
        end_dest: 'Fort Collins, Colorado',
      },
      {
        ride_id: 12347,
        driver: {
          driver_id: 12345,
          username: 'MrDriverJr',
          rating: 2.5,
        },
        price: '$38.75',
        seats: 2,
        start_dest: 'Denver, Colorado',
        end_dest: 'Fort Collins, Colorado',
      },
    ],
  },
};
