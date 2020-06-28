// var path = require('path');
var cors = require('cors');
var morgan = require('morgan');
var dotenv = require('dotenv');
var helmet = require('helmet');
var express = require('express');
var totoro = require('totoro-node');

var logger = require('./utils/logger.js');
var errorHandler = require('./middlewares/errorHandler.js');
var json = require('./middlewares/json.js');
var routes = require('./api/index.js');

// use dotenv for secrets; https://www.npmjs.com/package/dotenv
dotenv.config();

var app = express();

app.use(cors());
app.use(helmet());
app.use(morgan('tiny', { stream: logger.logStream }));
app.use(errorHandler.bodyParser);
app.use(json);
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use('/api', totoro.rain(routes, logger.log));

module.exports = app;
