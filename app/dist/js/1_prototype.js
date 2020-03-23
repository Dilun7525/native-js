console.groupCollapsed('===>    PROTOTYPE');

const personProto = {
	name: 'Anatoliy',
	age: 32,
	toString: () => `${personProto.hello()} ${personProto.name} - ${personProto.age} years old!`
};

Object.prototype.hello = () => 'Hello';

console.log('personProto: ', personProto.toString());

// clean window object
delete(window.hello);
delete(personProto);

// End script
console.groupEnd();