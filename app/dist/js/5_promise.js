//--------------------------------------------------------------------------
//| NOTE: setTimeout commented out for normal output of subsequent scripts |
//--------------------------------------------------------------------------

console.groupCollapsed('===>    PROMISES');

// Example: emulate request client-server

console.log('Requesting data from the server...');

const responseServer = new Promise((resolve, reject) => {
	//setTimeout(() => {
		console.log('Preparing data...');
		const backendData = {
			status: 'ok',
			sever: 'ngnx',
			port: 999
		};
		resolve(backendData);
	//}, 2000)
	
});

responseServer
	.then((data) => {
		return new Promise((resolve, reject) => {
			//setTimeout(() => {
				console.log(`Backend data: `, data);
				console.log('Modify data...');
				data.modifayOnClient = true;
				resolve(data);
			//}, 1000);
		});
	})
	.then(clientData => {
		console.log(`Client data: `, clientData);
	})
	.catch(err => {
		console.error('Error: ', err);
	})
	.finally(() => {
		console.log('Finally operation...');
		console.groupEnd();
	});


// Example: sleep()
const sleep = ms => new Promise(resolve => setTimeout(() => resolve(ms), ms));

//sleep(2000).then(ms => console.log(`Sleep by ${ms} ms`));
//sleep(1000).then(ms => console.log(`Sleep by ${ms} ms`));
