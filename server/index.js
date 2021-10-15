/* eslint-disable no-console */
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const expressStaticGzip = require('express-static-gzip');

// Serve Static Assets (serve the gzipped version first, if possible)
app.use(expressStaticGzip(path.join(__dirname, '..', 'client', 'dist')));
app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));

// Serve client app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'client', 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`\nI'm listening on PORT ${PORT}! 👂\n`);
});
