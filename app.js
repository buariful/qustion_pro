const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./routes');

app.use(express.json());
app.use(cors());

app.use('/api/v1', router);

app.get('/', (req, res) => {
  res.send('The app is running as butter!');
});

module.exports = app;
