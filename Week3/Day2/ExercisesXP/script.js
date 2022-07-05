//Exercise1
//Using a DOM property, retrieve the h1 and console.log it.
let facts=document.getElementsByTagName("h1"[0]);
console.log(facts);//HTMLCollection[h1.facts]
//Using DOM methods, remove the last paragraph in the <article> tag.
let last= document.getElementsByTagName("h3"[0]).lastChild.innerHTML;
last.remove();
//Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
var redClick=document.getElementsByTagName("h2"[0]);
redClick.addEventListener("click",function(){ 
	redClick.style.backgroundcolor="red";
}
//Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
var history=document.getElementsByTagName("h3"[0]);
history.addEventListener("click",function(){ 
	history.style.display="none";
}
//Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
var clickBold = document.getElementsByTagName("button");
button.addEventListener("click", function{
	p.style.font-weight="bold";
}
//BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)
//html-<h1 id="some" onmouseover="someFacts"> Some Facts </h1>
function (){
	someFacts.style.fontSize=Math.floor(Math.random()*100)+"px";
}
//BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)
//in html:
//<style>
//.hoverOut {
	//position: relative;
	//-webkit-transition: all 1s ease-in-out;
	//-moz-transition: all 1s ease-in-out;
	//-ms-transition: all 1s ease-in-out;
	//-o-transition: all 1s ease-in-out;
	//transition: all 1s ease-in-out;
//	text-align:center;
//	font-size:0;

//}
//.hoverOut:hover{
//	font-size:14px;
	//color:white;

//}
//</style>

//Exercise2
//Retrieve the form and console.log it.
let x= document.form[0];
console.log(x)
//Retrieve the inputs by their id and console.log them.
let first=document.forms[0].element.fname;
let last=document.forms[0].element.lname;
console.log(first,last);
//Retrieve the inputs by their name attribute and console.log them.
let first=document.forms[1,3].elements[0];
let last=document.forms[1,3].elements[0];
console.log(first,last);
//When the user submits the form (ie. submit event listener)
//use event.preventDefault(), why ?//it's useful when you want to prevent submitting a form.
document.getElementsByTagName('form').addEventListener("click", function(event){
	event.preventDefault()
});
//get the values of the input tags,
let getValueInput;
document.getElementById("fname", "lname").innerHTML=getValueInput
console.log(getValueInput);
//make sure that they are not empty,
//create an li per input value,
//then append them to a the <ul class="usersAnswer"></ul>, below the form.

//Exercise3
//Declare a global variable named allBoldItems.
var allBoldItems
//Create a function called getBold_items() that takes no parameter. This function should collect all the bold items inside the paragraph,
 //and assign them to the allBoldItems variable.
 function getBold_items(){
 	let allBoldItems=document.querySelectorAll("strong").innerHTML;
 }
//Create a function called highlight() that changes the color of all the bold text to blue.
function highlight(){
	allBoldItems.style.color="blue";
}
//Create a function called return_normal() that changes the color of all the bold text back to black.
function return_normal(){
	allBoldItems.style.color="black";
}
//Call the function highlight() onmouseover (ie. when the mouse pointer is moved onto the paragraph), and the function return_normal() onmouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example
//in html
//<p onmouseover="hightlight(this)" onmouseout="return_noraml(this)">.......</p>
function highlight(x) {
	x.style.height = "64px";
	x.style.width = "64px";
}

function return_normal(x) {
	x.style.height = "32px";
	x.style.width = "32px";
}

//Exercise4// it's include a form type, Ziv told us not to do it yet.



