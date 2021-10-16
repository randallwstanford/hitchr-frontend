const axios = require('axios');

const baseUrl = 'http://localhost:3000/api';

export default {
  ride: {
    postRide: (formData) => new Promise((resolve, reject) => {
      axios.post(`${baseUrl}/ride\`${formData}`)
        .then(({ data }) => resolve(data))
        .catch(reject);
    }),
  },
  user: {
    getAnswerList: (userId) => new Promise((resolve, reject) => {
      axios.get(`${baseUrl}/user/${userId}`)
        .then(({ data }) => resolve(data))
        .catch(reject);
    }),
    getMessages: (userId, recipientId) => new Promise((resolve, reject) => {
      axios.get(`${baseUrl}/messages/${userId}/?recipient=${recipientId}`)
        .then(({ data }) => resolve(data))
        .catch(reject);
    }),
    postMessage: (formData) => new Promise((resolve, reject) => {
      const { userId, recipientId } = formData; // ?
      axios.post(`${baseUrl}/messages/${userId}?recipient=${recipientId}`, formData)
        .then(({ data }) => resolve(data))
        .catch(reject);
    }),
  },
};
