// import fs from 'fs';
var winston = require('winston');

// import 'winston-daily-rotate-file';

// Use LOG_DIR from env
// const LOG_DIR = process.env.LOG_DIR || 'logs';
// const LOG_LEVEL = process.env.LOG_LEVEL || 'info';

// Create log directory if it does not exist
// if (!fs.existsSync(LOG_DIR)) {
// 	fs.mkdirSync(LOG_DIR);
// }

/**
 * Create a new winston logger.
 */
const logger = winston.createLogger({
	transports: [
		new winston.transports.Console({
			format: winston.format.combine(
				winston.format.colorize(),
				winston.format.simple()
			),
			// level: LOG_LEVEL,
		}),
		// new winston.transports.DailyRotateFile({
		// 	format: format.combine(format.timestamp(), format.json()),
		// 	maxFiles: '14d',
		// 	level: LOG_LEVEL,
		// 	dirname: LOG_DIR,
		// 	datePattern: 'YYYY-MM-DD',
		// 	filename: '%DATE%-debug.log',
		// }),
	],
});

// logStream class
module.exports.logStream = {
	/**
	 * A writable stream for winston logger.
	 *
	 * @param {any} message
	 */
	write(message) {
		logger.info(message.toString());
	},
};

module.exports.log = logger;
