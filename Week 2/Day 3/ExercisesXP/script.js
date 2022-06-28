//Exercise 1
//part1
//1)
let people = ["Greg", "Mary", "Devon", "James"];
console.log(people.shift());
console.log(people);
['Mary', 'Devon', 'James']

//2)
people.pop(2);
'James'
console.log(people);
['Mary', 'Devon']
people.push("Jason")
['Mary', 'Devon', 'Jason']

//or
people.splice(2, "Jason");

//3.
people.push("Anna");

//4.
people.indexOf("Mary");
0

//5.
let newPeople= people.slice(1,3);
['Devon', 'Jason']

//6.
newPeople.indexOf("Foo");
-1
//It returns -1 because it's not exist in the array.

//7.
let last= newPeople[newPeople.length - 1];
console.log(last);//Jason

//Part2.
//1.
for (let i in people){
	console.log(people[i])
};

//2.
for (people i = 0; i < 2; i++) {
	if (i === "Jason") { 
		break;
	}
	console.log("The people are" $people); 
}


//Exercise 2
//1.
let colors= ["Red", "Blue", "Purple", "Black"];
console.log(colors);
//2.
for (let i in colors){
	if (i=0){
		console.log("My 1st choice is Red")
	}
	if (i=1){
		console.log("My 2nd choice is Blue")
	}
	if (i=2){
		console.log("My 3rd choice is Purple")
	}
	if (i=3){
		console.log("My 4th choice is Black")
	}	
};

//Exercise 3
//1.
let num=prompt("Type a number");
var result;
let i in result;
if (typeof(result) !="number"){
	console.log("NaN")
}
//2.
while (result<10){
	console.log("Type another number")
}

//Exercise 4
//1.
let building = {
	numberOfFloors : 4,
	numberOfAptByFloor : {
		firstFloor : 3,
		secondFloor : 4,
		thirdFloor : 9,
		fourthFloor : 2,
	},
	nameOfTenants : ["Sarah", "Dan", "David"],
	numberOfRoomsAndRent:  {
		sarah: [3, 990],
		dan :  [4, 1000],
		david : [1, 500],
	},
};
//2.
console.log(building["numberOfFloors"]);
//3.
console.log(building["firstFloor"]["thirdFloor"]);
//4.
console.log(nameOfTenants[1][1]);


//Exercise 5
