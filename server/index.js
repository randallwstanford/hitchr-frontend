/* eslint-disable no-console */
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;
const expressStaticGzip = require('express-static-gzip');

// Serve Static Assets (serve the gzipped version first, if possible)
app.use(expressStaticGzip(path.join(__dirname, '..', 'client', 'dist')));
app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));

// API Forwarding
app.use('/api/', (req, res) => {
  const baseUrl = 'http://localhost:5000/api';
  const url = baseUrl + req.path;
  axios({
    method: req.method,
    url,
    data: req.body,
    params: req.query,
  })
    .then((apiRes) => {
      res.status(apiRes.status).send(apiRes.data);
    })
    .catch((err) => console.log(err));
});

// Serve client app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'client', 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`\nI'm listening on PORT ${PORT}! 👂\n`);
});
