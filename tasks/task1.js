// task file

// process messages sent by parent
process.on('message', (m) => {
	console.log('CHILD got message:', m);
});

// process environment variables passed by parent
console.log(`child got env.text: ${process.env.text}`);

// async function to emulate heavy task
var f = async () => {
	console.log(`running heavy task...`);
	for (let i = 0; i < 100; i++) {
		console.log(`${i}%`);
		await new Promise((r) => setTimeout(r, 1000));
	}
	process.send({ status: `exit` });
};

// do heavy task
f();
