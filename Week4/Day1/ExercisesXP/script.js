//Exercise1
//#1
function q1() {
	var a = 5;
	if(a > 1) {
		a = 3;
	}
	alert(a);
}
//it will show 5
//real andwer: it showed "Uncaught ReferenceError: q1 is not defined

//#2.
var a = 0;
function q2() {
	a = 5;
}

function q22() {
	alert(a);
}

//it will show 5
//real asnwer:they are both not defined

//#3
function q3() {
	window.a = "hello";
}

function q32() {
	alert(a);
}
//my answer= function q3() will not show anything, function q32() will show "hello"
//real answer=
function q1() {
	var a = 5;
	if(a > 1) {
		a = 3;
	}
	alert(a);
}
//it will show 5
//real andwer: it showed "Uncaught ReferenceError: q1 is not defined

//#2.
var a = 0;
function q2() {
	a = 5;
}

function q22() {
	alert(a);
}

//it will show 5
//real asnwer:they are both not defined

//#3
function q3() {
	window.a = "hello";
}

function q32() {
	alert(a);
}
//my answer= function q3() will not show anything, function q32() will show "hello"
//real answer= function q3() showed "undefined", function q32() will show "hello"

//#4
var a = 1;
function q4() {
	var a = "test";
	alert(a);
}

//my answer= the alret will show "test"
//q4()- the alret will showed "test"

//#5
var a = 2;
if (true) {
	var a = 5;
	alert(a);
    //my answer: it will show "error" because there is not "else" after the "if"
    //alert(a): "VM152:1 Uncaught ReferenceError: a is not defined"


 //Exercise2
 function winBattle(){
 	return true;
 }
//Transform the winBattle() function to an arrow function.
var winBattle=()=>alert("true");
winBattle();
//Create a variable called experiencePoints.
var experiencePoints;
//Assign to this variable, a ternary operator. 
//If winBattle() is true, the experiencePoints variable should be equal to 10, 
//else the variable should be equal to 1.
Console.log(winBattle? experiencePoints==10: experiencePoints==1);
//Console.log the experiencePoints variable.

//Exercise3
console.log(isString('hello')); 
//true
console.log(isString([1, 2, 4, 0]));
//false

var question=(x)=>show("true" || "false");
let isString= x ===string? "true", "false";
return isString;

//Exercise4
let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
//Write a JavaScript program that displays the colors in the following order :
“1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
colors.forEach(function(e){
	for (i>0, i<7, i++){
		console.log(i+"#choice is"+e);
	}
})
//Check if at least one element of the array is equal to the value “Violet”. 
If yes, console.log("Yeah"), else console.log("No...")
//Hint : Use the array methods taught in class. Look at the lesson Array Methods.
colors.forEach(function(item){
	if (item=='Violet'){
		consoloe.log("Yeah");
	}else{
		consoloe.log("No...")
	}
}
}




