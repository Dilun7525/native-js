console.groupCollapsed('===>    CLOSURE');

const funcSum = function(num){
	return function(n){
		return n + num; // the variable "num" is closed inside the function
	}
};

const addTwo = funcSum(2);

console.log('2 + 1 =', addTwo(1));		// return: 3
console.log('2 + 100 =', addTwo(100));	// return: 1002

//============================
// Write own function bind

function logPerson(){
	console.log(`${this.name} age ${this.age} job ${this.job}`);
}

const closurePersonM = {name: 'Mihaile', age: '40', job: 'Architect'};
const closurePersonF = {name: 'Anna', age: '22', job: 'Frontender'};

const bind = function(object, fun){
	return function(...args){
		fun.apply(object, args);
		args.length && console.log(`==>args: ${args}`);
	};
};

console.group('Example: write own function bind...');
bind(closurePersonM, logPerson)();
bind(closurePersonF, logPerson)( '8-888-888-88-88', 'Moscow');
console.groupEnd();

// End script
console.groupEnd();