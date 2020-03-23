//--------------------------------------------------------------------------
//| NOTE: setTimeout commented out for normal output of subsequent scripts |
//--------------------------------------------------------------------------

console.groupCollapsed('===>    EVENT LOOP, SETTIMEOUT');

console.log('Start');

//setTimeout(function(){
	console.log('Inside setTimeout!');
//}, 0);

let sum =0;
const maxLimit = 9999;
for(let i=1; i<maxLimit; i++){
	sum = sum + i;
}
console.log(`Sum 1-${maxLimit}: ${sum}`);

//setTimeout(function(){
	console.log(
		' -----------------------------------------------------------  \n' +
		' |       CALL STACK         |          WebAPIs             |  \n' +
		' |---------------------------------------------------------|  \n' +
		' | sequentially from the    |  All asynchronous operations |  \n' +
		' | beginning of the script  |  from the stack are          |  \n' +
		' | to the end               |  registered here             |  \n' +
		' |       ⇶⇶⇶⇶⇶⇶⇶⇶⇶⇶⇶⇶⇶⇶⇶⇶⇶⇶⇶|                              |  \n' +
		' |       ==     ASYNC     >>|                              |  \n' +
		' |       ⇶⇶⇶⇶⇶⇶⇶⇶⇶⇶⇶⇶⇶⇶⇶⇶⇶⇶⇶|  ⟱⟱⟱⟱⟱⟱⟱⟱⟱⟱⟱⟱⟱⟱⟱⟱⟱⟱ |  \n' +
		' |---------------------------------------------------------|  \n' +
		' | ⟰⟰⟰⟰⟰⟰⟰⟰⟰⟰⟰⟰⟰⟰⟰⟰                                |  \n' +
		' |                    CALLBACK QUEUE                       |  \n' +
		' |  Performed according to the order of receipt!           |  \n' +
		' |  Example:   setTimeout, click, ...                      |  \n' +
		' |----------------------------------------------------------  '
	);
	
	console.groupEnd();
//}, 100);
//console.log('End');
