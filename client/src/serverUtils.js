const axios = require('axios');

const baseUrl = 'http://localhost:3000/api';

export default {
  ride: {
    postRide: (formData) => new Promise((resolve, reject) => {
      axios.post(`${baseUrl}/ride`, formData)
        .then(({ data }) => resolve(data))
        .catch(reject);
    }),
  },
};
