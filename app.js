const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');

const app = express();
app.use(bodyParser.json());

app.use('/api', controller);

module.exports = app;