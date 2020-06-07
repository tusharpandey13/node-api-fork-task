var routes = {
	v1: { genericRoute: require('./v1/routes/genericRoute.js') },
};

// WARNING: DO NOT TOUCH
// guaranteed to get dependencies
module.exports = () => {
	const app = require('express').Router();

	// uses the format ip:port/api/v{n}/{route}/{method}

	for (const [k0, v0] of Object.entries(routes)) {
		let tmp_app = require('express').Router();
		app.use(`/${k0}`, tmp_app);
		for (const [k1, v1] of Object.entries(v0)) {
			v1(tmp_app);
		}
	}

	return app;
};
