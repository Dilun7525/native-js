console.groupCollapsed('===>    DESTRUCTURIZATION');

function calcValues(a,b){
  return [
    a +b,
    a-b,
    a *b,
    a / b,
    undefined
  ];
}

console.log('calcValues(20, 10)', calcValues(20, 10));

const [sumDestr1, subDestr1] = calcValues(42,10);
console.log('sum, sub', sumDestr1, subDestr1);

const [sumDestr2, ,multDestr2] = calcValues(42,10);
console.log('sum, mult', sumDestr2, multDestr2);

const [sumDestr3,,,,lastDestr3 = 'Not value into array!' ] = calcValues(42,10);
console.log('sum, last', sumDestr3, lastDestr3);

const personDestr = {
  name: 'Max',
  age: 20,
  address: {
    country: 'Russia',
    city: 'Moscow'
  }
};

console.log('personDestr: ', personDestr);

const {
  name: nameDestr,
        address,
        car = 'Not car!',
  address: {city: homeTown, country}
  
} = personDestr;
console.log('nameDestr, address, car, homeTown, country: ', nameDestr, address, car, homeTown, country);

function logPerson({name, age}){
  console.log(`${name} (${age})`);
}

logPerson(personDestr);


console.groupEnd();
