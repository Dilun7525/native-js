console.groupCollapsed('===>    REST, SPREAD');

const citiesRussia = ['Moscow', 'Novosibirsk', 'Saint Petersburg', 'Vladivostok'];
const citiesEurope = ['Prague', 'Berlin', 'Paris'];

const citiesRussiaWithPopulation = {
  Moscow: 20,
  Novosibirsk: 3,
  SaintPetersburg: 8,
  Vladivostok: 2
};
const citiesEuropeWithPopulation = {
  Moscow:  26,
  Prague: 3,
  Berlin: 10,
  Paris:2
};

// -----
// SPREAD
console.groupCollapsed('SPREAD');

console.log('array::citiesRussia:', citiesRussia);
console.log('...citiesRussia:', ...citiesRussia);

// const allCities = citiesEurope.concat(citiesRussia); //Old variant
const allCities = [...citiesRussia, 'Beijing',...citiesEurope];
console.log('[...citiesRussia, \'Beijing\',...citiesEurope]: ', allCities);

console.log('object::citiesRussiaWithPopulation:', citiesRussiaWithPopulation);
console.log('CLONE OBJ:: {...citiesRussiaWithPopulation, ...citiesEuropeWithPopulation}:', {...citiesRussiaWithPopulation, ...citiesEuropeWithPopulation});

const numbers = [5, 37, 42, 17, 32, 64, 128];
console.log('array::numbers:', numbers);
console.log('Example: Math.max(1,2,3,...):', Math.max(...numbers));

const divs = document.querySelectorAll('#res_spread div');
const nodes = [...divs];
console.log('collection:divs', divs);
console.log('array:nodes', nodes);

console.log('Array.isArray(divs)', Array.isArray(divs));
console.log('Array.isArray(nodes)', Array.isArray(nodes));

// End group SPREAD
console.groupEnd();


// -----
// REST
console.groupCollapsed('REST');

function sumSpred(a, b){
  return a+b;
}

function sumRest(...rest){
  return rest.reduce((a, i ) => a + i , 0);
}

const numbersRestSpred = [1,2,3,4,5,6,7,8,9];
console.log('numbersRest: ', numbersRestSpred);
console.log('SPREAD:: sumSpred(...numbersRestSpred): ', sumSpred(...numbersRestSpred));
console.log('REST:: sumRest(...numbersRestSpred): ', sumRest(...numbersRestSpred));

const [a, b, ...other] = numbersRestSpred;
console.log('a, b, other: ', a, b, other);

// End group REST
console.groupEnd();


console.groupEnd();
