var path = require('path');
var cors = require('cors');
var morgan = require('morgan');
var dotenv = require('dotenv');
var helmet = require('helmet');
var express = require('express');

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
// app.use(express.json);

// // routes
// app.use(express.static(path.join(__dirname, 'routes')));
// var allRoutes = require('./api/routeDefinations'); // all route definitions
// for (const [key, value] of Object.entries(allRoutes)) {
// 	app.use('/api', value); // use all routes
// }

// API Routes
app.use('/api', routes());

// test route :D
app.get('/ping', (req, res) => {
	res.send('hi!!');
});

module.exports = app;
