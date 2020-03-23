console.groupCollapsed('===>    OBJECTS: SETTER, GETTER, CREATE');

const objPerson = Object.create(
	{// prototype
		exPrototypeMethod: ()=>{ console.log('exPrototypeMethod...')},
		
	},
	{
	name: {
		value: 'Anatoliy',
		enumerable: true,	// on visible in Object (ex. for(key in objPerson)...)
		writable: true,		// allowed changed variable
		configurable: true,	// allowed configuring (ex. delete(objPerson.name))
	},
	birthYear: {
		value: 1987,
		enumerable: true,
		writable: true,
		configurable: true,
	},
	exDefaultParam:{
		value: 'Default value for param',
		enumerable: false,
		writable: false,
		configurable: false,
	},
	age: {
		get(){
			return new Date().getFullYear() - this.birthYear;
		},
		set(value){
			this.birthYear = new Date().getFullYear() - value
		}
	}
});

console.log('objPerson: ', objPerson);
console.log('objPerson.age: ', objPerson.age);
objPerson.age = 30;
console.log('After changed objPerson.age: ', objPerson.age);

for (let key in objPerson){
	// exclude prototype properties
	if(objPerson.hasOwnProperty(key)){
		console.log('objPerson key: ', key, `(${objPerson[key]})`);
	}
}

console.groupEnd();
