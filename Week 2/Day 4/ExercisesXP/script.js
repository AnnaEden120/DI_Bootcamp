//Exercise 1
//Part I : function with no parameters

//Create a function called infoAboutMe() that takes no parameter.
function aboutMe(){
	console.log("hello")
}
//The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
//Call the function.
function aboutMe(name,age){
	console.log("My name is" $name "my age is" $age)
}

aboutMe("Anna", 32);
//Part II : function with three parameters

//Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
//The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
//Call the function twice with the following arguments:
//infoAboutPerson("David", 45, "blue")
//infoAboutPerson("Josh", 12, "yellow")

function inforAboutPerson(personName, personAge, personFavoriteColor){
	console.log("Your name is"  +personName+  "you are"  +personAge+ "years old and your favorite color is" +personFavoriteColor)
}

//Your name is David you are 45 years old and your favorite color is blue
//Your name is 	Josh you are 12 years old and your favorite color is yellow

//Exercise2
function calculate(){
	let amountOfBill = prompt("What is the amount of bill?", "Amount");
	let number= number(amountOfBill)
	let number=x
	if (x<50){
		console.log("x+1.20")
	}
	if (50<x<200){
		console.log("x+1.15")
	}
	else{
		console.log("x+1.1")
	}


