const exampleController = require('./controllers/example');

module.exports = {
	v1: {
		endpoints: [
			{
				route: '/metric/get-dummy',
				method: 'GET',
				implementation: exampleController.get_dummy,
				// active: true,
				// deprecated: false,
			},
			// {
			// 	route: '/another/test/endpoint',
			// 	method: 'POST',
			// 	implementation: anotherImplementationFunction,
			// },
		],
		// active: true,
		// deprecated: false,
	},
};
