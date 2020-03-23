console.groupCollapsed('===>    MAP, SET, WEAKMAP, WEAKSET');

// -----
// Map
console.groupCollapsed('MAP');
const objMap = {
	name: 'Hariton',
	age: 34,
	job: 'Fullstack'
};

const entries = [
	['name', 'Hariton'],
	['age', 34],
	['job', 'Fullstack']
];

console.log('Object.entries(object): ', Object.entries(objMap));
console.log('Object.fromEntries(array): ', Object.fromEntries(entries));

const map = new Map(entries);

map
	.set('newField', '42')
	.set(objMap, 'Value of object')
	.set(NaN, 'NaN ??');

console.log('has(objMap.nonField): ', map.has('nonField'));
console.log('size: ', map.size);

// =========
for(let [key, value] of map){ // ...of map  === ...of map.entries()
	console.log('[key, value]: ', key, value);
}

const array1 = Array(...map); // OR
const array2 = Array.from(map);

// Example
const usersArr = [
	{name: 'Anna'},
	{name: 'Boris'},
	{name: 'Vladimir'},
];

const visits = new Map();

visits
	.set(usersArr[0], new Date())
	.set(usersArr[1], new Date(new Date().getTime() + 1000*60))
	.set(usersArr[2], new Date(new Date().getTime() + 5000*60*24));

function lastVisit(user){
	return visits.get(user);
}

console.log('lastVisit(usersArr[1]): ', lastVisit(usersArr[1]));

// End group MAP
console.groupEnd();

// -----
// Set
console.groupCollapsed('SET');

const set = new Set([1,2,4,3,3,6,5,5,5,7,7,8,9,9]);
set
	.add(10)
	.add(20)
	.add(32);

console.log('set: ', set);
console.log('set.has(32): ', set.has(32));
console.log('set.size: ', set.size);
console.log('set.delete(20): ', set.delete(20));
console.log('set.size: ', set.size);
console.log('set.clear(): ', set.clear());
console.log('set.size: ', set.size);

// ==========
function uniqValues(array){
	return [...new Set(array)]
}

console.log('uniqValues([1,2,2,3,55,3,8,9,9,7,7]) ==>', uniqValues([1,2,2,3,55,3,8,9,9,7,7]));

// End group SET
console.groupEnd();

// -----
// WEAKMAP
console.groupCollapsed('WEAKMAP');

let objForWeakMap = {name: 'weakMap'};

// Example not clear object
// const arrObj = [objForWeakMap];	// there is a link to the objForWeakMap here
// objForWeakMap = null;			// clear objForWeakMap
// console.log(objForWeakMap);		// write null, but object in memory not clear


// key - only objects
// Clear key and value if delete link on object with key = object
// METHODS: get, set, delete, has
const weakMap = new WeakMap([
  [objForWeakMap, 'obj values for weakMap']
]);

// =====
const cache = new WeakMap();

function cacheUser(user){
  if(!cache.has(user)){
    cache.set(user, Date.now());
  }
  return cache.get(user);
}

let anna = {name: 'Anna'};
let alex = {name: 'Alex'};

cacheUser(anna);
cacheUser(alex);
console.log('cache:', cache);

anna = null;

console.log('cache.has(anna):', cache.has(anna));
console.log('cache.has(alex):', cache.has(alex));


// End group WEAKMAP
console.groupEnd();


// -----
// WEAKSET
console.groupCollapsed('WEAKSET');

// key - only objects
// Clear key and value if delete link on object with key = object
// METHODS: get, set, delete, has
const weakSet = new WeakSet();

const users = [
  {name: 'Elena'},
  {name: 'Alex'},
  {name: 'Irina'},
];

const visitsUsers = new WeakSet();
visitsUsers
  .add(users[0])
  .add(users[1]);

console.log('visitsUsers:', visitsUsers);

users.splice(1,1);
console.log('visitsUsers.has(users[0]):', visitsUsers.has(users[0]));
console.log('visitsUsers.has(users[1]):', visitsUsers.has(users[1]));

// End group WEAKSET
console.groupEnd();

console.groupEnd();