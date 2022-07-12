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
	let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
	const star= epic.reduce((accumulator, currentValue)=>{
		return accumulator+currentValue
	}, 0);
	console.log(star);

	//Exercise4
	let students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
	{name: "Liam", course: "Computer Science", isPassed: false}, 
	{name: "Jenner", course: "Information Technology", isPassed: true}, 
	{name: "Marco", course: "Robotics", isPassed: true}, 
	{name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
	{name: "Jamie", course: "Big Data", isPassed: false}];

//Using the filter() method, create a new array, containing the students that passed the course.
const pass= students.filter(isPassed=>isPassed==true);
console.log(pass);
//Bonus : Chain the filter method with a forEach method, to congratulate the students with their name and course name
// (ie. “Good job Jenner, you passed the course in Information Technology”, “Good Job Marco you passed the course in Robotics” ect…)




