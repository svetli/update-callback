/* global window */
'use strict';

const callbackRegister = [];
let tick = 0;

const addUpdateCallback = (priority, callback) => {
	let position = 0;

	for (let i = 0; i < callbackRegister.length; i++) {
		if (priority < callbackRegister[i].priority) {
			position++;
		}
	}

	callbackRegister.splice(position, 0, {
		priority,
		callback
	});
};

const removeUpdateCallback = callback => {
	for (let i = 0; i < callbackRegister.length; i++) {
		if (callbackRegister[i].callback === callback) {
			callbackRegister.splice(i, 1);
			break;
		}
	}
};

const run = time => {
	callbackRegister.forEach(cb => cb.callback(time));
};

const watch = () => {
	const date = new Date();
	const now = date.getTime() / 1000;

	if (tick === 0) {
		tick = now;
	}

	run(now - tick);
	window.requestAnimationFrame(watch);
	tick = now;
};

watch();

module.exports = {
	addUpdateCallback,
	removeUpdateCallback
};
