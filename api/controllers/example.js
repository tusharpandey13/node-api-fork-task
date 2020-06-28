/* eslint-disable */
var TaskHandler = require('../../services/taskHandler');

// make a new task
// syntax is new TaskHandler(src, args, options)
// refer https://nodejs.org/api/child_process.html#child_process_child_process_fork_modulepath_args_options

var task1 = new TaskHandler(`tasks/task1`, [], { env: { text: `T` } });

//
// route controllers
//

module.exports.start = (apiVersion, req, res, next) => {
	return res.send(task1.start());
};

module.exports.stop = (apiVersion, req, res, next) => {
	return res.send(task1.stop());
};

module.exports.kill = (apiVersion, req, res, next) => {
	console.log(`killing task, perform rollup action here`);
	return res.send(task1.kill());
};

module.exports.echo = (apiVersion, req, res, next) => {
	return res.send('echo');
};
