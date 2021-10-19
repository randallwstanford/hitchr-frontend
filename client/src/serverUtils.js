import rideList from './dummyData/rideList';
import * as camelcaseKeys from 'camelcase-keys';

const axios = require('axios');

const baseUrl = `${process.env.API_URL}/api`;

export default {
  ride: {
    postRide: (formData) => new Promise((resolve, reject) => {
      axios.post(`${baseUrl}/ride`, formData)
        .then(({ data }) => resolve(data))
        .catch(reject);
    }),
    searchRide: (start, end) => new Promise((resolve, reject) => {
      axios.get(`${baseUrl}/ride?start=${start}&end=${end}`)
        .then(({ data }) => resolve(data))
        .catch(reject);
    }),
    addRider: (rideId) => new Promise((resolve, reject) => {
      axios.patch(`${baseUrl}/ride/${rideId}`)
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
      if (process.env.API_URL) {
        axios.get(`/user/${userId}/rides`)
          .then(({ data }) => resolve(data))
          .catch(reject);
      } else {
        resolve(camelcaseKeys(rideList.body.rides));
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
