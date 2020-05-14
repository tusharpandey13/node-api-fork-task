var routes = {
	genericRoute: require('./routes/genericRoute.js'),
};

// guaranteed to get dependencies
module.exports = () => {
	const app = require('express').Router();

	// genericRoute(app);
	// WARNING: DO NOT TOUCH
	for (const [k, v] of Object.entries(routes)) {
		v(app);
	}

	return app;
};
