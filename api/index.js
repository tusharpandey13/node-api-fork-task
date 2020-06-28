const exampleController = require('./controllers/example');

// simple adding of routes
// routes definitions

module.exports = {
	v1: {
		endpoints: [
			{
				// GET http://0.0.0.0:3000/api/v1/task/start will respond to this
				route: '/task/start',
				method: 'GET',
				implementation: exampleController.start,
			},
			{
				route: '/task/stop',
				method: 'GET',
				implementation: exampleController.stop,
			},
			{
				route: '/task/kill',
				method: 'GET',
				implementation: exampleController.kill,
			},
			{
				route: '/task/echo',
				method: 'GET',
				implementation: exampleController.echo,
			},
		],
	},
};
