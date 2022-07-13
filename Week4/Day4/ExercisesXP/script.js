//Exercise1
const person = {
	name: 'John Doe',
	age: 25,
	location: {
		country: 'Canada',
		city: 'Vancouver',
		coordinates: [49.2827, -123.1207]
	}
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
//I am John Doe from Vancouver, Canda. Latitude (49.2827), Longitude(-123.1207)

//Exercise2
function displayStudentInfo(objUser){
	objUser={
		first:'Elie',
		last:'Schoppik'
	}
};

displayStudentInfo(Object.entries(objUser));
for (let [key,value] of Object.entries(objUser)){
	console.log(`${key}: ${value}`);
}

//Exercise3
//1.
const users = { user1: 18273, user2: 92833, user3: 90315 };
console.log(Object.entries(users));
//2.
const id= function userId{
	let value= value*2;
}
console.log(`[{$key}; {$id}]`);

//Exercise5
class Dog {
	constructor(name) {
		this.name = name;
	}
};
class Labrador extends Dog {
	constructor(name, size) {
		this.name = name;
		this.size = size;
	}
};//This is the one that will extend the class dog becuase it will show both "name" and "size".

//Exercise6
//1.
[2] === [2] 
//False becuase of [] does not show what's the true value
{} === {}
//Also falsr because {} does not indicate the values indise.
//2.
const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number)//4 because object1=object2
console.log(object3.number)//4 because object2=object3
console.log(object4.number)//5 becuase even though that now object1.value is 4, object4 is 5 within the {}.

//1.
class animal{
	constructor(name, type, color){
		this.name=name;
		this.type=type;
		this.color=color;
	}
}

//2.
class mamal extends animal{
	constructor(name, type, color){
		super(name, type, color)
		this.sound=sound;
	}
	sound(sound){
		console.log(`My name is ${this.name}, I'm a ${this.type}, my color is ${this.color} and I go ${this.sound}`);
	}
}

//3.
const farmerCow= {
	name: Lily;
	type: cow;
	color: brown and white
}

function cow{
	const question("What animal are you?");{
		if (input.question===farmerCow);
		console.log(`Mooo I'm a ${this.type}, named ${this.name} and I'm ${this.color}`)
	}
