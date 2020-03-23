console.groupCollapsed('===>    CLASSES');

class Animal{
	constructor(options){
		this.name = options.name;
		this.age = options.age;
		this.hasTail = options.hasTail;
	}
	
	get ageInfo(){
		return this.age * 7;
	}
	
	set ageInfo(newAge){
		this.age = newAge;
	}
}
class Cat extends Animal{
	constructor(options){
		super(options);
		this.color = options.color
	}
}

const catBarsik = new Cat(
	{
		name: 'Mongrel',
		age: 5,
		hasTail: false,
		color: 'black'
	}
);

console.log('Barsik: ', catBarsik);
console.log('Barsik age: ', catBarsik.ageInfo);

//----------------------------------------------
// Example

class Component{
	constructor(selector){
		this.$el = document.querySelector(selector); // $el -> $ - denote DOM elements
	}
	
	hide(){
		this.$el.style.display = 'none';
	};
	
	show(){
		this.$el.style.display = 'block';
	};
}

class Box extends Component{
	constructor(options){
		super(options.selector);
		
		this.$el.style.width      = this.$el.style.height = options.size + 'px';
		this.$el.style.background = options.color;
	}
}

class Circle extends Box{
	constructor(options){
		super(options);
		this.$el.style.borderRadius = '50%'
	}
}

const box1 = new Box(
	{
		selector: '#cl_box1',
		size: 100,
		color: 'red',
	}
);

const box2 = new Box(
	{
		selector: '#cl_box2',
		size: 150,
		color: 'green',
	}
);

const circle = new Circle(
	{
		selector: '#cl_circle',
		size: 150,
		color: 'yellow',
	}
);

box1.show();
box2.show();
circle.show();

console.log('box1: ',box1);
console.log('box2: ',box2);
console.log('circle: ',circle);


console.groupEnd();
