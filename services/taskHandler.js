/* eslint-disable */
const { fork } = require('child_process');

// uses fork() to create new node processes
// sends arguements and options to children
// sends KILL signals to control execution
// communicates with child using IPC
// supports starting, pausing, resuming and killing processes

class TaskHandler {
	// contstructor
	constructor(src, args, options) {
		this._forked = undefined;
		this._has_started = false;
		this._is_running = false;
		this._src = src;
		this._args = args;
		this._options = options;
	}

	// start the process if not started yet, otherwise resume if paused
	start() {
		if (!this._has_started) {
			this._has_started = true;
			this._is_running = true;
			this._forked = fork(this._src, this._args, this._options);

			// log messages sent by child
			this._forked.on('message', (m) => {
				console.log('PARENT got message:', m);
				if (m.status === `exit`) {
					// process has finished executing, kill it to release resources
					this.kill();
				}
			});

			this._forked.send({ status: `start` });
			return 'task started';
		} else {
			if (!this._is_running) {
				this._is_running = true;
				this._forked.kill('SIGCONT');
				this._forked.send({ status: `resume` });
				return 'task started';
			} else {
				return 'task is already running';
			}
		}
	}

	// pause the execution of child
	stop() {
		if (this._has_started && this._is_running) {
			this._forked.send({ status: `pause` });
			this._forked.kill('SIGSTOP');
			this._is_running = false;
			return 'task stopped';
		} else {
			return 'task is not running yet';
		}
	}

	// kill the child
	kill() {
		if (this._has_started) {
			this._is_running = false;
			this._has_started = false;
			this._forked.send({ status: `exit` });
			this._forked.kill('SIGTERM');
			return 'task killed';
		} else {
			return 'task not started yet';
		}
	}
}

module.exports = TaskHandler;
