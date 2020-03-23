console.groupCollapsed('===>    PROXY');
// More info to https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy

const personProxy = {
	name: 'Anatoliy',
	age: 32,
	job: 'Fullstack'
};

// Objects
const po = new Proxy(personProxy, {
	get(target, prop){
		console.log(`Getting prop ${prop}`);
		return !(prop in target)
			? prop.split('_').map(p => target[p]).join(' ') // ex. po.age_name_age ==> 32 Anatoliy 32
			: target[prop];
	},
	set(target, prop, value, receiver){
		if(prop in target){
			target[prop] = value;
			console.log(`Setting prop ${prop} in value = ${value}`);
		}else{
			throw new Error(`No ${prop} field in target`);
		}
	},
	has(target, prop){
		return ['name', 'age', 'job'].includes(prop);
	},
	deleteProperty(target, prop){
		console.log(`Delete prop ${prop} from target`);
		return delete target[prop];
	}
	
});

// Functions
const log = textLog => `LOG: ${textLog}`;

const pf = new Proxy(log, {
	apply(target, thisArg, argArray){
		console.log('Calling fn...');
		return target.apply(thisArg, argArray).toUpperCase();
	}
});

// Classes
class ClPersonProxy{
	constructor(name, age){
		this.name = name;
		this.age = age;
	}
}

const PersonProxy = new Proxy(ClPersonProxy, {
	construct(target, argArray, newTarget){
		console.log('Construct...');
		
		return new Proxy(new target(...argArray), {
			get(t, prop, receiver){
				console.log(`Getting prop "${prop}"`);
				return t[prop];
			}
		});
	}
});

const p = new PersonProxy('Maxim', 30);

////////////
// EXAMPLES

// Wrapper
const withDefaultValue = (target, defValue = 0) => {
	return new Proxy(target, {
		get: (obj, prop) => (prop in obj) ? obj[prop] : defValue,
	})
};

const position = withDefaultValue(
	{
		x: 34,
		y: 45
	},
	0);

console.log('Position:', position);

// Hidden properties
const withHiddenProps = (target, prefix = '_') => {
	return new Proxy(target, {
		has: (obj, prop) => (prop in obj) && (!prop.startsWith(prefix)),
		ownKeys: obj => Reflect.ownKeys(obj).filter(p => !p.startsWith(prefix)),
		get: (obj, prop, receiver) => (prop in receiver) ? obj[prop] : undefined
	});
};

const dataHid = withHiddenProps(
	{
		name: 'Andrey',
		age: 31,
		_uid: 1256461
	}
);

// Optimization
const IndexArray = new Proxy(Array, {
	construct(target,[argArray], newTarget){
		const index = {};
		argArray.forEach(item => (index[item.id] = item));
		
		return new Proxy(new target(...argArray), {
			get(arr, prop){
				switch(prop){
					case 'push': return item => {
						index[item.id] = item;
						arr[prop].call(arr, item)
					};
					case 'findByID':
						return id => index[id];
					default: return arr[prop];
				}
			}
		});
	}
});

const user = new IndexArray([
		{id: 18,	name: 'Anatoliy',	job: 'Fullstack',	age: 32},
		{id: 27,	name: 'Andrey',		job: 'Teacher',		age: 30},
		{id: 32,	name: 'Elena',		job: 'Student',		age: 21},
		{id: 40,	name: 'Vasiliy',	job: 'Backend',		age: 28},
	]);

console.groupEnd();

