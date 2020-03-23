console.groupCollapsed('===>    CONTEXT');

function hello(){
	console.log(`Hello! You context: `, this);
}

// start of global function. Both function equal
hello();
window.hello();

const personContext = {
	name: 'NamePersonContext',
	age: 32,
	sayHello: hello,
	helloWindows: function(){hello.bind(window)},
	logInfo: function(job, phone){
		console.group(`${this.name} info:`);
		console.log(`Name: ${this.name}`);
		console.log(`Age: ${this.age}`);
		console.log(`Job: ${job}`);
		console.log(`Phone: ${phone}`);
		console.groupEnd();
	}
};

// Start function with inside context
personContext.sayHello();

// Start function with context = window
personContext.helloWindows();

personContext.logInfo('Engineer', '8-888-888-88-88');

const lena = {
	name: 'Lena',
	age: 20,
};

// Start function with other context
console.group(`Start bind, call, apply...`);
personContext.logInfo.bind(lena)('Intern', '7-777-777-77-77');
personContext.logInfo.call(lena, 'Intern', '7-777-777-77-77');
personContext.logInfo.apply(lena, ['Intern', '7-777-777-77-77']);
console.groupEnd();


//=====================================
// Example with Prototype

const arrExmpl = [1,2,3,4,5,6,7,8,9];

Array.prototype.multiBy = function(coefficient){
	return this.map(function(item){
		return item * coefficient;
	})
};

console.log(`Multiply array by 9: `,arrExmpl.multiBy(9));

// End script
console.groupEnd();