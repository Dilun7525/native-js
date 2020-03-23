console.groupCollapsed('===>    ASYNC, AWAIT, FETCH');

const urlJson = 'https://jsonplaceholder.typicode.com/todos';

const delay = ms => {
	return new Promise(r => setTimeout(()=>r(), ms))
};

// function fetchTodos(){
// 	console.log('Fetch todo started...');
// 	return delay(2000)
// 		.then(() => fetch(urlJson))
// 		.then(response => response.json());
// }
//
// fetchTodos()
// 	.then(data => console.log('Data:', data))
// 	.catch(e => console.log(e))
// 	.finally(() => console.groupEnd());

////////////////////////////////////////////////
// the same functionality with async and await

/**
 * The await operator is used to wait for a Promise.
 * It can only be used inside an async function.
 * @return {Promise}
 */
async function fetchAsyncTodos(){
	console.log('Fetch todo started...');
	try{
		await delay(2000);
		const response = await fetch(urlJson);
		const data = await response.json();
		console.log('Data:', data)
	}catch(e){
		console.log('Error:', e);
	}
}

//-----------------------------------------------------------------------------
//| NOTE: function call commented out for normal output of subsequent scripts |
//-----------------------------------------------------------------------------

//fetchAsyncTodos().then(() => console.groupEnd());
console.groupEnd();