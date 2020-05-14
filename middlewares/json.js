var Boom = require('@hapi/boom');
var _isEmpty = require('lodash.isempty');

/**
 * Middleware to handle empty JSON body requests and other edge cases if any.
 *
 * @param  {Object}   request
 * @param  {Object}   response
 * @param  {Function} next
 */
module.exports = (request, response_ignore, next) => {
	const { body, method } = request;
	const disallowedHttpHeaders = ['PUT', 'POST', 'PATCH'];

	if (
		request.is('application/json') &&
		disallowedHttpHeaders.includes(method) &&
		_isEmpty(body)
	) {
		throw Boom.badRequest('Empty JSON');
	}

	next();
};
