/* eslint-disable */
// you may want to uncomment the above line if you want eslint

var router = require('express').Router();
// const genericModel = require('../models/genericModel');

module.exports = (app) => {
	app.use('/genericRoute', router);

	router.get('/get', (req, res) => {
		return res.json({ abc: 'def' });
	});
};
