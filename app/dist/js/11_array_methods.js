console.groupCollapsed('===>    ARRAY METHODS: FOREACH, MAP, FILTER, REDUCE, FIND, FINDINDEX');

const peopleArray = [
	{name: 'Anatoliy',	age: 32, budget: 100000},
	{name: 'Andreiy',	age: 30, budget: 90000},
	{name: 'Nadezhda',	age: 28, budget: 80000},
	{name: 'Vasiliy',	age: 26, budget: 70000},
	{name: 'Victoria',	age: 24, budget: 60000},
	{name: 'Serafim',	age: 22, budget: 50000},
	{name: 'Joe',		age: 20, budget: 40000},
	{name: 'Anna',		age: 18, budget: 30000},
	{name: 'Petr',		age: 16, budget: 20000},
];

// FOR
for(let i=0; i< peopleArray.length; i++){
	console.log('For: ', peopleArray[i]);
}

// FOR (ESMA 6)
for(let people of peopleArray){
	console.log('For-of: ', people);
}

// ForEach
peopleArray.forEach((people, index, pArr) => console.log('ForEach: ', people));

// Map
peopleArray.map(person => {
	person.info = `${person.name} (${person.age})`;
	return person;
});
console.log('Map: ', peopleArray);

// Filter
const filterPeopleArray = peopleArray.filter(person => 20 <=person.age && person.age<=30);
console.log('Filter: ', filterPeopleArray);

// Reduce
const amountPeopleArray = peopleArray.reduce((total, person) => total + person.budget, 0);
console.log('Reduce: amount = ', amountPeopleArray);

// Find
const findPeopleArray = peopleArray.find( person => person.name === 'Victoria');
console.log('Find: name ===Victoria: ', findPeopleArray);

// FindIndex
const findIndPeopleArray = peopleArray.findIndex( person => person.name === 'Victoria');
console.log('FindIndex: name ===Victoria: ', findIndPeopleArray);

console.groupEnd();