//Exercise1
let sum = (a, b) => a + b;

alert(sum(2,2));//it show "4"

//Exercise2
//1.
function calcualtegram(kilo){
	return kilo/1000;
}
calcualtegram(5);//it shows "0.005"

//2.
const getgram=function calcualtegram(kilo){
	return kilo/1000;
};
console.log(getgram(3));//it shows 0.003

//3.Function declaration sets the type, return and parameters
//and with function expression you can define a functon inside an expression.

//4.
const kiloToGram=kilo=>kilo/1000;
//kiloToGram(5)-> 0.005

//Exercise3
(function (job, location, partner, kids) {
	alert("You will be a "+ job + " in " + location + ", and married to " + partner + " with " + kids + " kids ");
})("doctor", "israel", "anna", "2");


//Exercise4
//Create a Bootstrap Navbar in your HTML file.
//see HTML
//In your js file, create a self invoking funtion that takes 1 argument: 
//the name of the user that just signed in.
//The function should add a div in the nabvar, 
//displaying the name of the user and his profile picture.
(function (username) {
	function name(){
		let div = document.getElementByClassName("container-fluid");
		let text = document.createTextNode('${username}');
		elem.src='profile.jpg';
		
	}
	if (name()){
		div.appendChild(text);
		div.appendChild(elem);
	}
})("John")

//Exercise5
//Part I:



//Part II:
function makeJuice(size){
	const sizeType=["small", "medium", "large"];
}
function sizePick{
	if size="small";
	console.log(sizeType[0]);
	if size="medium";
	console.log(sizeType[1]);
}
else{
	console.log(sizeType[2])

}

function addIngredients("banana","orange","melon"){
	console.log("The client wants a "+ makeJuice + " juic, containing banana, orange and melon")
}

//not sure how to continue....Need to practice more nested functions



