var dummy = (data) => {
	return new Promise((resolve, reject) => {
		if (data.fail === '1') {
			reject('Failed');
		} else {
			resolve('Dummy response');
		}
	});
};

module.exports = {
	add: dummy,
	deactivate: dummy,
	activate: dummy,
	get: dummy,
	update: dummy,
};
