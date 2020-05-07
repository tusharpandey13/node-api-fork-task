/* eslint-disable */
// you may want to uncomment the above line if you want eslint

// genericRoute route file

var router = require('express').Router();
const genericModel = require('../models/genericModel');

/*
 * you can easily add a bunch of POST routes here
 * that have the same syntax(input 'data' is forwarded
 * to the respective model) without defining them all seperately
 *
 * all routes are availiable at http://IP:PORT/api/partial/route/url
 * where 'partial/route/url' is defined below
 *
 * edit the names of routes and respective model functions
 * in the object 'postRoutes' below
 *
 * the syntax is:
 * '<partial/route/url>' : model.handlerfunction,
 * where handlerfunction can be inside the respective model
 *
 */

const postRoutes = {
	'/genericRoute/add': genericModel.add,
	'/genericRoute/deactivate': genericModel.deactivate,
	'/genericRoute/activate': genericModel.activate,
	'/genericRoute/get': genericModel.get,
	'/genericRoute/update': genericModel.add,
};

// all thses routes are POST and have the same logic.
// so defining them here and calling them in a loop.

// WARNING: DO NOT TOUCH
for (const [k, v] of Object.entries(postRoutes)) {
	router.post(k, (req, res, next) => {
		v(req.body)
			.then((result) => {
				res.json(result);
			})
			.catch((err) => {
				console.log(err); // you might want to comment this line
				res.json(err);
			});
	});
}

// you can define your GET routes here manually

module.exports = router;
