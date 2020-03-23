console.groupCollapsed('===>    GENERATORS. SYMBOL ITERATOR, FOR OF');

function* strGenerator(str = 'Hello'){  // * - generator
	for(let i in str){
		yield str[i];
	}
}

const strGen = strGenerator();

let tmpStr = true;
while(tmpStr){
	let strInside = strGen.next();
	tmpStr = !strInside.done;
	tmpStr && console.log(strInside.value);
}

function* numberGen(n = 10){
	for(let i=0; i<n; i++){
		yield i;
	}
}

for(let k of numberGen(4)){
	console.log(k);
}

console.groupEnd();