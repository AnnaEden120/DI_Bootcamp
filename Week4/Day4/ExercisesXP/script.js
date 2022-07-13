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
