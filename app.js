var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var morgan = require('morgan');
var dotenv = require('dotenv');

// use dotenv for secrets
// https://www.npmjs.com/package/dotenv
dotenv.config();

var app = express();

app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json());
// extended : set to true for nested objects
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json()); // middleware for post data

// routes
app.use(express.static(path.join(__dirname, 'routes')));
var allRoutes = require('./routes/routeDefinations'); // all route definitions
for (const [key, value] of Object.entries(allRoutes)) {
	app.use('/api', value); // use all routes
}

// test route :D
app.get('/api/ping', (req, res) => {
	res.send('hi!!');
});

module.exports = app;
