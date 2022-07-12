//Exercise1

//------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
//The output will be :['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']


//------2------
const country = "USA";
console.log([...country]);
//I thought that the output will be "USA", but it was "u.s.a"
//Probably because of the [...""] which takes the arrays of the value.

//------Bonus------
let newArray = [...[,,]];
console.log(newArray);
//I think that the output will be just ",," becuase of []
///The output is unedefined becuase ",," inside [] is not a value.

//Exercise2
//1.
let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
{ firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
{ firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
{ firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
{ firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
{ firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
{ firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

const welcomeStudents= users.map((firstName)=>{
	return "Hello firstName";
});
console.log(welcomeStudents);

//2.
const residents=users.filer(users=> role=='Full Stack Resident');
console.log('filter', residents);

//3.
const last=users.map((lastName=>lastName);

	let lastStack=data
	.filter(residents)
	.map(last);


	//Exercise 3
