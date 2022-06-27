//Exercise 1
let x = 5;
let y = 2;

You should display:
x is the biggest number

if (x==5){
	console.log("x is the biggest number")
} else {
	console.log("y is the smallest number")
}


//Exercise 2
//Instructions
//Create a variable called newDog where it’s value is “Chihuahua”.

let newDog="Chihuahua";

//Check and display how many letters are in newDog.
let newDog= text;
let length= text.length;
console.log(length);

//Display the newDog variable in uppercase and then in lowercase (no need to create new variables, just console.log twice).
let upperCase=text.toUpperCase();
Let lowerCase=text.toLowerCase();

//Check if the variable newDog is equal to “Chihuahua”
//if it does, display ‘I love Chihuahuas, it’s my favorite dog breed’
//else, console.log ‘I dont care, I prefer cats’

if (newDog="Chihuahua"){
	console.log("I love Chihuahuas, it’s my favorite dog breed!")
} else {
	console.log("I dont care, I prefer cats");

//Exercise 3
//Instructions
//Prompt the user for a number and save it to a variable.
const number = prompt("Enter a number: ");

//Check whether the variable is even or odd.
//If it is even, display: “x is an even number”. Where x is the actual number the user chose.
//If it is odd, display: “x is an odd number”. Where x is the actual number the user chose.


if(number % 2 == 0) {
	console.log("The number is even.");
}

else {
	console.log("The number is odd.");
}

let number="x";

if(number % 2 == 0) {
	console.log("[number] is an even number");
}

else {
	console.log("[number] is an odd number");
}


//Exercise 4
let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
let numberUsers=user.length;
let userNumber= users.length;
console.log(userNumber);
4


if (userNumber==0){
	console.log("no one is online")
} 

if (userNumber==1){
	console.log(“<name_user> is online”)
}

if (userNumber==2){
	console.log(“<name_user1> and <name_user2> are online”)
}

if (userNumber>2){
	console.log(users[0,1]+"and 3 more are online")
}