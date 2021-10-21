import axios from 'axios';
import camelcaseKeys from 'camelcase-keys';
import rideList from './dummyData/rideList';

const baseUrl = `${process.env.API_URL}/api`;

export default {
  destinations: {
    getStartingDestinations: () => new Promise((resolve, reject) => {
      axios.get(`${baseUrl}/destinations/start`)
        .then(({ data }) => resolve(data))
        .catch(reject);
    }),
  },
  ride: {
    postRide: (formData) => new Promise((resolve, reject) => {
      axios.post(`${baseUrl}/ride`, formData)
        .then(({ data }) => resolve(data))
        .catch(reject);
    }),
    searchRide: (start, end) => new Promise((resolve, reject) => {
      axios.get(`${baseUrl}/rides?start=${start}&end=${end}`)
        .then(({ data }) => resolve(data))
        .catch(reject);
    }),
    addRider: (rideId) => new Promise((resolve, reject) => {
      axios.patch(`${baseUrl}/ride/${rideId}`)
        .then(({ data }) => resolve(data))
        .catch(reject);
    }),
    completeRide: (rideId) => new Promise((resolve, reject) => {
      axios.patch(`${baseUrl}/ride/${rideId}/complete`)
        .then(({ data }) => resolve(data))
        .catch(reject);
    }),
  },
  user: {
    getUser: (userId) => new Promise((resolve, reject) => {
      axios.get(`${baseUrl}/user/${userId}`)
        .then(({ data }) => resolve(data))
        .catch(reject);
    }),
    getRides: (userId) => new Promise((resolve, reject) => {
      if (process.env.API_URL || process.env.INTEGRATION) {
        axios.get(`${baseUrl}/user/${userId}/rides`)
          .then(({ data }) => {
            resolve(data);
          })
          .catch((err) => reject(err));
      } else {
        camelcaseKeys(rideList.body.rides, { deep: true });
        resolve(camelcaseKeys(rideList.body.rides, { deep: true }));
      }
    }),
    completeRide: (rideData) => new Promise((resolve, reject) => {
      if (process.env.API_URL) {
        axios.patch(`/user/${rideData.rideId}/complete`, rideData)
          .then(({ data }) => resolve(data))
          .catch(reject);
      } else {
        resolve();
      }
    }),
  },
  messages: {
    getMessages: (userId, recipientId) => new Promise((resolve, reject) => {
      axios.get(`${baseUrl}/messages/${userId}/?recipient=${recipientId}`)
        .then(({ data }) => resolve(data))
        .catch(reject);
    }),
    postMessage: (formData, userId, recipientId) => new Promise((resolve, reject) => {
      axios.post(`${baseUrl}/messages/${userId}?recipient=${recipientId}`, formData)
        .then(({ data }) => resolve(data))
        .catch(reject);
    }),
  },
};
