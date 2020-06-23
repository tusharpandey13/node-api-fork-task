/* eslint-disable */

module.exports.get_dummy = (apiVersion, req, res, next) => {
	return res.status(200).json({
		data: [
			{
				a: 0.01,
				b: 0.01,
				c: 0.018,
				d: 0.015,
				e: 0.017,
			},
		],
		timestamp: Date.now(),
	});
};
